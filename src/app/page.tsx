import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6">Felix Rückl</h1>
        <h2 className="text-3xl text-gray-700 mb-8">Web Developer & Designer</h2>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          I craft modern, responsive web applications using cutting-edge technologies.
          Specializing in React, Next.js, and clean, efficient code.
        </p>
        <Link 
          href="/portfolio" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-600">Node.js, Express, PostgreSQL, REST APIs</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tools & Practices</h3>
              <p className="text-gray-600">Git, CI/CD, Agile, Test-Driven Development</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/felixrueckl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/in/felixrueckl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            <a href="https://twitter.com/felixrueckl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
          </div>
          <p className="text-center text-gray-400">&copy; 2024 Felix Rückl. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}