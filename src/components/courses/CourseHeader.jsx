import React from "react";

const CourseHeader = () => {
  return (
    <div className="mb-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <a href="/" className="hover:text-white">
            Inicio
          </a>
          <span>›</span>
          <a href="/rutas" className="hover:text-white">
            Rutas
          </a>
          <span>›</span>
          <span className="text-white">Desarrollo Frontend</span>
        </div>
      </nav>

      {/* Course Info */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-4">
          {/* Badges */}
          <div className="flex items-center space-x-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Ruta Profesional
            </span>
            <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
              🕒 45 HORAS
            </span>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-white">Desarrollo Frontend</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Domina la web moderna. Desde la estructura semántica con HTML hasta
            arquitecturas de estado complejas con React y Next.js.
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
          <span>Continuar ruta</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Progreso general</span>
          <span className="text-sm font-medium text-blue-400">35%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: "35%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
