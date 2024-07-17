import Image from "next/image";

type CounterCardProps = {
  imgUrl: string;
  value: number;
  title: string;
};

function CounterCard({ imgUrl, value, title }: CounterCardProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={imgUrl} width={48} height={48} alt={title} />
      <div className="flex justify-start flex-col gap-0">
        <p className="text-neutral-grey text-base">{title}</p>
        <p className="text-neutral-dGrey text-xl font-semibold">
          {value.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CounterCard;
