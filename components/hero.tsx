import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute -top-[77px] left-0 z-0 h-full w-full object-cover"
        src="/hero.mp4"
      ></video>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center space-y-4 md:flex-row md:space-x-28 md:space-y-0">
        <Link
          href="search/blommor"
          className="w-36 bg-white px-4 py-2 text-center font-serif font-light italic"
        >
          Blommor
        </Link>
        <Link
          href="search/gront"
          className="w-36 bg-white px-4 py-2 text-center font-serif font-light italic"
        >
          Grönt
        </Link>
      </div>
    </div>
  );
}
