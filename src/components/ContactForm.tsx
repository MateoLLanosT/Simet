"use client";

import { useState, useRef, useEffect, DragEvent, ChangeEvent, FormEvent } from "react";
import Script from "next/script";

const FORM_ID = "ltt2uz1fki8"; // Tu Form ID de Forminit

export default function ContactForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Manejo de selección de archivo
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Drag & Drop
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  };

  // Envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    const formData = new FormData(formRef.current);

    // Si no se seleccionó archivo, eliminamos el campo para evitar enviar un archivo vacío de 0 bytes
    if (!selectedFile) {
      formData.delete("fi-file-plano_tecnico");
    }

    try {
      let isSuccess = false;
      let errorMsg = "";

      // 1. Intento con el SDK de Forminit si está disponible
      if (typeof window !== "undefined" && (window as any).Forminit) {
        const forminit = new (window as any).Forminit();
        const res = await forminit.submit(FORM_ID, formData);
        if (res?.error) {
          errorMsg = res.error.message || "Error al enviar";
        } else {
          isSuccess = true;
        }
      } else {
        // 2. Envío directo por Fetch a Forminit
        const response = await fetch(`https://forminit.com/f/${FORM_ID}`, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          errorMsg = data?.message || `Error del servidor (${response.status})`;
        } else {
          isSuccess = true;
        }
      }

      if (!isSuccess) {
        throw new Error(errorMsg || "No se pudo procesar el envío.");
      }

      setStatus("success");
      setStatusMessage(
        "¡Gracias! Tu solicitud fue enviada correctamente. Te responderemos en menos de 24 horas hábiles."
      );
      formRef.current.reset();
      setSelectedFile(null);
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(
        "Hubo un problema al enviar el formulario: " +
          (err.message || "Error de conexión") +
          ". Por favor intenta de nuevo o escríbenos a atencionalcliente@simet.com.co"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Script oficial de Forminit */}
      <Script src="https://forminit.com/sdk/v1/forminit.js" strategy="lazyOnload" />

      <div style={{ padding: "60px 20px 80px", backgroundColor: "#f0f1f4", minHeight: "100vh" }}>
        <div className="contacto-wrapper" style={{ maxWidth: 1100, margin: "0 auto" }}>
          
          <div className="contacto-intro" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
            <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.65rem)", fontWeight: 800, color: "#16233d", marginBottom: 12 }}>
              Contacto
            </h1>
            <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Cuéntanos tu idea y nuestro equipo te responderá con una propuesta ajustada a tus necesidades técnicas y comerciales.
            </p>
          </div>

          <div className="contacto-grid">
            {/* Columna Izquierda: Formulario */}
            <div className="form-lado">
              <div className="eyebrow">Formulario de contacto</div>
              <h2>Solicitar cotización</h2>
              <p className="descripcion">
                Complete el formulario con los detalles de su requerimiento. Nuestro equipo técnico le responderá en menos de 24 horas hábiles.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} id="formulario-cotizacion">
                <div className="campos-fila">
                  <div className="campo">
                    <label className="etiqueta">Nombre completo *</label>
                    <input
                      type="text"
                      name="fi-sender-fullName"
                      placeholder="Ej. Carlos Ramírez"
                      required
                    />
                  </div>
                  <div className="campo">
                    <label className="etiqueta">Empresa</label>
                    <input
                      type="text"
                      name="fi-sender-company"
                      placeholder="Ej. Industrias XYZ S.A.S"
                    />
                  </div>
                </div>

                <div className="campos-fila">
                  <div className="campo">
                    <label className="etiqueta">Correo electrónico *</label>
                    <input
                      type="email"
                      name="fi-sender-email"
                      placeholder="correo@empresa.com"
                      required
                    />
                  </div>
                  <div className="campo">
                    <label className="etiqueta">Teléfono / WhatsApp</label>
                    <input
                      type="text"
                      name="fi-sender-phone"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                <div className="campo">
                  <label className="etiqueta">Servicio de interés *</label>
                  <select name="fi-select-servicio_interes" defaultValue="" required>
                    <option value="" disabled>
                      -- Seleccione un servicio --
                    </option>
                    <option value="Mecanizado CNC">Mecanizado CNC</option>
                    <option value="Corte Láser">Corte Láser</option>
                    <option value="Diseño 3D">Diseño 3D</option>
                    <option value="Diseño de proyectos">Diseño de proyectos</option>
                    <option value="Asesoría técnica">Asesoría técnica DFM</option>
                  </select>
                </div>

                <div className="campo">
                  <label className="etiqueta">Descripción técnica del requerimiento *</label>
                  <textarea
                    name="fi-text-descripcion_tecnica"
                    placeholder="Describa materiales, dimensiones, tolerancias, cantidad de piezas, plazos de entrega u otros detalles técnicos relevantes..."
                    required
                  />
                </div>

                {/* Zona Drag & Drop para archivo */}
                <div className="campo">
                  <label className="etiqueta">Adjuntar plano o descripción técnica</label>
                  <div
                    className="zona-carga"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      borderColor: isDragging ? "var(--primary-red)" : "#d5d5da",
                      background: isDragging ? "#fdf6f6" : "#fafafa",
                    }}
                  >
                    <div className="icono-subir">↑</div>
                    <p>
                      Arrastre su archivo aquí o{" "}
                      <span
                        style={{ color: "var(--primary-red)", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        seleccione desde su equipo
                      </span>
                    </p>
                    <small>PDF, DWG, STEP, STL - máx. 20 MB</small>

                    {selectedFile && (
                      <div
                        id="nombre-archivo"
                        style={{
                          display: "block",
                          marginTop: 12,
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "var(--primary-red)",
                        }}
                      >
                        Archivo seleccionado: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    )}
                  </div>

                  <input
                    type="file"
                    id="archivo-input"
                    name="fi-file-plano_tecnico"
                    accept=".pdf,.dwg,.step,.stl"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                </button>

                {/* Mensaje de éxito / error */}
                {status !== "idle" && (
                  <div
                    id="mensaje-resultado"
                    className={status === "success" ? "exito" : "error"}
                    style={{
                      display: "block",
                      marginTop: 18,
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: status === "success" ? "#e8f5e9" : "#ffebee",
                      color: status === "success" ? "#1b5e20" : "#b71c1c",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Enlace directo a WhatsApp */}
                <div className="whatsapp-box">
                  <div className="avatar">WA</div>
                  <p>
                    ¿Prefiere contactarnos directamente?
                    <br />
                    <a href="https://wa.me/573173315892" target="_blank" rel="noopener noreferrer">
                      Escribir por WhatsApp corporativo →
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Columna Derecha: Información de contacto */}
            <div className="info-lado">
              <div className="info-bloque">
                <h3>Información de contacto</h3>
                <div className="info-linea">
                  <span className="icono-badge">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  <span>Carrera 3 # 16-58 Mosquera, Cundinamarca</span>
                </div>
                <div className="info-linea">
                  <span className="icono-badge">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
                    </svg>
                  </span>
                  <span>
                    <a href="tel:+573173315892" style={{ color: "inherit", textDecoration: "none" }}>
                      (317) 331 5892
                    </a>{" "}
                    –{" "}
                    <a href="tel:+573173315890" style={{ color: "inherit", textDecoration: "none" }}>
                      (317) 331 5890
                    </a>
                  </span>
                </div>
                <div className="info-linea">
                  <span className="icono-badge">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <span>
                    <a href="mailto:atencionalcliente@simet.com.co" style={{ color: "inherit", textDecoration: "none" }}>
                      atencionalcliente@simet.com.co
                    </a>
                  </span>
                </div>
                <div className="info-linea">
                  <span className="icono-badge">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 5H11v6l5.2 3.1.8-1.3-4.5-2.7V7z" />
                    </svg>
                  </span>
                  <span>Lun–Vie 7:00am – 5:00pm</span>
                </div>
              </div>

              <div className="info-bloque">
                <h3>Tiempo de respuesta</h3>
                <p>
                  Respondemos solicitudes en menos de <strong>24 horas hábiles</strong>. Para urgencias técnicas o despachos prioritarios, contáctenos directamente por WhatsApp.
                </p>
              </div>

              <div className="info-bloque">
                <h3>Servicios disponibles</h3>
                <ul className="servicios-lista">
                  <li>Mecanizado CNC</li>
                  <li>Corte Láser de Alta Precisión</li>
                  <li>Diseño y Modelado 3D</li>
                  <li>Diseño de Proyectos Metalmecánicos</li>
                  <li>Asesoría Técnica DFM y Costos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}