import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="logotipo de RutasDevs" className="h-10 w-auto" />
        </Link>

        {/* Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Rutas
          </Link>
          <Link
            to="/course/javascript"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Cursos
          </Link>
          <a
            href="#comunidad"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Comunidad
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-medium transition-colors"
          >
            Empezar gratis
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
