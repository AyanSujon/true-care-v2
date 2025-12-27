


'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calculator, Clock, MapPin, Baby, Users, HeartHandshake } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  hourlyRate: number;
  icon: React.ReactNode;
}

const services: Service[] = [
  { id: 'baby', name: 'Baby Care', hourlyRate: 400, icon: <Baby className="w-5 h-5" /> },
  { id: 'elderly', name: 'Elderly Care', hourlyRate: 500, icon: <Users className="w-5 h-5" /> },
  { id: 'sick', name: 'Sick People Care', hourlyRate: 600, icon: <HeartHandshake className="w-5 h-5" /> },
];

const divisions = [
  'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'
];

const CostCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('baby');
  const [duration, setDuration] = useState<string>('4');
  const [division, setDivision] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [totalCost, setTotalCost] = useState<number>(0);

  const currentService = services.find(s => s.id === selectedService) || services[0];

  useEffect(() => {
    const hours = parseFloat(duration) || 0;
    const cost = hours * currentService.hourlyRate;
    setTotalCost(cost);
  }, [duration, selectedService, currentService.hourlyRate]);

  const handleProceed = () => {
    if (!division || !address || !duration) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Proceeding to book ${currentService.name} for ${duration} hours.\nTotal Cost: ৳${totalCost.toLocaleString()}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#ff0099' }}>
            True Care - Cost Calculator
          </h1>

          <Card className="shadow-xl border-none max-w-2xl mx-auto">
            <CardHeader className="bg-gradient-to-r p-5 from-[#ff0099] to-[#ff0064] text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Calculator className="w-8 h-8" />
                Calculate Your Care Service Cost
              </CardTitle>
              <CardDescription className="text-pink-100">
                Select service, duration, and location to see instant pricing
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-8 space-y-8">
              {/* Service Selection */}
              <div className="space-y-3">
                <Label htmlFor="service" className="text-lg font-semibold flex items-center gap-2">
                  {currentService.icon}
                  Select Service
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger 
                    id="service" 
                    className="w-full border-neutral-300 focus:border-[#ff0099] focus:ring-[#ff0099] data-[state=open]:border-[#ff0099]"
                  >
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex items-center gap-3">
                          {service.icon}
                          <span>{service.name} - ৳{service.hourlyRate}/hour</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Hourly rate: <span className="font-bold" style={{ color: '#ff0064' }}>৳{currentService.hourlyRate}</span>
                </p>
              </div>

              {/* Duration */}
              <div className="space-y-3">
                <Label htmlFor="duration" className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Duration (hours)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g., 8"
                  className="border-neutral-300 focus:border-[#ff0099] focus:ring-2 focus:ring-[#ff0099]/20 focus:text-white? no, better keep default text"
                />
                <p className="text-sm text-muted-foreground">Minimum 1 hour, maximum 24 hours per booking</p>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Service Location
                </Label>
                <Select value={division} onValueChange={setDivision}>
                  <SelectTrigger className="border-neutral-300 focus:border-[#ff0099] focus:ring-[#ff0099]">
                    <SelectValue placeholder="Select Division" />
                  </SelectTrigger>
                  <SelectContent>
                    {divisions.map((div) => (
                      <SelectItem key={div} value={div}>{div}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Full Address */}
              <div className="space-y-3">
                <Label htmlFor="address" className="text-lg font-semibold">
                  Full Address
                </Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House No., Road, Area, City/District..."
                  rows={3}
                  className="border-neutral-300 focus:border-[#ff0099] focus:ring-[#ff0099]"
                />
              </div>

              {/* Total Cost Display */}
              <Card className="bg-gradient-to-r from-[#6632ae]/10 to-[#ff0099]/10 border border-[#ff0099]/30">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">Total Estimated Cost</p>
                      <p className="text-sm text-muted-foreground">
                        {duration || 0} hours × ৳{currentService.hourlyRate}/hour
                      </p>
                    </div>
                    <p className="text-4xl font-bold" style={{ color: '#ff0099' }}>
                      ৳{totalCost.toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Proceed Button */}
              <Button
                onClick={handleProceed}
                size="lg"
                className="w-full text-lg py-6 bg-[#ff0099] hover:bg-[#ff0064] text-white hover:text-white transition-colors"
              >
                Proceed to Book Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CostCalculator;