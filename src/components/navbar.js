"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./site-content";

export default function Navbar() {
  const pathname = usePathname();
  const buttonGradient =
    "linear-gradient(90deg,#02365F 0%,#023863 8%,#023B68 17%,#023D6C 25%,#023F70 33%,#024275 42%,#024479 50%,#02477D 58%,#024982 67%,#024C86 75%,#024E8B 83%,#02518F 92%,#025394 100%)";

  return (
    <header className="sticky top-0 z-30 border-b border-[#e5e7eb66] bg-white/60 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1248px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/Image%20(UU%20CS%20Club%20Logo).png"
            alt="UU CS Club"
            width={38}
            height={48}
            className="h-12 w-[38px]"
          />
          <div>
            <p className="font-[var(--font-raleway)] text-base font-semibold leading-6 text-[#122D43]">
              UU CSC
            </p>
            <p className="text-xs leading-4 text-[#025394]">Uttaranchal University</p>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium leading-5 transition ${
                  isActive ? "text-[#122D43]" : "text-[#122D43CC] hover:text-[#122D43]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{ backgroundImage: buttonGradient }}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
          >
            Join Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
