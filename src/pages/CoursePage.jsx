import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams();

  // Datos de ejemplo para el curso
  const courseData = {
    title: "Desarrollo Frontend",
    description:
      "Domina la web moderna. Desde la estructura semántica con HTML hasta arquitecturas de estado complejas con React y Next.js.",
    level: "RUTA PROFESIONAL",
    duration: "45 HORAS",
    progress: 52,
    stats: {
      streak: {
        value: "5",
        label: "Días",
        icon: "🔥",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      },
      modules: {
        value: "2",
        total: "8",
        label: "Módulos",
        icon: "✓",
        color: "text-green-500",
        bg: "bg-green-500/10",
      },
      xp: {
        value: "1250",
        label: "XP",
        icon: "🏆",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      },
    },
  };

  const modules = [
    {
      id: 1,
      number: "Módulo 1",
      title: "Fundamentos de HTML & Semántica",
      description:
        "Aprende la estructura básica de la web, etiquetas semánticas y accesibilidad.",
      lessons: "8 Lecciones",
      hours: "5 Horas",
      status: "completed",
      icon: "HTML",
    },
    {
      id: 2,
      number: "Módulo 2",
      title: "Estilos Avanzados con CSS",
      description: "Domina Flexbox, Grid, animaciones y diseño responsivo.",
      lessons: "12 Lecciones",
      hours: "8 Horas",
      status: "completed",
      icon: "CSS",
    },
    {
      id: 3,
      number: "Módulo 3",
      title: "JavaScript Moderno",
      description: "ES6+, async/await, módulos y programación funcional.",
      lessons: "15 Lecciones",
      hours: "10 Horas",
      status: "in-progress",
      icon: "JS",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800/50 border-r border-slate-700/50 p-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JD</span>
          </div>
          <div>
            <h3 className="text-white font-medium">Jesus Dev</h3>
            <p className="text-gray-400 text-sm">Plan Pro</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-blue-400 bg-blue-500/10 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Rutas</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>Mis Cursos</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span>Comunidad</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Logros</span>
          </a>
        </nav>

        {/* Settings */}
        <div className="mt-auto pt-8">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Ajustes</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <span>Inicio</span>
          <span>›</span>
          <span>Rutas</span>
          <span>›</span>
          <span className="text-white">Desarrollo Frontend</span>
        </nav>

        {/* Course Header */}
        <div className="bg-slate-800/30 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                  {courseData.level}
                </span>
                <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs font-medium rounded-full">
                  {courseData.duration}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                {courseData.title}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                {courseData.description}
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              Continuar ruta
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
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm">Progreso general</span>
              <span className="text-blue-400 font-medium">
                {courseData.progress}%
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${courseData.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div
            className={`${courseData.stats.streak.bg} border border-orange-500/20 rounded-lg p-4`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">{courseData.stats.streak.icon}</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Racha Actual</p>
                <p
                  className={`${courseData.stats.streak.color} font-bold text-xl`}
                >
                  {courseData.stats.streak.value}{" "}
                  {courseData.stats.streak.label}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${courseData.stats.modules.bg} border border-green-500/20 rounded-lg p-4`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Módulos</p>
                <p
                  className={`${courseData.stats.modules.color} font-bold text-xl`}
                >
                  {courseData.stats.modules.value}/
                  {courseData.stats.modules.total}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${courseData.stats.xp.bg} border border-purple-500/20 rounded-lg p-4`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">XP Total</p>
                <p className={`${courseData.stats.xp.color} font-bold text-xl`}>
                  {courseData.stats.xp.value} XP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Map */}
        <div className="bg-slate-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">
            Tu Mapa de Aprendizaje
          </h2>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={module.id} className="relative">
                {/* Connection Line */}
                {index < modules.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-slate-600"></div>
                )}

                <div
                  className={`relative flex items-start gap-4 p-4 rounded-lg border transition-all hover:bg-slate-700/30 ${
                    module.status === "completed"
                      ? "bg-slate-700/20 border-green-500/20"
                      : module.status === "in-progress"
                      ? "bg-blue-900/20 border-blue-500/30"
                      : "bg-slate-800/50 border-slate-600/50"
                  }`}
                >
                  {/* Module Icon */}
                  <div
                    className={`relative w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${
                      module.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : module.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-slate-600/50 text-gray-400"
                    }`}
                  >
                    {module.icon}
                  </div>

                  {/* Status Indicator */}
                  <div
                    className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                      module.status === "completed"
                        ? "bg-green-500"
                        : module.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-slate-600"
                    }`}
                  >
                    {module.status === "completed" && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {module.status === "in-progress" && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>

                  {/* Module Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          module.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : module.status === "in-progress"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-slate-600/50 text-gray-400"
                        }`}
                      >
                        {module.status === "completed"
                          ? "COMPLETADO"
                          : module.status === "in-progress"
                          ? "EN PROGRESO"
                          : "BLOQUEADO"}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {module.number}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {module.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {module.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {module.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
