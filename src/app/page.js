import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div className="h-40">
  <nav className="text-3xl flex justify-end mr-4 mt-2">
    <div>
      
    </div>
    <ul className="space-x-6">
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='contact'>Contact</Link>
    </ul>
  </nav>
 </div>
  );
}
