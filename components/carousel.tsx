import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
export async function Carousel() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
  if (!products.length) return null;

  return (
    <div className="overscroll-contain">
      <h2 className="ml-4 font-serif text-4xl font-medium">Nyheter</h2>
      <ul className="flex w-full gap-4 overflow-x-scroll">
        {products.map((product, i) => (
          <li className="m-4 max-w-[40vw] flex-none xl:max-w-[30vw]" key={`${product.handle}${i}`}>
            <Link href={`/product/${product.handle}`}>
              <GridTileImage
                alt="{product.title}"
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                width={300}
                height={400}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
