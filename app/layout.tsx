// import type { Metadata } from "next";
// import { Kumbh_Sans, Sniglet } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// const sniglet = Sniglet({
//   weight: ["400", "800"], // Regular and ExtraBold (common weights available)
//   subsets: ["latin"],
//   variable: "--font-heading",
// });

// const kumbhSans = Kumbh_Sans({
//   weight: ["300", "400", "500", "600", "700"], // Common weights; adjust as needed
//   subsets: ["latin"],
//   variable: "--font-body",
// });
// export const metadata: Metadata = {
//   title: "True Care - Baby Sitting & Elderly Care Service Platform",
//   description: "True Care is a web application that helps users book reliable and trusted care services for children, the elderly, or sick individuals.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }















import type { Metadata } from "next";
import { Sniglet, Kumbh_Sans } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";

const sniglet = Sniglet({
  weight: ["400", "800"], // Regular and ExtraBold (common weights available)
  subsets: ["latin"],
  variable: "--font-heading",
});

const kumbhSans = Kumbh_Sans({
  weight: ["300", "400", "500", "600", "700"], // Common weights; adjust as needed
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "True Care - Baby Sitting & Elderly Care Service Platform",
  description: "True Care is a web application that helps users book reliable and trusted care services for children, the elderly, or sick individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sniglet.className} ${kumbhSans.className} antialiased`}
      // className={`${sniglet.variable} ${kumbhSans.variable} antialiased font-body`}
      >
        <NextAuthProvider>
          {/* <Navbar /> */}
          <main>
            <Toaster richColors position="top-center" />
            {children}
          </main>
          {/* <Footer /> */}
        </NextAuthProvider>
      </body>
    </html>

  );
}

