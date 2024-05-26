import Image from "next/image";
import { Arrow } from "../icons";

export const JobCard = ({ job }) => {
  return (
    <section className="relative">
      <div className="min-h-[240px] rounded-[20px] w-full  relative ">
        <div className="h-[350px] md:h-[310px] lg:h-[280px] transition-all translate-y-0 opacity-0 hover:opacity-100 hover:cursor-pointer p-4 flex items-start  flex-col justify-end  w-full rounded-[20px]   absolute top-0 z-10 bg-[#181818BF]   ">
          <h1 className="font-semibold text-2xl text-white">{job.name}</h1>
          <p className="text-base font-normal text-[#E58F24]">{job.source}</p>
          <div
            style={{
              background: "linear-gradient(153.8deg, #FFE9B1 -8.69%, #DDA003 120.59%)",
            }}
            className="w-12 absolute top-4 right-4 flex items-center justify-center h-12 rounded-full"
          >
            <Arrow />
          </div>
        </div>
        {/* <Image className="absolute" src={job.img} alt="" width={250} height={250} /> */}
        <img src={job.img} className="h-[230p" alt="" />
      </div>
    </section>
  );
};
