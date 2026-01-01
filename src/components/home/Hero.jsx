import React from "react";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Nueva ruta: Artificial Intelligence
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Domina el código.{" "}
              <span className="text-blue-400">Construye tu futuro.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rutas de aprendizaje paso a paso diseñadas por expertos de la
              industria para llevarte de cero a profesional en tiempo récord.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center gap-2">
              Explorar Rutas
              <svg
                className="w-5 h-5"
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
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Cómo funciona
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex gap-1.5">
                  <img
                    src="https://api.dicebear.com/7.x/personas/svg?seed=1"
                    alt="Avatar 1"
                    className="w-9 h-9 rounded-full border-2 border-slate-600"
                  />
                  <img
                    src="https://api.dicebear.com/7.x/personas/svg?seed=2"
                    alt="Avatar 2"
                    className="w-9 h-9 rounded-full border-2 border-slate-600"
                  />
                  <img
                    src="https://api.dicebear.com/7.x/personas/svg?seed=3"
                    alt="Avatar 3"
                    className="w-9 h-9 rounded-full border-2 border-slate-600"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 ">
                Más de 10k desarrolladores activos
              </p>
            </div>
          </div>
        </div>

        {/* Right content - Code preview */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-purple-400 rounded-lg blur animate-pulse"></div>

          <div className="relative bg-slate-800 rounded-lg p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 bg-slate-900 -m-6 mx--6 p-4 rounded-t-lg border-b border-slate-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">App.js</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-purple-400">
                const <span className="text-blue-400">skillLevels</span> = [
              </div>
              <div className="text-gray-300 ml-4">'Frontend',</div>
              <div className="text-gray-300 ml-4">'Backend',</div>
              <div className="text-gray-300 ml-4">'DevOps',</div>
              <div className="text-purple-400">];</div>
              <div className="mt-4">
                <span className="text-blue-400">return</span>{" "}
                <span className="text-yellow-400">&lt;DevPlatform</span>
              </div>
              <div className="text-gray-300 ml-4">
                <span className="text-green-400">skills</span>=
                <span className="text-orange-400">"fullStack"</span>
              </div>
              <div className="text-gray-300 ml-4">
                <span className="text-green-400">success</span>=
                <span className="text-orange-400">"true"</span>
              </div>
              <div className="text-yellow-400 ml-4">/&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
