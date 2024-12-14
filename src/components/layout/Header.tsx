import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li><Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}