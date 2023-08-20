import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-black">
      <ShoppingBagIcon
        className={clsx(
          'h-6 transition-all ease-in-out hover:scale-110 group-[.transparent-nav]:text-white group-[.white-nav]:text-black ',
          className
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 h-4 w-4 text-[11px] font-medium ">{quantity}</div>
      ) : null}
    </div>
  );
}
