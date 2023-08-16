// components/Banner.js

import Link from 'next/link';

function Banner() {
  return (
    <div className="h-8 w-full bg-neutral-200 p-1 text-center">
      <span>This is a headless Shopify demo store. </span>
      <Link href="https://june.contact " className="underline">
        https://june.contact
      </Link>
    </div>
  );
}

export default Banner;
