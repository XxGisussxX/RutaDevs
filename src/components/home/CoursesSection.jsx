import React from "react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Javascript",
      description:
        "Domina el desarrollo web moderno con el stack MERN: React, Node.js, Express y MongoDB.",
      icon: "JS",
      level: "Intermedio",
      hours: "120 horas",
      projects: "15 proyectos",
      color: "bg-yellow-500",
      progress: 75,
    },
    {
      id: 2,
      title: "DevOps Engineering",
      description:
        "Automatiza el despliegue de software con Docker, Kubernetes, AWS y pipelines CI/CD.",
      icon: "⚙️",
      level: "Avanzado",
      hours: "90 horas",
      projects: "10 proyectos",
      color: "bg-blue-500",
      progress: 60,
    },
    {
      id: 3,
      title: "Data Science",
      description:
        "Aprende Python, Pandas, visualización de datos y los fundamentos de Machine Learning.",
      icon: "🔬",
      level: "Principiante",
      hours: "140 horas",
      projects: "20 proyectos",
      color: "bg-green-500",
      progress: 85,
    },
  ];

  return (
    <section className="bg-slate-900 py-20 border-b border-slate-700/50">
      {/* Companies section - full width */}
      <div className="mb-16">
        <div className="bg-slate-800/50 border-t border-b border-slate-700/50 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-400 uppercase tracking-widest mb-8 text-xs font-medium text-center">
              NUESTROS ALUMNOS TRABAJAN EN
            </p>
            <div className="flex justify-around items-center gap-12 flex-wrap opacity-70">
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-lg">StartupInc</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-2xl">💼</span>
                <span className="font-semibold text-lg">FintechGlobal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-2xl">☁️</span>
                <span className="font-semibold text-lg">CloudSystems</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-2xl">🛒</span>
                <span className="font-semibold text-lg">ShopTech</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-2xl">🏥</span>
                <span className="font-semibold text-lg">HealthDev</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content - centered */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Rutas destacadas
              </h2>
              <p className="text-xl text-gray-300">
                Elige tu camino y especialízate con curriculos curados.
              </p>
            </div>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors whitespace-nowrap"
            >
              Ver todas las rutas →
            </a>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/80 rounded-lg p-6 hover:bg-slate-700/80 transition-all duration-300 group cursor-pointer border border-slate-700/50 hover:border-slate-600/50 relative"
            >
              {/* Level badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                  {course.level}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center text-lg font-bold text-white mb-3`}  >
                  {course.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
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
                    <span>{course.hours}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.projects}</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 pt-4">
                <div className="w-full bg-slate-700/50 rounded-full h-1">
                  <div
                    className={`h-1 ${course.color} rounded-full transition-all duration-500`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
