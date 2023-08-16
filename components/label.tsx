import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode
}: {
  title: string;
  amount: string;
  currencyCode: string;
}) => {
  return (
    <div className="mt-2 flex w-full justify-between">
      <h3 className="uppercase text-green-900">{title}</h3>
      <Price amount={amount} currencyCode={currencyCode} />
    </div>
  );
};

export default Label;
