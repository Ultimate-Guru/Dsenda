"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ">
      <nav className="relative z-50 w-full transition-all duration-500 bg-[#F9FAF9] backdrop-blur-2xl border-b border-[#EDEDFC] border-foreground/10 ">
        <div className="flex items-center justify-between transition-all duration-500 px-6 lg:px-8 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/dsenda_logo.png"
              alt="Dsenda Logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-[15px] lg:text-[16px] whitespace-nowrap px-3 py-1.5 rounded-xl transition-all duration-300 ${isActive
                    ? "bg-[#EDEDFC] text-[#4F46E5]"
                    : "text-foreground hover:text-[#4F46E5]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] border-[#F9FAF9] text-white rounded-lg transition-all duration-300 cursor-pointer px-3 h-11 text-sm">
              Get Started
              <ArrowRight className="h-4 w-4 mb-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 shrink-0 "
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={` text-3xl font-display transition-all duration-500 ${isActive ? "text-[#4F46E5]" : "text-[#191919]"
                    } ${isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <button
              className=" flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
