


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getSingleProduct } from "@/actions/server/services";

// React Hook Form + Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Form schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, "Invalid phone number"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const durationOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId");

  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [duration, setDuration] = useState<number>(2);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (!serviceId) {
      setLoading(false);
      return;
    }

    async function fetchService() {
      const data = await getSingleProduct(serviceId);
      setService(data);
      setLoading(false);
    }

    fetchService();
  }, [serviceId]);

  const basePrice = service && service.price
    ? parseFloat(String(service.price).replace(/[^\d.]/g, "")) || 0
    : 0;

  const totalPrice = basePrice * duration;

  const onSubmit = async (data: BookingFormData) => {
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Booking Data:", {
      ...data,
      serviceId,
      date: date && format(date, "PPP"),
      time: selectedTime,
      duration,
      totalPrice,
    });

    setSuccess(true);
    toast.success("Booking Request Submitted! 🎉", {
      description: "We’ll contact you shortly to confirm your appointment.",
    });
    setSubmitting(false);
  };

  const isBookingComplete = !!date && !!selectedTime;

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-xl">Loading service details...</p>
      </div>
    );
  }

  if (!serviceId || !service) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-semibold text-neutral-700">
          Invalid or missing service. Please select a service first.
        </h2>
      </div>
    );
  }

  if (success) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
        <CheckCircle className="w-28 h-28 text-green-600 mx-auto mb-8" />
        <h1 className="text-5xl font-bold text-neutral-800 mb-6">Booking Request Sent!</h1>
        <div className="bg-gray-50 rounded-3xl p-10 max-w-2xl mx-auto space-y-5 text-left shadow-lg">
          <p className="text-xl"><strong>Service:</strong> {service.title}</p>
          <p className="text-xl"><strong>Date:</strong> {date && format(date, "PPP")}</p>
          <p className="text-xl"><strong>Time:</strong> {selectedTime}</p>
          <p className="text-xl"><strong>Duration:</strong> {duration} hour{duration > 1 ? "s" : ""}</p>
          <p className="text-3xl font-bold text-pink-600 mt-6">
            Total: ${totalPrice > 0 ? totalPrice.toFixed(2) : "Contact for pricing"}
          </p>
        </div>
        <Button asChild size="lg" className="mt-12">
          <a href="/services">Browse More Services</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-10 text-center">
        Book Your Service
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Service Summary */}
        <div className="space-y-8">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl shadow-2xl bg-gray-100">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="object-cover w-full h-full"
            />
          </div>

          <Card className="border-pink-100 shadow-xl">
            <CardHeader>
              <Badge className="w-fit bg-purple-100 text-purple-800 mb-3">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </Badge>
              <CardTitle className="text-4xl">{service.title}</CardTitle>
              <CardDescription className="text-lg mt-4 leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-pink-600">
                {basePrice > 0 ? `$${basePrice}/hr` : "Contact for pricing"}
              </div>
              <p className="text-gray-600 mt-3 text-lg">
                Professional • Reliable • Compassionate Care
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Booking Form */}
        <Card className="sticky top-8 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">Schedule Your Appointment</CardTitle>
            <CardDescription className="text-base">
              Fill in the details below to request your booking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              {/* Preferred Date & Duration in ONE ROW */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-3">
                  <Label className="text-base">Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-base h-12",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-5 w-5" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date() || d.getDay() === 0}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Duration */}
                <div className="space-y-3">
                  <Label className="text-base">Duration *</Label>
                  <Select value={duration.toString()} onValueChange={(v) => setDuration(Number(v))}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((h) => (
                        <SelectItem key={h} value={h.toString()}>
                          {h} hour{h > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-3">
                <Label className="text-base">Preferred Time *</Label>
                <div className="flex flex-wrap gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        selectedTime === time
                          ? "bg-pink-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-pink-200">
                <p className="text-lg text-gray-700 uppercase tracking-wide">Estimated Total</p>
                <p className="text-5xl font-bold text-pink-600 mt-3">
                  {totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "Contact for quote"}
                </p>
              </div>

              <Separator className="my-8" />

              {/* Customer Info */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="h-12 text-base"
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="h-12 text-base"
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+1 (555) 123-4567"
                    className="h-12 text-base"
                  />
                  {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-base">Additional Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="Any special requirements, medical info, or preferences..."
                    rows={5}
                    className="text-base"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 shadow-lg"
                disabled={!isBookingComplete || submitting || !isValid}
              >
                {submitting ? "Processing Request..." : "Submit Booking Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}































