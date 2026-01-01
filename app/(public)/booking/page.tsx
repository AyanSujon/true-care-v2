

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
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getSingleProduct } from "@/actions/server/services";

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

  // Safe price extraction — handles missing, undefined, number, or string
  const basePrice = service && service.price
    ? parseFloat(String(service.price).replace(/[^\d.]/g, "")) || 0
    : 0;

  const totalPrice = basePrice * duration;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess(true);
    toast.success("Booking Request Submitted! 🎉", {
      description: "We’ll contact you shortly to confirm your appointment.",
    });
    setSubmitting(false);
  };

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

  // Success Screen
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
              className="object-cover"

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
            <form onSubmit={handleSubmit} className="space-y-7">
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
                  <PopoverContent className="w-auto p-0">
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

              {/* Time */}
              <div className="space-y-3">
                <Label className="text-base">Preferred Time *</Label>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "flex items-center justify-center rounded-lg border-2 py-4 text-base font-medium transition-all",
                        selectedTime === time
                          ? "border-pink-600 bg-pink-50 text-pink-700 shadow-md"
                          : "border-gray-300 hover:border-pink-300 hover:bg-pink-50"
                      )}
                    >
                      <Clock className="mr-2 h-5 w-5" />
                      {time}
                    </button>
                  ))}
                </div>
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
                  <Input id="name" name="name" required placeholder="John Doe" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 123-4567" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-base">Additional Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
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
                disabled={!date || !selectedTime || submitting}
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





