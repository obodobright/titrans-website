import { CustomSectiomWrapper } from "@/components/customWrapper";
import { CalandarIcon } from "@/components/icons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HeroLayout, HeroMirror } from "./component/heroMirror";
import { TextH2 } from "./component/TextH2";
import { useEffect, useState } from "react";

export const HeroBanner = () => {
  const [current, setCurrent] = useState(2);
  const imgCarousel = [
    {
      title: "Empowering the Next Generation of Tech Leaders",
      description: "Transform your Potential with Expert training and Mentorship",
      img: "https://ik.imagekit.io/hydekcjmz/titrans/hero-about.png?updatedAt=1719585102534",
    },
    {
      title: "Innovate, Create, Succeed.",
      description: "Join Our Global Cummunity of Visionary Minds",
      img: "https://ik.imagekit.io/hydekcjmz/titrans/about-titrans.png?updatedAt=1719580318952",
    },
    {
      title: "Building the Future, One Solution at a Time",
      description: "Your Journey to Excellence Starts Here.",
      img: " https://ik.imagekit.io/hydekcjmz/titrans/contact-hero.png?updatedAt=1719585125760",
    },
  ];
  // https://ik.imagekit.io/hydekcjmz/titrans/hero-about.png?updatedAt=1719585102534
  // https://ik.imagekit.io/hydekcjmz/titrans/about-titrans.png?updatedAt=1719580318952
  // https://ik.imagekit.io/hydekcjmz/titrans/contact-hero.png?updatedAt=1719585125760

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === imgCarousel.length - 1 ? 0 : prevIndex + 1));
    }, [5000]);

    return () => clearInterval(interval);
  }, [imgCarousel.length]);
  return (
    <HeroLayout bg={imgCarousel[current].img}>
      <div
        style={{ boxShadow: "0px 24px 42px 0px #B9B9B940" }}
        className="w-[130px] hidden  cursor-pointer absolute left-7  top-32 lg:flex items-center justify-center h-[130px] bg-transparent rounded-full "
      >
        <div className="w-12 flex items-center justify-center h-12 bg-white rounded-full">
          <FaArrowLeftLong />
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 24px 42px 0px #B9B9B940" }}
        className="w-[130px] hidden  cursor-pointer absolute right-7 top-32 lg:flex items-center justify-center h-[130px] bg-transparent rounded-full "
      >
        <div className="w-12 flex items-center justify-center h-12 bg-[#E58F24] rounded-full">
          <FaArrowRightLong color="white" />
        </div>
      </div>
      <CustomSectiomWrapper>
        <HeroMirror>
          <TextH2>{imgCarousel[current].title}</TextH2>
          <p className="text-[#595566] text-base font-normal mt-3">
            {imgCarousel[current].description}
          </p>
          <div className="flex items-center gap-3 mt-8">
            <button className="h-12 bg-black hover:bg-[#E58F24] transition-colors text-white text-sm md:text-base rounded-[42px] px-5">
              Get Started
            </button>
            <button className="h-12 group flex items-center  gap-2 bg-white rounded-[42px] px-2">
              <div className="w-8 h-8 scale-100 group-hover:scale-105  rounded-full hidden md:flex items-center justify-center bg-[#4EAF4E]">
                <CalandarIcon />
              </div>
              <span className="text-[#353535] font-semibold text-sm md:text-base">
                Book a Meeting
              </span>
            </button>
          </div>
        </HeroMirror>
      </CustomSectiomWrapper>
    </HeroLayout>
  );
};
