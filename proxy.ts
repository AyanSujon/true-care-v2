// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request: NextRequest) {
// const isLoggedin = request.cookies.get("next-auth.session-token")?.value

// if(!isLoggedin){
    
//     return NextResponse.redirect(new URL('/login', request.url))
// }
// return NextResponse.next();
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request: NextRequest) { ... }
 
// export const config = {
//   matcher: ['/dashboard/:path*', '/booking/:path*'],
// }






// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function proxy(request: NextRequest) {
//   const isLoggedin = request.cookies.get("next-auth.session-token")?.value

//   if (!isLoggedin) {
//     const callbackUrl = request.nextUrl.pathname + request.nextUrl.search

//     return NextResponse.redirect(
//       new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, request.url)
//     )
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/booking/:path*'],
// }














// import { getToken } from 'next-auth/jwt'
// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'

// export async function proxy(request: NextRequest) {
// const token = await getToken({req: request})
// console.log(token)

// const isAuthenticated = Boolean(token);




//   if (!isAuthenticated) {
//     const callbackUrl = request.nextUrl.pathname + request.nextUrl.search

//     return NextResponse.redirect(
//       new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, request.url)
//     )
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/booking/:path*'],
// }










import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET, // REQUIRED
  });

  console.log("TOKEN:", token);

  const isAuthenticated = Boolean(token);

  if (isAuthenticated) {
    const callbackUrl =
      request.nextUrl.pathname + request.nextUrl.search;

    return NextResponse.redirect(
      new URL(
        `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`,
        request.nextUrl
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/booking/:path*"],
};
