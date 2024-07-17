"use client";
import { useThemeStore } from "@/providers/ThemeProvider";
import { Button } from "../../components/ui/button";
import Image from "next/image";

interface CarouselCardProps {
  text: string;
  buttonText: string;
  imageSrc: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  text,
  buttonText,
  imageSrc,
}) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className="flex items-center justify-evenly p-4"
      style={{
        backgroundColor: theme === "light" ? "bg-white" : "bg-background",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div>
        <h2 className="text-4xl font-bold">{text}</h2>
        <p className="mt-2 text-lg">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button variant="default" className="mt-4">
          {buttonText}
        </Button>
      </div>
      <div>
        <Image src={imageSrc} alt="Carousel Image" width={400} height={400} />
      </div>
    </div>
  );
};

export default CarouselCard;
