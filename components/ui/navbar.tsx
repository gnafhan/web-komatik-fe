"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  {
    label: "Program Kerja",
    href: "#",
    children: [
      { label: "Gemastik", href: "#" },
      { label: "Liga Komatik", href: "#" },
      { label: "Trail", href: "#" },
    ],
  },
  { label: "Prestasi", href: "/prestasi"},
  { label: "Pengurus", href: "#" },
  { label: "Tentang Kami", href: "/tentangkami" },
  { label: "Kontak Kami", href: "#" },
];

export function BlurHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="sticky font-sans top-0 z-20 mx-auto flex w-full items-center justify-between p-5 sm:px-20">
      {/* Glassmorphism layers */}
      <div className="pointer-events-none absolute inset-0  z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Logo */}
        <a className="z-[10] flex items-center gap-2" href="/">
          <img src="/logo/logo_and_text.png" alt="Komatik Logo" className="h-8 w-auto" />
        </a>
        {/* Centered navigation - hidden on mobile */}
        <nav className="z-[10] flex-1 hidden md:flex items-center justify-center gap-8">
          {NAV_ITEMS.slice(0, 5).map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(true)}
                onMouseLeave={() => setDesktopDropdown(false)}
                tabIndex={0}
                onFocus={() => setDesktopDropdown(true)}
                onBlur={() => setDesktopDropdown(false)}
              >
                <button
                  className="hover:text-primary font-semibold font-sans transition-colors flex items-center gap-1 outline-none border-none bg-transparent"
                  aria-haspopup="true"
                  aria-expanded={desktopDropdown}
                  tabIndex={-1}
                >
                  {item.label}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {desktopDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 font-sans font-semibold -translate-x-1/2 mt-2 min-w-[180px] rounded-lg bg-white/80 backdrop-blur-lg shadow-lg py-2 flex flex-col z-30"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="px-4 py-2 text-left hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="hover:text-primary font-semibold font-sans transition-colors">
                {item.label}
              </a>
            )
          )}
        </nav>
        {/* Right-aligned Kontak Kami - hidden on mobile */}
        <div className="z-[10] hidden md:flex items-center gap-4 min-w-[120px] justify-end">
          <a href={NAV_ITEMS[5].href} className="hover:text-primary transition-colors font-semibold font-sans">{NAV_ITEMS[5].label}</a>
        </div>
        {/* Hamburger button - mobile only */}
        <button
          className={`md:hidden p-2 rounded outline-none border-none bg-transparent transition-all ${menuOpen ? 'fixed top-6 right-6 z-40' : 'z-[20]'}`}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((v) => !v)}
          tabIndex={0}
          style={{ boxShadow: 'none' }}
        >
          <motion.div initial={false} animate={menuOpen ? "open" : "closed"} className="relative w-7 h-7 flex flex-col justify-center items-center">
            {/* Hamburger/X lines */}
            <motion.span
              className="block absolute h-0.5 w-6 bg-black rounded"
              variants={{
                closed: { rotate: 0, y: -7 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ left: 2 }}
            />
            <motion.span
              className="block absolute h-0.5 w-6 bg-black rounded"
              variants={{
                closed: { opacity: 1, y: 0 },
                open: { opacity: 0, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ left: 2 }}
            />
            <motion.span
              className="block absolute h-0.5 w-6 bg-black rounded"
              variants={{
                closed: { rotate: 0, y: 7 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ left: 2 }}
            />
          </motion.div>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/60 backdrop-blur-xl shadow-lg md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <nav className="flex flex-col gap-8 text-2xl font-semibold text-black w-full max-w-xs mx-auto" onClick={e => e.stopPropagation()}>
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} className="w-full">
                    <button
                      className="flex items-center justify-between w-full px-2 py-2 hover:text-primary transition-colors font-semibold"
                      onClick={() => setMobileDropdown((v) => !v)}
                      aria-expanded={mobileDropdown}
                      aria-controls="mobile-program-kerja"
                      type="button"
                    >
                      <span>{item.label}</span>
                      <motion.span animate={{ rotate: mobileDropdown ? 90 : 0 }} className="ml-2">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileDropdown && (
                        <motion.div
                          id="mobile-program-kerja"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden flex flex-col pl-6"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="py-2 hover:text-primary transition-colors text-lg"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover:text-primary transition-colors px-2 py-2 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


  