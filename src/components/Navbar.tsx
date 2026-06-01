'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE, SERVICE_NAV, AREA_NAV } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-primary/20 transition-all duration-300 ${
        scrolled ? 'bg-midnight-moss/95 shadow-lg backdrop-blur-md' : 'bg-midnight-moss/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeAll} className="group flex items-center gap-3">
          <Image
            src="/images/southern-buck-lawn-logo.png"
            alt="Southern Buck Lawn logo"
            width={56}
            height={49}
            className="h-14 w-auto transition-transform group-hover:scale-105"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-anton text-2xl tracking-tight text-white transition-colors group-hover:text-safety-orange">
              SOUTHERN BUCK
            </span>
            <span className="font-barlow text-xs font-bold uppercase tracking-widest text-sage">
              Lawn &amp; Landscaping
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-3">
          <Link href="/" className="px-3 py-2 font-barlow text-lg font-semibold text-white/80 transition-colors hover:text-safety-orange">
            Home
          </Link>

          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 px-3 py-2 font-barlow text-lg font-semibold text-white/80 transition-colors hover:text-safety-orange"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 mt-1 w-64 rounded-lg border border-primary/40 bg-midnight-moss py-2 shadow-2xl">
                {SERVICE_NAV.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeAll}
                    className="block px-4 py-2 font-barlow text-base text-white hover:bg-primary/40 hover:text-safety-orange"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseLeave={() => setAreasOpen(false)}>
            <button
              onClick={() => setAreasOpen((v) => !v)}
              onMouseEnter={() => setAreasOpen(true)}
              className="flex items-center gap-1 px-3 py-2 font-barlow text-lg font-semibold text-white/80 transition-colors hover:text-safety-orange"
            >
              Service Areas
              <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="absolute right-0 mt-1 w-60 rounded-lg border border-primary/40 bg-midnight-moss py-2 shadow-2xl">
                {AREA_NAV.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={closeAll}
                    className="block px-4 py-2 font-barlow text-base text-white hover:bg-primary/40 hover:text-safety-orange"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#about" className="px-3 py-2 font-barlow text-lg font-semibold text-white/80 transition-colors hover:text-safety-orange">
            About
          </Link>
          <a href={SITE.phoneHref} className="px-3 py-2 font-barlow text-lg font-semibold text-white/80 transition-colors hover:text-safety-orange">
            {SITE.phone}
          </a>
          <Link
            href="/quote"
            onClick={closeAll}
            className="ml-2 rounded-lg bg-safety-orange px-5 py-2.5 font-barlow text-base font-bold text-midnight-moss shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: quick quote button + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/quote"
            onClick={closeAll}
            className="rounded-lg bg-safety-orange px-4 py-2 font-barlow text-sm font-bold uppercase tracking-wide text-midnight-moss shadow-md active:scale-95"
          >
            Get Quote
          </Link>
          <button onClick={() => setOpen((v) => !v)} className="p-1 text-sage hover:text-white" aria-label="Menu">
            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary/20 bg-midnight-moss pb-4 lg:hidden">
          <div className="space-y-1 px-3 pt-2">
            <Link href="/" onClick={closeAll} className="block rounded px-3 py-2 font-barlow text-lg font-bold text-white hover:bg-primary/20">
              Home
            </Link>
            <div className="border-t border-primary/20 pt-2">
              <p className="px-3 py-1 font-anton text-sm uppercase tracking-wider text-sage">Services</p>
              {SERVICE_NAV.map((s) => (
                <Link key={s.href} href={s.href} onClick={closeAll} className="block px-5 py-2 font-barlow text-base text-white hover:bg-primary/20">
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/20 pt-2">
              <p className="px-3 py-1 font-anton text-sm uppercase tracking-wider text-sage">Service Areas</p>
              {AREA_NAV.map((a) => (
                <Link key={a.href} href={a.href} onClick={closeAll} className="block px-5 py-2 font-barlow text-base text-white hover:bg-primary/20">
                  {a.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-primary/20 pt-3">
              <Link href="/quote" onClick={closeAll} className="block rounded-lg bg-safety-orange py-3 text-center font-barlow text-lg font-bold text-midnight-moss shadow-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
