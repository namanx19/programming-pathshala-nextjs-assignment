import Image from "next/image";
import Card from "./components/FeatureCard";
import { Button } from "@/components/ui/button";
import StatCard from "./components/CounterCard";
import BlogCard from "./components/UserCard";

const cardContent = [
  {
    id: 1,
    title: "Membership Organisations",
    imgUrl: "/features/icon1.svg",
  },
  {
    id: 2,
    title: "National Associations",
    imgUrl: "/features/icon2.svg",
  },
  {
    id: 3,
    title: "Clubs And Similar Groups",
    imgUrl: "/features/icon3.svg",
  },
];

const statContent = [
  {
    title: "Members",
    value: 2245341,
    imgUrl: "/stats/icon1.svg",
  },
  {
    title: "Clubs",
    value: 46328,
    imgUrl: "/stats/icon2.svg",
  },
  {
    title: "Event Bookings",
    value: 828267,
    imgUrl: "/stats/icon3.svg",
  },
  {
    title: "Payments",
    value: 1926436,
    imgUrl: "/stats/icon4.svg",
  },
];

export const marketingContent = [
  {
    id: 1,
    title: "Creating Streamlined Safeguarding Processes with OneRen.",
    imgUrl: "/readmore/how.svg",
    link: "/blog",
  },
  {
    id: 2,
    title: "What are your responsibilities and how can you manage them?",
    imgUrl: "/readmore/manage.svg",
    link: "/blog",
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia.",
    imgUrl: "/readmore/revamp.svg",
    link: "/blog",
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Our Clients Section*/}
      <section className="px-20 md:px-36 space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-neutral-dGrey text-1 font-semibold text-4xl">
            Our Clients
          </h1>
          <p className="text-neutral-grey font-light text-lg">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-row items-center w-100 justify-between flex-wrap mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Image
              src={`/clients/client${value}.svg`}
              width={48}
              height={48}
              alt={`client-${value}`}
              key={value}
            />
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-20 md:px-36 text-center py-5">
        <div>
          <h1 className="text-neutral-dGrey font-semibold text-4xl">
            Manage your entire community <br /> in a single system
          </h1>
          <p className="text-neutral-grey text-base mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="mt-6 flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-32 gap-8 items-center">
          {cardContent.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-20 md:px-36 flex lg:flex-row flex-col lg:justify-between justify-center items-center">
        <Image
          src="/pixelgrade.svg"
          width={400}
          height={400}
          alt="hero section"
          className="w-2/5 h-full"
        />
        <div className="w-3/5">
          <h1 className="text-neutral-dGrey font-semibold text-4xl">
            The unseen of spending three&nbsp; <br />
            years at Pixelgrade
          </h1>
          <p className="text-neutral-grey text-base mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      {/* Stats */}
      <section className="px-20 md:px-36 flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center py-20 bg-neutral-silver">
        <div>
          <h1 className="text-neutral-dGrey font-semibold text-4xl">
            Helping a local&nbsp; <br />
            business reinvent itself
          </h1>
          <p className="text-neutral-grey text-base mt-2">
            We reached here with our hardwork and dedication.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 ">
          {statContent.map((card) => (
            <div key={card.title} className="min-w-64">
              <StatCard {...card} />
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-20 md:px-36 flex lg:flex-row flex-col lg:justify-between justify-center items-center column-gap-3 py-8">
        <Image
          src="/useImg.svg"
          width={0}
          height={0}
          alt="use-Img"
          className="w-2/5 h-auto"
        />
        <div className="space-y-4 w-3/5">
          <div>
            <h1 className="text-neutral-dGrey font-semibold text-4xl">
              How to design your site footer like&nbsp;we did ?
            </h1>
            <p className="text-neutral-grey text-base mt-2">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      {/* Meet our customers */}
      <section className="px-20 md:px-36 flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-3 bg-neutral-silver gap-x-3 py-8">
        <Image
          src="/feedback.png"
          width={326}
          height={326}
          alt="feedback"
          className="w-1/3 h-full"
        />
        <div className="space-y-4 w-2/3">
          <p className="text-neutral-grey text-base mt-2">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="pb-4">
            <h1 className="text-primary font-semibold text-[20px]">
              Tim Smith
            </h1>
            <p className="text-neutral-lGrey text-base mt-2">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between lg:items-center items-start">
            {[1, 2, 3, 4, 5, 6, 7].map((value) => (
              <Image
                src={`/Clients/client${value}.svg`}
                width={48}
                height={48}
                alt={`client-${value}`}
                key={value}
              />
            ))}
            <div className="flex items-center justify-center text-center">
              <p className="text-primary text-base font-semibold">
                Meet All Customers{" "}
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="fill-primary ml-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-20 md:px-36 text-center pt-8 pb-32">
        <div>
          <h1 className="text-neutral-dGrey font-semibold text-4xl">
            Caring is the new marketing
          </h1>
          <p className="text-neutral-grey text-base mt-2">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. <br /> See who&lsquo;s joining
            the community, read about how our community are <br /> increasing
            their membership income and lot&lsquo;s more.
          </p>
        </div>
        <div className="mt-4 flex lg:flex-row flex-col justify-between align-items-center gap-3 column-gap-5 ">
          {marketingContent.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Book A Demo */}
      <section className="text-center bg-neutral-silver mt-5 py-12">
        <h1 className="font-bold text-6xl w-full">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h1>
        <Button size="lg" className="mt-8">
          Get Demo{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Button>
      </section>
    </div>
  );
}
