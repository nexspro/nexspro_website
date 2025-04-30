'use client';
import { useState } from 'react';

const versions = [
  {
    label: '0.1',
    description: [
      'Initialized frontend with Next.js 15, TypeScript, and Tailwind CSS.',
      'Created global layout with Navbar and Footer.',
      'Basic pages: Home, Login, Signup, Stream, Portfolio, etc.',
      'French → English UI conversion completed.',
    ],
  },
  {
    label: '0.2',
    description: [
      'Implemented dynamic navigation with submenus.',
      'Built interactive Release Notes page with version selector.',
      'Added Footer with legal links in English.',
      'Refined page structure and responsiveness.',
    ],
  },
  {
    label: '0.3',
    description: [
      'Created API Rails backend (Ruby 3.2.4, Rails 8.0.2).',
      'Connected and tested API route: GET /api/ping returns 200.',
      'Verified frontend-backend split and future integration point.',
      'Polished UI spacing, layout, and interactive styling.',
    ],
  },
];

export default function ReleasesPage() {
  const [selected, setSelected] = useState(versions[0]);

  return (
    <div className="flex flex-col flex-grow px-6 py-10 text-white min-h-[calc(100vh-64px-64px)]">
      <h1 className="text-3xl font-bold mb-8">Release Notes</h1>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Version List */}
        <div className="md:w-[25%] w-full border border-gray-700 rounded p-3 bg-gray-800">
          <h2 className="text-lg font-semibold mb-3">Versions</h2>
          <ul className="space-y-1">
            {versions.map((version) => (
              <li
                key={version.label}
                onClick={() => setSelected(version)}
                className={`cursor-pointer px-3 py-1.5 rounded transition text-sm ${
                  selected.label === version.label
                    ? 'bg-cyan-600 text-white'
                    : 'hover:bg-gray-700'
                }`}
              >
                {version.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div className="md:w-[75%] w-full border border-gray-700 rounded p-6 bg-gray-800">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {selected.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
