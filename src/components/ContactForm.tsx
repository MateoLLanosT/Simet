"use client";

import { useState, useRef, type DragEvent, type FormEvent } from "react";
import Script from "next/script";
import { stagger } from "@/lib/motion";
import { PLAN_ACCEPT, PLAN_FORMATS, validateContact, validatePlan } from "@/lib/quote-validation";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  descripcion: string;
}

interface ForminitClient {
  submit(formId: string, data: globalThis.FormData): Promise<{ error?: { message: string } }>;
}

declare global {
  interface Window {
    Forminit?: new () => ForminitClient;
  }
}

const initialForm: FormData = {
  nombre: "", empresa: "", email: "", telefono: "", servicio: "", descripcion: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [archivo, setArchivo] = useState<File | null>(null);
  const [estadoPlano, setEstadoPlano] = useState("");
  const [errorArchivo, setErrorArchivo] = useState<string | null>(null);
  const [arrastrando, setArrastrando] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: "exito" | "error"; texto: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearFile = () => {
    setArchivo(null);
    setErrorArchivo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const selectFile = (files: FileList) => {
    if (files.length === 0) return;
    const error = files.length > 1 ? "Adjunta un solo plano por solicitud." : validatePlan(files[0]);
    setErrorArchivo(error);
    setArchivo(error ? null : files[0]);
    if (error && fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) selectFile(e.target.files);
  };

  // Drag & Drop
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setArrastrando(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setArrastrando(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setArrastrando(false);
    selectFile(e.dataTransfer.files);
  };

  // Envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enviando) return;
    const error = validateContact(formData)
      ?? (!formData.descripcion.trim() ? "Describe tu requerimiento técnico." : null)
      ?? (!estadoPlano ? "Indica si tienes planos técnicos." : null)
      ?? (estadoPlano === "adjuntar"
        ? (archivo ? validatePlan(archivo) : "Selecciona un plano válido para adjuntar.")
        : null);
    if (error) {
      setMensaje({ tipo: "error", texto: error });
      return;
    }
    setEnviando(true);
    setMensaje(null);
    try {
      const fd = new FormData();
      fd.append("fi-sender-fullName", formData.nombre.trim());
      fd.append("fi-sender-company", formData.empresa.trim());
      fd.append("fi-sender-email", formData.email.trim());
      fd.append("fi-sender-phone", formData.telefono.trim());
      fd.append("fi-select-servicio_interes", formData.servicio);
      const plano = estadoPlano === "adjuntar" ? "Plano adjunto"
        : estadoPlano === "confirmar" ? "El cliente confirma que tiene planos y los enviará después"
        : "El cliente no tiene planos técnicos";
      fd.append("fi-text-descripcion_tecnica", `${formData.descripcion.trim()}\n\nPlanos técnicos: ${plano}.`);
      if (estadoPlano === "adjuntar" && archivo) fd.append("fi-file-plano_tecnico", archivo);

      const Forminit = window.Forminit;
      if (!Forminit) throw new Error("Forminit SDK no cargado");
      const forminit = new Forminit();
      const { error } = await forminit.submit("ltt2uz1fki8", fd);
      if (error) {
        setMensaje({ tipo: "error", texto: `Hubo un problema: ${error.message}. Por favor intenta de nuevo o escríbenos a atencionalcliente@simet.com.co` });
      } else {
        setMensaje({ tipo: "exito", texto: "¡Gracias! Tu solicitud fue enviada correctamente. Te responderemos en menos de 24 horas hábiles." });
        setFormData(initialForm);
        clearFile();
        setEstadoPlano("");
        if (formRef.current) formRef.current.reset();
      }
    } catch {
      setMensaje({ tipo: "error", texto: "Error de conexión. Por favor intenta de nuevo o escríbenos a atencionalcliente@simet.com.co" });
    }
    setEnviando(false);
  };

  return (
    <section className="contacto-section">
      <Script src="https://forminit.com/sdk/v1/forminit.js" strategy="lazyOnload" />
      <div className="contacto-wrapper">
        <div className="contacto-intro">
          <span className="simet-red-indicator simet-red-indicator--center simet-enter" style={stagger(0)} />
          <h1 className="simet-enter" style={stagger(0)}>Contacto</h1>
          <p className="simet-enter" style={stagger(1)}>
            Cuéntanos tu idea y nuestro equipo te responderá con una propuesta ajustada a tus necesidades.
          </p>
        </div>
        <div className="contacto-grid simet-enter" style={stagger(2)}>
          <div className="form-lado">
            <div className="eyebrow">Formulario de contacto</div>
            <h2>Solicitar cotización</h2>
            <p className="descripcion">Complete el formulario con los detalles de su requerimiento. Nuestro equipo técnico le responderá en menos de 24 horas hábiles.</p>
            <form ref={formRef} onSubmit={handleSubmit} className="formulario-cotizacion">
              <div className="campos-fila">
                <div className="campo">
                  <label className="etiqueta" htmlFor="campo-nombre">Nombre completo *</label>
                  <input id="campo-nombre" type="text" name="nombre" placeholder="Ej. Carlos Ramírez" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label className="etiqueta" htmlFor="campo-empresa">Razón social *</label>
                  <input id="campo-empresa" type="text" name="empresa" placeholder="Ej. Industrias XYZ S.A.S" value={formData.empresa} onChange={handleChange} required />
                </div>
              </div>
              <div className="campos-fila">
                <div className="campo">
                  <label className="etiqueta" htmlFor="campo-email">Correo corporativo *</label>
                  <input id="campo-email" type="email" name="email" placeholder="correo@empresa.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label className="etiqueta" htmlFor="campo-telefono">Teléfono / WhatsApp *</label>
                  <input id="campo-telefono" type="tel" name="telefono" placeholder="+57 300 000 0000" value={formData.telefono} onChange={handleChange} required />
                </div>
              </div>
              <div className="campo">
                <label className="etiqueta" htmlFor="campo-servicio">Servicio de interés *</label>
                <select id="campo-servicio" name="servicio" value={formData.servicio} onChange={handleChange} required>
                  <option value="">-- Seleccione un servicio --</option>
                  <option value="Mecanizado CNC">Mecanizado CNC</option>
                  <option value="Corte Láser">Corte Láser</option>
                  <option value="Diseño 3D">Diseño 3D</option>
                  <option value="Diseño de proyectos">Diseño de proyectos</option>
                  <option value="Asesoría técnica">Asesoría técnica</option>
                </select>
              </div>
              <div className="campo">
                <label className="etiqueta" htmlFor="campo-descripcion">Descripción técnica del requerimiento *</label>
                <textarea id="campo-descripcion" name="descripcion" placeholder="Describa materiales, dimensiones, tolerancias, cantidad de piezas, plazos de entrega u otros detalles técnicos relevantes..." value={formData.descripcion} onChange={handleChange} required />
              </div>
              <div className="campo">
                <label className="etiqueta" htmlFor="campo-planos">¿Tienes planos técnicos? *</label>
                <select id="campo-planos" value={estadoPlano} required onChange={(e) => {
                  setEstadoPlano(e.target.value);
                  clearFile();
                }}>
                  <option value="">-- Seleccione una opción --</option>
                  <option value="adjuntar">Sí, adjuntar un plano ahora</option>
                  <option value="confirmar">Sí, tengo planos y los enviaré después</option>
                  <option value="sin-planos">No tengo planos técnicos</option>
                </select>
              </div>
              {estadoPlano === "adjuntar" && <div className="campo">
                <span className="etiqueta">Adjuntar plano o descripción técnica</span>
                <div
                  className={`zona-carga ${arrastrando ? "is-dragging" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="icono-subir">&#8593;</div>
                  <p>Arrastre su archivo aquí o <button type="button" className="enlace">seleccione desde su equipo</button></p>
                  <small id="formatos-plano">{PLAN_FORMATS}</small>
                  {archivo && <div className="nombre-archivo">Archivo seleccionado: {archivo.name}</div>}
                </div>
                <input ref={fileInputRef} type="file" accept={PLAN_ACCEPT} onChange={handleFileChange} aria-label="Seleccionar plano técnico" aria-describedby="formatos-plano" hidden />
                {archivo && <button type="button" className="enlace" onClick={clearFile}>Quitar archivo</button>}
                {errorArchivo && <p className="mensaje-resultado error" role="alert">{errorArchivo}</p>}
              </div>}
              <button type="submit" disabled={enviando} className="simet-btn-red">
                {enviando ? "Enviando..." : "Enviar solicitud"}
              </button>
              {mensaje && (
                <div className={`mensaje-resultado ${mensaje.tipo}`} role="status">
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
            <div className="info-bloque" data-reveal style={stagger(3)}>
              <h3>Información de contacto</h3>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg></span>
                Carrera 3 # 16-58, Mosquera, Cundinamarca
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"/></svg></span>
                (317) 331 5892 – (317) 331 5890
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
                atencionalcliente@simet.com.co
              </div>
              <div className="info-linea">
                <span className="icono-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span>
                Lun–Vie 7:00am – 5:00pm
              </div>
            </div>
            <div className="info-bloque" data-reveal style={stagger(4)}>
              <h3>Tiempo de respuesta</h3>
              <p>Respondemos solicitudes en menos de <strong>24 horas hábiles</strong>. Para urgencias, contáctenos directamente por WhatsApp.</p>
            </div>
            <div className="info-bloque" data-reveal style={stagger(5)}>
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
