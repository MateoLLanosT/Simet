"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  {
    label: "Servicios",
    children: [
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
        backgroundColor: "var(--white)",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
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
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/legacy/Logo-simet-.png"
            alt="SIMET S.A.S."
            width={160}
            height={50}
            priority
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menú"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--navy-icons)",
          }}
          className="simet-burger"
        >
          <svg width={28} height={28} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: 20,
          }}
          className={`simet-nav-menu ${menuOpen ? "open" : ""}`}
        >
          <li>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "8px 6px",
                transition: "var(--transition)",
              }}
            >
              Inicio
            </Link>
          </li>

          <li
            className="simet-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: "relative" }}
          >
            <span
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "8px 6px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                cursor: "pointer",
                transition: "var(--transition)",
              }}
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
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 12px)",
                left: 0,
                minWidth: 275,
                background: "var(--white)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-card)",
                border: "1px solid #e2e8f0",
                padding: "10px 0",
                listStyle: "none",
                opacity: dropdownOpen ? 1 : 0,
                visibility: dropdownOpen ? "visible" : "hidden",
                transform: dropdownOpen ? "translateY(0)" : "translateY(10px)",
                transition: "var(--transition)",
                zIndex: 100,
              }}
            >
              {navLinks[1].children?.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "var(--text-main)",
                      textDecoration: "none",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      transition: "var(--transition)",
                    }}
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
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "8px 6px",
                transition: "var(--transition)",
              }}
            >
              Productos
            </a>
          </li>

          <li>
            <a
              href="/#conocenos"
              style={{
                color: "var(--text-main)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "8px 6px",
                transition: "var(--transition)",
              }}
            >
              Conócenos
            </a>
          </li>

          <li>
            <a
              href="/#contacto"
              style={{
                backgroundColor: "var(--primary-red)",
                color: "var(--white)",
                padding: "10px 24px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.92rem",
                letterSpacing: "0.5px",
                transition: "var(--transition)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .simet-burger { display: block !important; }
          .simet-nav-menu {
            position: fixed !important;
            top: 80px !important;
            left: 0 !important;
            width: 100% !important;
            background-color: var(--white) !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px !important;
            gap: 0 !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            display: none !important;
            max-height: calc(100vh - 80px) !important;
            overflow-y: auto !important;
          }
          .simet-nav-menu.open { display: flex !important; }
          .simet-nav-menu > li { width: 100%; border-bottom: 1px solid #f1f5f9; }
        }
      `}</style>
    </header>
  );
}
