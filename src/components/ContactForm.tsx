"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  descripcion: string;
}

declare global {
  interface Window {
    Forminit: any;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "", empresa: "", email: "", telefono: "", servicio: "", descripcion: "",
  });
  const [archivo, setArchivo] = useState<File | null>(null);
  const [nombreArchivo, setNombreArchivo] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: "exito" | "error"; texto: string } | null>(null);
  const [animado, setAnimado] = useState(false);
  const [windowForminit, setWindowForminit] = useState<any>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimado(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Forminit) {
      setWindowForminit(window.Forminit);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArchivo(e.target.files[0]);
      setNombreArchivo("Archivo seleccionado: " + e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).style.background = "#f0f0f0";
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).style.background = "#fafafa";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const zona = e.currentTarget as HTMLElement;
    zona.style.background = "#fafafa";
    if (e.dataTransfer.files.length > 0) {
      setArchivo(e.dataTransfer.files[0]);
      setNombreArchivo("Archivo seleccionado: " + e.dataTransfer.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje(null);
    try {
      const fd = new FormData();
      fd.append("fi-sender-fullName", formData.nombre);
      fd.append("fi-sender-company", formData.empresa);
      fd.append("fi-sender-email", formData.email);
      fd.append("fi-sender-phone", formData.telefono);
      fd.append("fi-select-servicio_interes", formData.servicio);
      fd.append("fi-text-descripcion_tecnica", formData.descripcion);
      if (archivo) fd.append("fi-file-plano_tecnico", archivo);

      const Forminit = windowForminit || window.Forminit;
      if (!Forminit) throw new Error("Forminit SDK no cargado");
      const forminit = new Forminit();
      const { data, error } = await forminit.submit("ltt2uz1fki8", fd);
      if (error) {
        setMensaje({ tipo: "error", texto: `Hubo un problema: ${error.message}. Por favor intenta de nuevo o escríbenos a atencionalcliente@simet.com.co` });
      } else {
        setMensaje({ tipo: "exito", texto: "¡Gracias! Tu solicitud fue enviada correctamente. Te responderemos en menos de 24 horas hábiles." });
        setFormData({ nombre: "", empresa: "", email: "", telefono: "", servicio: "", descripcion: "" });
        setArchivo(null);
        setNombreArchivo("");
        if (formRef.current) formRef.current.reset();
      }
    } catch {
      setMensaje({ tipo: "error", texto: "Error de conexión. Por favor intenta de nuevo o escríbenos a atencionalcliente@simet.com.co" });
    }
    setEnviando(false);
  };

  return (
    <section style={{ padding: "50px 20px", background: "#f0f1f4", minHeight: "100vh" }}>
      <Script
        src="https://forminit.com/sdk/v1/forminit.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Forminit) {
            setWindowForminit((window as any).Forminit);
          }
        }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className={`contacto-intro ${animado ? "fade-up" : ""}`}>
          <h1>Contacto</h1>
          <p>Cuéntanos tu idea y nuestro equipo te responderá con una propuesta ajustada a tus necesidades.</p>
        </div>
        <div className={`contacto-grid ${animado ? "fade-up" : ""}`}>
          <div className="form-lado">
            <div className="eyebrow">Formulario de contacto</div>
            <h2>Solicitar cotización</h2>
            <p className="descripcion">Complete el formulario con los detalles de su requerimiento. Nuestro equipo técnico le responderá en menos de 24 horas hábiles.</p>
            <form ref={formRef} onSubmit={handleSubmit} className="formulario-cotizacion">
              <div className="campos-fila">
                <div className="campo">
                  <label className="etiqueta">Nombre completo *</label>
                  <input type="text" name="nombre" placeholder="Ej. Carlos Ramírez" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label className="etiqueta">Empresa</label>
                  <input type="text" name="empresa" placeholder="Ej. Industrias XYZ S.A.S" value={formData.empresa} onChange={handleChange} />
                </div>
              </div>
              <div className="campos-fila">
                <div className="campo">
                  <label className="etiqueta">Correo electrónico *</label>
                  <input type="email" name="email" placeholder="correo@empresa.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label className="etiqueta">Teléfono / WhatsApp</label>
                  <input type="text" name="telefono" placeholder="+57 300 000 0000" value={formData.telefono} onChange={handleChange} />
                </div>
              </div>
              <div className="campo">
                <label className="etiqueta">Servicio de interés *</label>
                <select name="servicio" value={formData.servicio} onChange={handleChange} required>
                  <option value="">-- Seleccione un servicio --</option>
                  <option value="Mecanizado CNC">Mecanizado CNC</option>
                  <option value="Corte Láser">Corte Láser</option>
                  <option value="Diseño 3D">Diseño 3D</option>
                  <option value="Diseño de proyectos">Diseño de proyectos</option>
                  <option value="Asesoría técnica">Asesoría técnica</option>
                </select>
              </div>
              <div className="campo">
                <label className="etiqueta">Descripción técnica del requerimiento *</label>
                <textarea name="descripcion" placeholder="Describa materiales, dimensiones, tolerancias, cantidad de piezas, plazos de entrega u otros detalles técnicos relevantes..." value={formData.descripcion} onChange={handleChange} required style={{ minHeight: 100 }} />
              </div>
              <div className="campo">
                <label className="etiqueta">Adjuntar plano o descripción técnica</label>
                <div className="zona-carga" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => document.getElementById("archivo-input")?.click()}>
                  <div className="icono-subir">&#8593;</div>
                  <p>Arrastre su archivo aquí o <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById("archivo-input")?.click(); }}>seleccione desde su equipo</a></p>
                  <small>PDF, DWG, STEP, STL - máx. 20 MB</small>
                  {nombreArchivo && <div id="nombre-archivo" style={{ display: "block", marginTop: 10, fontSize: 13, fontWeight: 600, color: "var(--rojo)" }}>{nombreArchivo}</div>}
                </div>
                <input type="file" id="archivo-input" accept=".pdf,.dwg,.step,.stl" onChange={handleFileChange} style={{ display: "none" }} />
              </div>
              <button type="submit" disabled={enviando} className="btn-press">
                {enviando ? "Enviando..." : "Enviar solicitud"}
              </button>
              {mensaje && (
                <div id="mensaje-resultado" className={mensaje.tipo === "exito" ? "exito" : "error"} style={{ display: "block", marginTop: 16, fontWeight: 600, fontSize: 14 }}>
                  {mensaje.texto}
                </div>
              )}
              <div className="whatsapp-box">
                <div className="avatar">WA</div>
                <p>¿Prefiere contactarnos directamente?<br /><a href="https://wa.me/573173315892" target="_blank" rel="noopener noreferrer">Escribir por WhatsApp corporativo →</a></p>
              </div>
            </form>
          </div>
          <div className="info-lado">
            <div className="info-bloque">
              <h3>Información de contacto</h3>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg></span>
                Carrera 3 # 16-58, Mosquera, Cundinamarca
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"/></svg></span>
                (317) 331 5892 – (317) 331 5890
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
                atencionalcliente@simet.com.co
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 5H11v6l5.2 3.1.8-1.3-4.5-2.7V7z"/></svg></span>
                Lun–Vie 7:00am – 5:00pm
              </div>
            </div>
            <div className="info-bloque">
              <h3>Tiempo de respuesta</h3>
              <p>Respondemos solicitudes en menos de <strong>24 horas hábiles</strong>. Para urgencias, contáctenos directamente por WhatsApp.</p>
            </div>
            <div className="info-bloque">
              <h3>Servicios disponibles</h3>
              <ul className="servicios-lista">
                <li>Mecanizado CNC</li>
                <li>Corte Láser</li>
                <li>Diseño 3D</li>
                <li>Diseño de proyectos</li>
                <li>Asesoría técnica</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
