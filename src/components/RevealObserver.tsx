"use client";

import { useEffect } from "react";

const PENDING = "[data-reveal]:not(.is-visible)";

/**
 * Observa todos los elementos con `data-reveal` y les añade `.is-visible`
 * al entrar en pantalla. Se monta una sola vez en el layout, así las páginas
 * pueden seguir siendo Server Components y solo declarar el atributo.
 * El MutationObserver cubre el contenido nuevo tras navegar entre rutas.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(PENDING).forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      // Margen fijo y pequeño: uno en % dejaba sin revelar lo que está al final de la página
      { rootMargin: "0px 0px -40px 0px", threshold: 0.12 }
    );

    const observeWithin = (root: ParentNode) => {
      root.querySelectorAll(PENDING).forEach((el) => io.observe(el));
    };

    observeWithin(document);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(PENDING)) io.observe(node);
          observeWithin(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
