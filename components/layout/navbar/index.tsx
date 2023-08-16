import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('collections-menu');

  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-white p-4 shadow-md lg:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        {menu.length ? (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link href={item.path} className="underline-offset-4 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href="/"
          aria-label="Go back home"
          className="mx-auto" // Center the logo
        >
          <LogoIcon width={251} height={28} fill="#000" />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Search />
          </div>
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
