import Link from "next/link";

export default function Head() {

  return (
    <header>
      <h1 className="bg-black text-white p-4 grid place-items-center mb-16">
        <Link className="text-3xl" href="/">くろねこのみー</Link>
      </h1>
    </header>
  );
}