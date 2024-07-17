import Image from "next/image";

type FeatureCardProps = {
  id: number;
  imgUrl: string;
  title: string;
};

function FeatureCard({ id, imgUrl, title }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 max-w-[300px] shadow-md rounded-lg dark:bg-white">
      <Image src={imgUrl} width={65} height={65} alt={title} />
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-neutral-dGrey font-bold text-2xl dark:text-neutral-black">
          {title}
        </h1>
        <p className="text-neutral-grey/85 text-sm dark:text-neutral-silver">
          Our membership management software provides full automation of
          membership renewals and payments.
        </p>
      </div>
    </div>
  );
}


export default FeatureCard;