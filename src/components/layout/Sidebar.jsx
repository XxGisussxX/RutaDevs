import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: "📊", label: "Dashboard", href: "/dashboard" },
    { icon: "🗺️", label: "Rutas", href: "/rutas", active: true },
    { icon: "📚", label: "Mis Cursos", href: "/cursos" },
    { icon: "👥", label: "Comunidad", href: "/comunidad" },
    { icon: "🏆", label: "Logros", href: "/logros" },
  ];

  return (
    <div className="w-64 h-screen bg-slate-800 fixed left-0 top-0 flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <h3 className="text-white font-medium">Alex Dev</h3>
            <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded-full">
              Plan Pro
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
              item.active
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-slate-700">
        <a
          href="/settings"
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
        >
          <span className="text-lg">⚙️</span>
          <span className="font-medium">Ajustes</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
