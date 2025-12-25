'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '../common/Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { title: 'All Services', href: '/services' },
  { title: 'Baby Care', href: '/services/baby-care' },
  { title: 'Elderly Care', href: '/services/elderly-care' },
  { title: 'Sick People Care', href: '/services/sick-people-care' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Logo/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-[#ff0099]">
            Home
          </Link>

          <div className="relative group">
            <button className="font-medium hover:text-[#ff0099]">
              Services
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-lg py-2">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium hover:text-[#ff0099]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button
            className="bg-[#ff0099] hover:bg-[#ff0099]/90 hidden sm:inline-flex"
            asChild
          >
            <Link href="/book-now">Book Now</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}

                <div>
                  <p className="text-lg font-medium mb-3">Services</p>
                  <div className="space-y-2 ml-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block text-muted-foreground hover:text-foreground"
                        onClick={closeMobileMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button className="w-full bg-primary" asChild>
                    <Link href="/book" className='text-white'>Book Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}