"use client";
import Link from "next/link";
import Image from "next/image";
import { useThemeStore } from "@/providers/ThemeProvider";

const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="bg-neutral-white/10  p-3 rounded-full">
      <Image src={imgUrl} width={16} height={16} alt="social-media" />
    </div>
  );
};

const socialMediaContent = [
  "/SocialMedia/instagram.svg",
  "/SocialMedia/dribble.svg",
  "/SocialMedia/twitter.svg",
  "/SocialMedia/youtube.svg",
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", route: "/about" },
      { name: "Blog", route: "/blog" },
      { name: "Contact us", route: "/contact" },
      { name: "Pricing", route: "/pricing" },
      { name: "Testimonials", route: "/testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help center", route: "" },
      { name: "Terms of service", route: "" },
      { name: "Legal", route: "" },
      { name: "Privacy policy", route: "" },
      { name: "Status", route: "" },
    ],
  },
];

export default function Footer() {
  const { theme } = useThemeStore((state) => state);
  return (
    <section className="md:px-28 px-16 flex lg:flex-row flex-col lg:justify-between justify-center md:items-center items-start py-12 lg:gap-3 gap-5 bg-neutral-black text-white">
      <div className="space-y-10">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src="/logo_icon.svg" width={35} height={24} alt="logo" />
          <span className="my-auto font-bold text-4xl">Nexcent</span>
        </Link>
        <div className="text-neutral-silver dark:text-neutral-grey text-sm">
          <p>Copyright © 2024 Nexcent ltd.</p>
          <p className="mt-2">All rights reserved</p>
        </div>
        <div className="flex justify-start items-start gap-3">
          {socialMediaContent.map((item) => (
            <SocialIcon key={item} imgUrl={item} />
          ))}
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-between gap-10 min-w-96">
        <div className="flex flex-rop gap-8">
          {footerLinks.map((items) => (
            <div className="flex flex-col gap-3 min-w-40" key={items.title}>
              <h5 className="font-semibold">{items.title}</h5>
              <ul className="flex flex-col font-light">
                <li className="flex flex-col gap-2" role="button">
                  {items.links.map((link) => (
                    <Link href={link.route} key={link.name}>
                      {link.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h5 className="font-semibold">Stay up to date</h5>
          <div className="bg-neutral-white/10 py-2 px-3 rounded-md flex flex-row items-center">
            <input
              type="email"
              className="text-light shadow-none bg-transparent"
              id="emailSubmitInput"
              placeholder="Your email address"
            />
            <button>
              <Image
                src="/send.svg"
                height={20}
                width={20}
                alt="Submit Button"
                className="my-auto"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
