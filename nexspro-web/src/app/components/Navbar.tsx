'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-gray-800 text-white z-50 shadow-md">
      <nav className="w-full px-4 py-3 flex items-center justify-between">
        {/* Logo + catégories */}
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-lg font-bold">N</span>
          </div>

          <ul className="flex gap-6 items-center text-sm font-semibold tracking-wide uppercase">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/stream">Stream</Link></li>
            <li><Link href="/videos">Vidéos</Link></li>
            <li><Link href="/roulette">Roulette</Link></li>
            <li><Link href="/giveaways">Giveaways</Link></li>
            <li><Link href="/classement">Classement</Link></li>
            <li><Link href="/boutique">Boutique</Link></li>
          </ul>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="hover:underline">Se connecter</Link>
          <Link
            href="/signup"
            className="px-4 py-1 bg-white text-black rounded-md hover:bg-gray-200 transition"
          >
            Créer un compte
          </Link>
        </div>
      </nav>
    </header>
  );
}
