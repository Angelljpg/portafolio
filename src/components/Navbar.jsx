import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <div className="text-2xl font-bold">Axel Portfolio</div>

        {/* Menú de navegación */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#inicio" className="hover:text-yellow-400">Inicio</a></li>
          <li><a href="#proyectos" className="hover:text-yellow-400">Proyectos</a></li>
          <li><a href="#sobremi" className="hover:text-yellow-400">Sobre mí</a></li>
          <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
        </ul>

        {/* Botón para cambio de idioma (solo diseño) */}
        <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-1 rounded hover:bg-yellow-300 transition">
          EN
        </button>
      </div>
    </nav>
  );
}
