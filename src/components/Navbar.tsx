"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  {
    label: "Servicios",
    children: [
      { href: "/servicios/mecanizado-cnc", label: "Centro de Mecanizado y Torno CNC" },
      { href: "/servicios/corte-laser", label: "Corte Láser de Alta Precisión" },
      { href: "/servicios/diseno-proyectos", label: "Diseño de Proyectos Metalmecánicos" },
      { href: "/servicios/modelado-3d", label: "Modelado 3D para Manufactura" },
      { href: "/servicios/asesoria-dfm", label: "Asesoría Técnica en DFM y Costos" },
    ],
  },
  { href: "/#productos", label: "Productos" },
  { href: "/#conocenos", label: "Conócenos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      style={{
        background: "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/legacy/Logo-simet-.png"
            alt="SIMET S.A.S."
            width={160}
            height={50}
            priority
            style={{ width: "auto", height: 46 }}
          />
        </Link>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menú"
          style={{
            display: "none",
            background: "rgba(241, 245, 249, 0.8)",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            cursor: "pointer",
            padding: "8px",
            color: "var(--navy-icons)",
          }}
          className="simet-burger"
        >
          <svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: 14,
          }}
          className={`simet-nav-menu ${menuOpen ? "open" : ""}`}
        >
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "var(--transition)",
                display: "block",
              }}
              className="simet-nav-item"
            >
              Inicio
            </Link>
          </li>

          {/* DESPLEGABLE CON LOS 5 SERVICIOS */}
          <li
            className="simet-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: "relative" }}
          >
            <span
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "8px 12px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                transition: "var(--transition)",
              }}
              className="simet-nav-item"
            >
              Servicios
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  transition: "transform 0.25s ease",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </span>

            {/* MENÚ FLOTANTE GLASS */}
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: 0,
                minWidth: 310,
                background: "rgba(255, 255, 255, 0.94)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset",
                border: "1px solid rgba(226, 232, 240, 0.85)",
                padding: "8px",
                listStyle: "none",
                opacity: dropdownOpen ? 1 : 0,
                visibility: dropdownOpen ? "visible" : "hidden",
                transform: dropdownOpen ? "translateY(0)" : "translateY(8px)",
                transition: "var(--transition)",
                zIndex: 100,
              }}
              className="simet-dropdown-list"
            >
              {navLinks[1].children?.map((child) => (
                <li key={child.href} style={{ listStyle: "none" }}>
                  <Link
                    href={child.href}
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    style={{
                      display: "block",
                      padding: "11px 16px",
                      color: "#334155",
                      textDecoration: "none",
                      fontSize: "0.89rem",
                      fontWeight: 600,
                      borderRadius: "8px",
                      transition: "var(--transition)",
                    }}
                    className="simet-sublink"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a
              href="/#productos"
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "var(--transition)",
                display: "block",
              }}
              className="simet-nav-item"
            >
              Productos
            </a>
          </li>

          <li>
            <a
              href="/#conocenos"
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "var(--transition)",
                display: "block",
              }}
              className="simet-nav-item"
            >
              Conócenos
            </a>
          </li>

          <li style={{ marginLeft: 6 }}>
            <a
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                color: "var(--white)",
                padding: "11px 24px",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.86rem",
                letterSpacing: "0.6px",
                transition: "var(--transition)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 18px -4px rgba(158, 28, 37, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              className="hover-lift"
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .simet-nav-item:hover {
          color: var(--primary-red) !important;
          background: rgba(158, 28, 37, 0.06);
        }
        .simet-sublink:hover {
          background: rgba(158, 28, 37, 0.08) !important;
          color: var(--primary-red) !important;
          transform: translateX(4px);
        }

        @media (max-width: 900px) {
          .simet-burger { display: block !important; }
          .simet-nav-menu {
            position: fixed !important;
            top: 80px !important;
            left: 0 !important;
            width: 100% !important;
            background: rgba(255, 255, 255, 0.98) !important;
            backdrop-filter: blur(20px) !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px !important;
            gap: 0 !important;
            box-shadow: 0 15px 30px rgba(0,0,0,0.12) !important;
            display: none !important;
            max-height: calc(100vh - 80px) !important;
            overflow-y: auto !important;
            border-bottom: 1px solid #cbd5e1;
          }
          .simet-nav-menu.open { display: flex !important; }
          .simet-nav-menu > li { width: 100%; border-bottom: 1px solid rgba(241, 245, 249, 0.9); }
          .simet-dropdown-list {
            position: static !important;
            box-shadow: none !important;
            border: none !important;
            padding: 4px 0 8px 12px !important;
            background: #f8fafc !important;
            transform: none !important;
          }
        }
      `}</style>
    </header>
  );
}