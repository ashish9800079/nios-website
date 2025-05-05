import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">NIOS</Link>
        <div>
          <Link href="/courses" className="px-3">Courses</Link>
          <Link href="/admission" className="px-3">Admission</Link>
          <Link href="/blog" className="px-3">Blog</Link>
          <Link href="/store" className="px-3">Store</Link>
          <Link href="/admin" className="px-3">Admin</Link>
        </div>
      </nav>
    </header>
  );
} 