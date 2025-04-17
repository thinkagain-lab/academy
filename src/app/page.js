"use client";

import RiveHero from '../components/RiveHero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen">
        <RiveHero />
      </div>
      {/* Your other page content here */}
    </main>
  );
}