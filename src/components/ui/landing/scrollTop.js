import { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

export const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        // Adjust this value to set when the button should appear
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScroll && (
        <div
          role="button"
          onClick={handleScrollToTop}
          className="w-12 h-12 transition-all shadow flex right-3 items-center justify-center fixed bottom-10 group hover:bg-black rounded-full bg-[#E58F24]"
        >
          <IoArrowUpOutline fontSize={20} className="text-white " />
        </div>
      )}
    </>
  );
};
