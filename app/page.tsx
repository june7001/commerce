import { Carousel } from 'components/carousel';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import { PoemSection } from 'components/poem-section';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Suspense>
        <Suspense>
          <Carousel />
          <PoemSection />
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
