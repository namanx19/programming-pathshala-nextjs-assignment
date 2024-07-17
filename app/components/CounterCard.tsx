import Image from "next/image";
import CountdownAnimation from "./CounterAnimation";
type StatsCardProps = {
  imgUrl: string;
  value: number;
  title: string;
};

export default function StatCard({ imgUrl, value, title }: StatsCardProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={imgUrl} width={48} height={48} alt={title} />
      <div className="flex justify-start flex-col gap-0">
        <CountdownAnimation endValue={value} duration={1500} />
        <p className="text-neutral-grey text-base">{title}</p>
      </div>
    </div>
  );
}
