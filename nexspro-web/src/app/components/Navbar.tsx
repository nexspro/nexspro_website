'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Nexspro
        </Link>

        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex gap-6 text-white text-sm font-medium`}
        >
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/boutique">Boutique</Link></li>
          <li><Link href="/jeu">Jeu</Link></li>
          <li><Link href="/live">Live</Link></li>
          <li><Link href="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}
