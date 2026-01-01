import React, { useState, useEffect } from "react";

const ExperienceSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const terminalLines = [
    "$ npm run build",
    "Building application...",
    "✓ Compiled successfully",
    "✓ Build Successful (1.4s)",
    "✓ All tests passed",
    "✓ Ready for deployment",
  ];

  useEffect(() => {
    // Progress bar animation
    const progressTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 78) {
            clearInterval(interval);
            return 78;
          }
          return prev + 1;
        });
      }, 150);
    }, 500);

    // Terminal typing animation
    let textIndex = 0;
    let lineIndex = 0;

    const typeText = () => {
      if (lineIndex < terminalLines.length) {
        const currentLineText = terminalLines[lineIndex];

        if (textIndex < currentLineText.length) {
          setTypedText((prev) => prev + currentLineText[textIndex]);
          textIndex++;
          setTimeout(typeText, Math.random() * 100 + 50);
        } else {
          // Line completed, move to next line
          setTypedText((prev) => prev + "\n");
          lineIndex++;
          textIndex = 0;
          setCurrentLine(lineIndex);

          if (lineIndex < terminalLines.length) {
            setTimeout(typeText, 500);
          } else {
            // All lines typed, show success indicator
            setTimeout(() => setShowSuccess(true), 300);
          }
        }
      }
    };

    // Start animations after a delay
    const startAnimation = setTimeout(() => {
      typeText();
    }, 1000);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(startAnimation);
    };
  }, []);

  const features = [
    {
      icon: "💻",
      title: "Proyectos reales",
      description:
        "No solo ves videos. Construye aplicaciones complejas que pueden poner en tu portafolio.",
    },
    {
      icon: "👨‍💻",
      title: "Mentoría experta",
      description:
        "Desarrolladores Senior con la ayuda de ingenieros Senior y code reviewers profesionales.",
    },
    {
      icon: "🎓",
      title: "Certificación valiosa",
      description:
        "Al completar cada ruta, recibes un certificado verificable que demuestra tus habilidades y proyectos.",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>

      <section className="bg-slate-900 py-30 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Una experiencia educativa{" "}
                <span className="text-blue-400">
                  diseñada para desarrolladores.
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                No solo mires videos. Escribe código, construye proyectos y
                recibe feedback real. Nuestra plataforma está construida
                pensando en cómo aprenden mejor los ingenieros.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - Video demo */}
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Video header */}
                <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">
                    Test: Passed, API Response
                  </span>
                </div>

                {/* Video content */}
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                  {/* Code editor simulation */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-4 font-mono text-xs text-gray-300">
                    <div className="mb-2 text-blue-300">
                      // components/Dashboard.jsx
                    </div>
                    <div className="mb-1">
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-yellow-300">React</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-300">'react'</span>;
                    </div>
                    <div className="mb-1">
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-gray-300">{"{"}</span>
                      <span className="text-yellow-300"> useState </span>
                      <span className="text-gray-300">{"}"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-300">'react'</span>;
                    </div>
                    <div className="mb-3"></div>
                    <div className="mb-1">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">Dashboard</span>{" "}
                      <span className="text-gray-300">= () =&gt;</span>{" "}
                      <span className="text-gray-300">{"{"}</span>
                    </div>
                    <div className="mb-1 ml-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-gray-300">[</span>
                      <span className="text-yellow-300">data</span>
                      <span className="text-gray-300">, </span>
                      <span className="text-yellow-300">setData</span>
                      <span className="text-gray-300">] = </span>
                      <span className="text-blue-300">useState</span>
                      <span className="text-gray-300">([]);</span>
                    </div>
                    <div className="mb-1 ml-4">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-gray-300">(</span>
                    </div>
                    <div className="mb-1 ml-8">
                      <span className="text-gray-300">&lt;</span>
                      <span className="text-red-400">div</span>{" "}
                      <span className="text-blue-300">className</span>
                      <span className="text-gray-300">=</span>
                      <span className="text-green-300">"dashboard"</span>
                      <span className="text-gray-300">&gt;</span>
                    </div>
                    <div className="mb-1 ml-12">
                      <span className="text-gray-300">&lt;</span>
                      <span className="text-red-400">h1</span>
                      <span className="text-gray-300">&gt;</span>
                      <span className="text-white">Mi Dashboard</span>
                      <span className="text-gray-300">&lt;/</span>
                      <span className="text-red-400">h1</span>
                      <span className="text-gray-300">&gt;</span>
                    </div>
                    <div className="ml-8 text-gray-400">// ...</div>
                  </div>


                  {/* Terminal-like overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg font-mono text-sm z-10">
                    <div className="text-green-400 whitespace-pre-line min-h-[60px]">
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </div>
                    {showSuccess && (
                      <div className="text-blue-400 mt-2 animate-fade-in">
                        🚀 Deploy successful!
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-slate-700 px-4 py-2">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                    <span>Progreso del curso</span>
                    <span className="transition-all duration-300">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                ✓ Proyecto completado
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
