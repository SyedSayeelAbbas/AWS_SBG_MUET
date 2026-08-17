import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { NAVIGATION } from "../../constants/navigation.constants";
import Container from "./Container";
import Logo from "../common/Logo";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on breakpoint change / and lock body
  // scroll while it's open so the page doesn't scroll behind it.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: .6,
      }}
      className="
      fixed
      left-0
      top-4
      z-50
      w-full
      flex
      justify-center
      px-4
      sm:px-0
    "
    >
      <div
        className={`
        w-full
        max-w-[1400px]
        transition-all
        duration-500
        ${
          scrolled || menuOpen
            ? "sm:w-[92%] rounded-[28px] sm:rounded-full border border-white/50 bg-white/55 shadow-[0_20px_60px_rgba(107,70,193,.18)] backdrop-blur-2xl backdrop-saturate-150"
            : "sm:w-full"
        }
      `}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-2">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-brand-600 text-white shadow-lg"
                      : "text-heading hover:bg-brand-50 hover:text-brand-700"
                  }
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Toggle dark mode"
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              hover:bg-brand-50
              transition
            "
            >
              <Moon size={18} />
            </button>

            <Link to={ROUTES.JOIN}>
              <Button size="md" showArrow>
                Join Community
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              text-heading
              transition-colors
              hover:bg-brand-50
              lg:hidden
            "
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* ===================== Mobile Menu Panel ===================== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
                {NAVIGATION.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      rounded-2xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "bg-brand-600 text-white"
                          : "text-heading hover:bg-brand-50"
                      }
                    `
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to={ROUTES.JOIN}
                  onClick={() => setMenuOpen(false)}
                  className="mt-3"
                >
                  <Button showArrow className="w-full">
                    Join Community
                  </Button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}