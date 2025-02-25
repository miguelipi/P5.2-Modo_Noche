import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

export function useDarkMode() {
  // 🔹 1️⃣ Estado inicial desde localStorage o "system"
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system"; // Evita errores en SSR
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // 🔹 2️⃣ Aplicamos el tema según la selección
    const applyTheme = () => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
      localStorage.setItem("theme", theme);
    };

    applyTheme();

    // 🔹 3️⃣ Detecta cambios en el sistema solo si está en "system"
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    // Asignae la función manejadora al evento change de la mediaQuerie
    mediaQuery.addEventListener("change", handleSystemChange);

    // Esto es solo para eliminar el esuchador de evento cuando se destruye el componente
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  // 🔹 4️⃣ Cambia entre "light" → "dark" → "system"
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  return { theme, toggleTheme };
}