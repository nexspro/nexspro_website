'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [pingMessage, setPingMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/ping")
      .then(res => res.json())
      .then(data => setPingMessage(data.message))
      .catch(() => setPingMessage("Erreur de connexion avec l’API 😓"));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-cyan-400">
        Bienvenue sur Nexspro 🚀
      </h1>

      <p className="mt-6 text-lg text-center text-slate-300 max-w-2xl">
        Le hub tout-en-un avec boutique, streaming, jeu 2D, espace membre...
        propulsé par <span className="text-cyan-400">Rails</span> & <span className="text-cyan-400">Next.js</span>.
      </p>

      {/* ✅ Résultat API */}
      <p className="mt-4 text-green-400 text-sm">
        🔌 Connexion Rails : {pingMessage || "chargement..."}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded text-white font-medium transition"
        >
          Explorer la boutique
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded font-medium transition"
        >
          Se connecter
        </a>
      </div>
    </main>
  );
}
