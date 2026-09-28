"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

// En táctil el tap dispara mouseenter y click a la vez; ahí manda solo el click
const canHover = () => window.matchMedia("(hover: hover) and (min-width: 901px)").matches;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setDropdownOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const inServicios = pathname.startsWith("/servicios");

  return (
    <header className={`simet-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="simet-container simet-nav-inner">
        <Link href="/" className="simet-logo-link" onClick={closeAll}>
          <Image
            src="/brand/logo-simet.png"
            alt="SIMET S.A.S. Servicios Indumetalmecánicos"
            width={600}
            height={222}
            className="simet-logo-img"
            preload
          />
        </Link>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          type="button"
          className="simet-burger-btn"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="simet-nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="simet-nav-menu" className={`simet-nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" className={`simet-nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeAll}>
              Inicio
            </Link>
          </li>

          {/* DESPLEGABLE CON LOS 5 SERVICIOS */}
          <li
            className={`simet-dropdown ${dropdownOpen ? "open" : ""}`}
            onMouseEnter={() => canHover() && setDropdownOpen(true)}
            onMouseLeave={() => canHover() && setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`simet-nav-link ${inServicios ? "active" : ""}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Servicios
              <svg className="simet-arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>
            <ul className="simet-dropdown-menu">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/#productos" className="simet-nav-link" onClick={closeAll}>
              Productos
            </Link>
          </li>

          <li>
            <Link href="/#conocenos" className="simet-nav-link" onClick={closeAll}>
              Conócenos
            </Link>
          </li>

          <li className="simet-btn-nav-wrap">
            <Link href="/contacto" className="simet-btn-nav" onClick={closeAll}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}