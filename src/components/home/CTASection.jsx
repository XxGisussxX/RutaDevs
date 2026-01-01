import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para acelerar tu carrera?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Únete a más de 10,000 desarrolladores que están mejorando sus
          habilidades con nosotros. Empieza gratis, sin tarjeta de crédito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            Comenzar gratis
          </button>
          <button className="border-2 border-blue-300 hover:border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all">
            Ver planes de precios
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
