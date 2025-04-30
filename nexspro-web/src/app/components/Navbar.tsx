'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="w-full px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-lg font-bold">N</span>
          </div>

          <ul className="flex gap-6 items-center text-sm font-semibold tracking-wide uppercase">
            {/* HOME */}
            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/" className="px-2 py-1 block">Home</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/release" className="block px-4 py-2 text-xs hover:bg-gray-700">Release</Link>
                  <Link href="/news" className="block px-4 py-2 text-xs hover:bg-gray-700">News</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/stream" className="px-2 py-1 block">Stream</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/live" className="block px-4 py-2 text-xs hover:bg-gray-700">Live Now</Link>
                  <Link href="/replay" className="block px-4 py-2 text-xs hover:bg-gray-700">Replay</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/library" className="px-2 py-1 block">Library</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/gaming" className="block px-4 py-2 text-xs hover:bg-gray-700">Gaming</Link>
                  <Link href="/finance" className="block px-4 py-2 text-xs hover:bg-gray-700">Finance</Link>
                  <Link href="/tech" className="block px-4 py-2 text-xs hover:bg-gray-700">Tech & Tools</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/portfolio" className="px-2 py-1 block">Portfolio</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/aboutme" className="block px-4 py-2 text-xs hover:bg-gray-700">About me</Link>
                  <Link href="/skills" className="block px-4 py-2 text-xs hover:bg-gray-700">Skills</Link>
                  <Link href="/projects" className="block px-4 py-2 text-xs hover:bg-gray-700">Projects</Link>
                  <Link href="/clients" className="block px-4 py-2 text-xs hover:bg-gray-700">Clients & Companies</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/community" className="px-2 py-1 block">Community</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/forums" className="block px-4 py-2 text-xs hover:bg-gray-700">Forums</Link>
                  <Link href="/events" className="block px-4 py-2 text-xs hover:bg-gray-700">Events</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/social" className="px-2 py-1 block">Social</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/discord" className="block px-4 py-2 text-xs hover:bg-gray-700">Discord</Link>
                  <Link href="/twitter" className="block px-4 py-2 text-xs hover:bg-gray-700">X</Link>
                  <Link href="/youtube" className="block px-4 py-2 text-xs hover:bg-gray-700">YouTube</Link>
                  <Link href="/tiktok" className="block px-4 py-2 text-xs hover:bg-gray-700">Tiktok</Link>
                  <Link href="/instagram" className="block px-4 py-2 text-xs hover:bg-gray-700">Instagram</Link>
                  <Link href="/snapchat" className="block px-4 py-2 text-xs hover:bg-gray-700">Snapchat</Link>
                </div>
              </div>
            </li>

            <li className="relative group">
              <div className="flex flex-col">
                <Link href="/ranking" className="px-2 py-1 block">Ranking</Link>
                <div className="absolute top-full left-0 w-40 bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                  <Link href="/leaderboard" className="block px-4 py-2 text-xs hover:bg-gray-700">Leaderboard</Link>
                  <Link href="/badges" className="block px-4 py-2 text-xs hover:bg-gray-700">Badges</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="hover:underline">Log in</Link>
          <Link
            href="/signup"
            className="px-4 py-1 bg-white text-black rounded-md hover:bg-gray-200 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
