// import React from 'react';

// const Register = () => {
//     return (
//         <div>
//             Register
//         </div>
//     );
// };

// export default Register;






















'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Heart, Mail, Lock, Baby, Users, IdCard, User, Phone } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  nidNo: z.string().min(1, { message: "NID No is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z.string().min(10, { message: "Contact number must be at least 10 digits" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z]).*$/, {
      message: "Password must contain at least 1 uppercase and 1 lowercase letter",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const Register: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nidNo: '',
      name: '',
      email: '',
      contact: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate registration (replace with your actual API call)
    console.log('Registration data:', data);
    
    // In real app: await registerUser(data);
    
    // Redirect to booking page after successful registration
    router.push('/booking');
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-pink-200 opacity-20">
          <Heart className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-20 text-purple-200 opacity-20">
          <Baby className="w-40 h-40" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-pink-100 opacity-10">
          <Users className="w-48 h-48" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo/logo.png"
                alt="True Care Logo"
                width={60}
                height={50}
              />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#ff0099] to-[#6632ae] bg-clip-text text-transparent">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-[#323940]/70">
              Join True Care and book trusted care services for your loved ones
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nidNo" className="text-[#323940]">NID No</Label>
                <div className="relative">
                  <IdCard className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    id="nidNo"
                    placeholder="Enter your NID number"
                    className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
                    {...register('nidNo')}
                  />
                </div>
                {errors.nidNo && <p className="text-sm text-red-600">{errors.nidNo.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#323940]">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
                    {...register('name')}
                  />
                </div>
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#323940]">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
                    {...register('email')}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-[#323940]">Contact Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
                    {...register('contact')}
                  />
                </div>
                {errors.contact && <p className="text-sm text-red-600">{errors.contact.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#323940]">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
                    {...register('password')}
                  />
                </div>
                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#ff0099] to-[#ff0064] hover:from-[#ff0064] hover:to-[#6632ae] text-white font-semibold py-6 text-lg shadow-lg transition-all duration-300"
              >
                {isSubmitting ? 'Creating Account...' : 'Register'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#6632ae]/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-[#323940]/60">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-[#6632ae]/30 hover:bg-[#6632ae]/5 text-[#323940] font-medium py-6"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </Button>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-[#323940]/70">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-[#ff0099] hover:text-[#ff0064] transition-colors">
                Log In
              </a>
            </p>
          </CardFooter>
        </Card>

        <p className="text-center mt-8 text-[#323940]/60 text-sm">
          Reliable care for your loved ones, whenever you need it ❤️
        </p>
      </div>
    </div>
  );
};

export default Register;