import Link from "next/link";

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHambuger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="flex justify-between items-center bg-black-green text-white px-20 p-4 gap-10">
      <Link href="/" className=" font-roboto text-xl font-bold">
        Anikus LLC
      </Link>
      <div className="flex justify-around items-center gap-10 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
