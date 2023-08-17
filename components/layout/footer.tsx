import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('footer');

  return (
    <footer className="text-sm text-neutral-500">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 xl:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1" href="https://june.contact">
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="mr-10 underline-offset-4 hover:text-black hover:underline md:ml-auto">
          <a
            href="https://www.instagram.com/june.contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
