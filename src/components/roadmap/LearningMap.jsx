import React from "react";

const LearningMap = () => {
  const modules = [
    {
      id: 1,
      title: "Fundamentos de HTML & Semántica",
      description:
        "Aprende la estructura básica de la web, etiquetas semánticas y accesibilidad.",
      status: "completed",
      icon: "HTML",
      iconColor: "bg-orange-500",
      lessons: 8,
      tests: 2,
      moduleNumber: 1,
    },
    {
      id: 2,
      title: "Estilos Avanzados con CSS",
      description: "Domina Flexbox, Grid, animaciones y diseño responsivo.",
      status: "completed",
      icon: "CSS",
      iconColor: "bg-blue-500",
      lessons: 12,
      projects: 3,
      moduleNumber: 2,
    },
    {
      id: 3,
      title: "JavaScript Interactivo",
      description:
        "Manipulación del DOM, eventos, APIs y programación asíncrona.",
      status: "in-progress",
      icon: "JS",
      iconColor: "bg-yellow-500",
      lessons: 15,
      projects: 4,
      moduleNumber: 3,
      progress: 45,
    },
    {
      id: 4,
      title: "React Fundamentals",
      description: "Componentes, hooks, estado y gestión de eventos en React.",
      status: "locked",
      icon: "RC",
      iconColor: "bg-cyan-500",
      lessons: 20,
      projects: 5,
      moduleNumber: 4,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
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
          </div>
        );
      case "in-progress":
        return (
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        );
      case "locked":
        return (
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Tu Mapa de Aprendizaje
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-600"></div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="relative flex items-start space-x-6"
            >
              {/* Module Icon */}
              <div
                className={`w-16 h-16 ${module.iconColor} rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative`}
              >
                {module.icon}
              </div>

              {/* Module Content */}
              <div className="flex-1 bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          module.status === "completed"
                            ? "bg-green-900 text-green-300"
                            : module.status === "in-progress"
                            ? "bg-blue-900 text-blue-300"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {module.status === "completed" && "COMPLETADO"}
                        {module.status === "in-progress" && "EN PROGRESO"}
                        {module.status === "locked" && "BLOQUEADO"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Módulo {module.moduleNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{module.description}</p>

                    {/* Module Stats */}
                    <div className="flex items-center space-x-6 text-sm">
                      {module.lessons && (
                        <div className="flex items-center space-x-1 text-gray-400">
                          <span>📖</span>
                          <span>{module.lessons} Lecciones</span>
                        </div>
                      )}
                      {module.tests && (
                        <div className="flex items-center space-x-1 text-gray-400">
                          <span>📝</span>
                          <span>{module.tests} Tests</span>
                        </div>
                      )}
                      {module.projects && (
                        <div className="flex items-center space-x-1 text-gray-400">
                          <span>🚀</span>
                          <span>{module.projects} Proyectos</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar for in-progress modules */}
                    {module.status === "in-progress" && module.progress && (
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-400">
                            Progreso
                          </span>
                          <span className="text-sm text-blue-400">
                            {module.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Status Icon */}
                  <div className="ml-4">{getStatusIcon(module.status)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningMap;
