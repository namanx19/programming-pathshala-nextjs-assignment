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
        className="h-auto w-auto"
      />
      <div className="px-3 py-3 w-[320px] shadow-md text-center flex flex-col justify-center items-center bg-white absolute rounded-md -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-44">
        <h1 className="text-[20px] text-neutral-grey dark:text-neutral-black font-semibold">
          {title}
        </h1>
        <Link
          href={link}
          className="text-primary font-semibold text-[20px] mt-4"
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
