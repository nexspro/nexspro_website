export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow px-4 py-10 text-slate-100">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-cyan-400">
        Bienvenue sur Nexspro 🚀
      </h1>

      <p className="mt-6 text-lg text-center text-slate-300 max-w-2xl">
        Le hub tout-en-un avec boutique, streaming, jeu 2D, espace membre...
        propulsé par <span className="text-cyan-400">Rails</span> & <span className="text-cyan-400">Next.js</span>.
      </p>
    </main>
  );
}
