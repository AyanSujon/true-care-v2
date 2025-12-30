




// 'use client';

// import React from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';
// import { Heart, Mail, Lock, Baby, Users } from 'lucide-react';
// import Image from 'next/image';

// const Login: React.FC = () => {
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle login logic here (e.g., call API)
//         console.log('Login submitted', );
//     };

//     return (
//         <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
//             {/* Decorative Background Elements */}
//             <div className="absolute inset-0">
//                 <div className="absolute top-10 left-10 text-pink-200 opacity-20">
//                     <Heart className="w-32 h-32" />
//                 </div>
//                 <div className="absolute bottom-20 right-20 text-purple-200 opacity-20">
//                     <Baby className="w-40 h-40" />
//                 </div>
//                 <div className="absolute top-1/2 left-1/4 text-pink-100 opacity-10">
//                     <Users className="w-48 h-48" />
//                 </div>
//             </div>

//             <div className="relative z-10 w-full max-w-md px-4">
//                 <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
//                     <CardHeader className="space-y-4 text-center">
//                         <div className="flex justify-center mb-4">
//                             <Image
//                                 src="/logo/logo.png"
//                                 alt="True Care Logo"
//                                 width={60}
//                                 height={50}
//                             />
//                         </div>
//                         <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#ff0099] to-[#6632ae] bg-clip-text text-transparent">
//                             Welcome to Back
//                         </CardTitle>
//                     </CardHeader>

//                     <CardContent className="space-y-6">
//                         <form onSubmit={handleSubmit} className="space-y-5">
//                             <div className="space-y-2">
//                                 <Label htmlFor="email" className="text-[#323940]">Email</Label>
//                                 <div className="relative">
//                                     <Mail className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
//                                     <Input
//                                         id="email"
//                                         type="email"
//                                         placeholder="your@email.com"
//                                         required
//                                         className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label htmlFor="password" className="text-[#323940]">Password</Label>
//                                 <div className="relative">
//                                     <Lock className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
//                                     <Input
//                                         id="password"
//                                         type="password"
//                                         placeholder="••••••••"
//                                         required
//                                         className="pl-10 border-[#6632ae]/20 focus:border-[#ff0099] focus:ring-[#ff0099]"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center space-x-2">
//                                     <input type="checkbox" id="remember" className="rounded border-[#6632ae]/30 text-[#ff0099] focus:ring-[#ff0099]" />
//                                     <label htmlFor="remember" className="text-sm text-[#323940]/70 cursor-pointer">
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <a href="#" className="text-sm text-[#ff0064] hover:text-[#ff0099] transition-colors">
//                                     Forgot password?
//                                 </a>
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="w-full bg-gradient-to-r from-[#ff0099] to-[#ff0064] hover:from-[#ff0064] hover:to-[#6632ae] text-white font-semibold py-6 text-lg shadow-lg transition-all duration-300"
//                             >
//                                 Log In
//                             </Button>
//                         </form>

//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <span className="w-full border-t border-[#6632ae]/20" />
//                             </div>
//                             <div className="relative flex justify-center text-xs uppercase">
//                                 <span className="bg-white px-4 text-[#323940]/60">Or continue with</span>
//                             </div>
//                         </div>

//                         <Button
//                             variant="outline"
//                             className="w-full border-[#6632ae]/30 hover:bg-[#6632ae]/5 text-[#323940] font-medium py-6"
//                         >
//                             <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
//                                 <path
//                                     fill="#4285F4"
//                                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                 />
//                                 <path
//                                     fill="#34A853"
//                                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                 />
//                                 <path
//                                     fill="#FBBC05"
//                                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                 />
//                                 <path
//                                     fill="#EA4335"
//                                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                 />
//                             </svg>
//                             Sign in with Google
//                         </Button>
//                     </CardContent>

//                     <CardFooter className="flex justify-center">
//                         <p className="text-sm text-[#323940]/70">
//                             Don't have an account?{' '}
//                             <a href="/register" className="font-semibold text-[#ff0099] hover:text-[#ff0064] transition-colors">
//                                 Register
//                             </a>
//                         </p>
//                     </CardFooter>
//                 </Card>

//                 <p className="text-center mt-8 text-[#323940]/60 text-sm">
//                     Reliable care for your loved ones, whenever you need it ❤️
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;















'use client';

import React from 'react';
import { signIn } from "next-auth/react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Heart, Mail, Lock, Baby, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';


type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const Login: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormValues>();


  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
  const result = await signIn('credentials', {
    email: data.email,
    password: data.password,
    remember: data.remember,
    redirect: false,
  });

  if (!result?.ok) {
    Swal.fire("Error", "Email or password not matched", "error");
  } else {
    // Successful login
    Swal.fire({
      title: 'Logged in!',
      text: 'You have successfully logged in.',
      icon: 'success',
      confirmButtonText: 'Continue'
    }).then(() => {
      // Optional: redirect after confirmation
      // window.location.href = '/dashboard'; 
      router.push("/");

    });
  }
};

  return (
    <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Decorative Background */}
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
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <Image src="/logo/logo.png" alt="True Care Logo" width={60} height={50} />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#ff0099] to-[#6632ae] bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    {...register('email', { required: true })}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-[#ff0064]/60" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    {...register('password', { required: true })}
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register('remember')}
                  className="rounded border-[#6632ae]/30 text-[#ff0099]"
                />
                <Label className="text-sm">Remember me</Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff0099] to-[#ff0064] text-white py-6 text-lg"
              >
                Log In
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-[#ff0099] font-semibold">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
