


'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '../common/Logo';
import { cn } from '@/lib/utils';
import AuthButtons from '../buttons/AuthButtons';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Caretakers', href: '/caretakers' },
  { label: 'Cost Calculator', href: '/cost-calculator' },
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
  const [isServicesOpen, setIsServicesOpen] = React.useState(false); // Collapsible state
  const pathname = usePathname();

  const closeMobileMenu = () => setIsOpen(false);

  const toggleServices = () => setIsServicesOpen((prev) => !prev);

  const isActive = (href: string) => pathname === href;

  return (
      <header className="max-w-7xl mx-auto sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              isActive('/') ? "text-[#ff0099]" : "text-foreground/80 hover:text-[#ff0099]"
            )}
          >
            Home
            {isActive('/') && <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#ff0099]" />}
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-all",
                "text-foreground/80 hover:text-[#ff0099] hover:bg-[#ff0099]/5"
              )}
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200">
              <div className="overflow-hidden rounded-xl shadow-xl bg-background/95 backdrop-blur">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        isActive(service.href)
                          ? "bg-[#ff0099]/10 text-[#ff0099] font-medium"
                          : "hover:bg-[#ff0099]/5 hover:text-[#ff0099]"
                      )}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Nav Items */}
          {navItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href) ? "text-[#ff0099]" : "text-foreground/80 hover:text-[#ff0099]"
              )}
            >
              {item.label}
              {isActive(item.href) && <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#ff0099]" />}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
          >
            <Link href="/login">Login</Link>
          </Button> */}
          <AuthButtons/>
          <Button
            size="sm"
            className="bg-[#ff0099] hover:bg-[#ff0099]/90 text-white shadow-lg shadow-[#ff0099]/20"
            asChild
          >
            <Link href="/book-now">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80  backdrop-blur p-3">
            <div className="flex flex-col gap-6 mt-8">
              {/* Main Links */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-xl font-medium transition-colors",
                    isActive(item.href) ? "text-[#ff0099]" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Collapsible Services Section */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex w-full items-center justify-between text-xl font-semibold text-[#ff0099] mb-3 focus:outline-none"
                >
                  Our Services
                  {isServicesOpen ? (
                    <ChevronUp className="h-6 w-6 transition-transform" />
                  ) : (
                    <ChevronDown className="h-6 w-6 transition-transform" />
                  )}
                </button>

                {/* Collapsible Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="space-y-3 pb-4 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block py-2 text-lg transition-colors",
                          isActive(service.href)
                            ? "text-[#ff0099] font-medium"
                            : "text-muted-foreground hover:text-[#ff0099]"
                        )}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Buttons */}
              <div className="space-y-3 pt-6 border-t border-[#6632ae]">
                {/* <Button
                  variant="outline"
                  className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
                  asChild
                >
                  <Link href="/login">Login</Link>
                </Button> */}
                  <AuthButtons/>
                <Button
                  className="w-full bg-[#ff0099] hover:bg-[#ff0099]/90 text-white shadow-lg shadow-[#ff0099]/20"
                  asChild
                >
                  <Link href="/book-now">Book Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}