import Image from "next/image";
import Link from "next/link";

type UserCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  link: string;
};

function UserCard({ id, imgUrl, title, link }: UserCardProps) {
  return (
    <div className="relative bg-neutral-silver rounded-lg">
      <Image
        src={imgUrl}
        width={368}
        height={286}
        alt={title}
        className="object-cover h-full w-full"
      />
      <div className="lg:p-4 p-6 w-4/5 h-3/5 shadow-md text-center flex flex-col justify-center items-center bg-white absolute rounded-md -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  xl:text-[18px] lg:text-[14px] md:text-[20px] sm:text-[16px] text-[12px]">
        <h1 className="text-neutral-grey dark:text-neutral-black font-semibold">
          {title}
        </h1>
        <Link href={link} className="text-primary font-semibold xl:mt-4 mt-2">
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
