import { TagBadge } from "@/components/Tag";
import { JobCard } from "@/components/card/jobCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { jobData } from "@/helper/data";

export const JobSection = () => {
  return (
    <main className="w-full relative  bg- ">
      <section
        style={{
          backgroundImage: "url(/asset/job-bg-pattern.png)",
        }}
        className="w-full py-12 px-8 bg-black h-[400px] bg-no-repeat bg-cover bg-center "
      ></section>
      <CustomSectiomWrapper>
        <div className="text-white relative -top-[300px] ">
          <div className="flex items-end justify-between">
            <div>
              <TagBadge cls="bg-[#4EAF4E]">HOT JOBS</TagBadge>
              <h3 className="font-bold text-[40px] text-white max-w- max-w-lg">
                Recent job openings and IT opportunities in the UK.
              </h3>
            </div>
            <button className="h-12 px-6 text-center rounded-[42px] bg-[#E58F24] text-white">
              View More
            </button>
          </div>
          <div className="bg-[#FAFAFA] gap-3 items-center justify-center grid grid-cols-3 gap- py-2 px-4 mt-9 rounded-[30px]">
            {jobData.map((data, index) => (
              <JobCard key={index} job={data} />
            ))}
          </div>
        </div>
      </CustomSectiomWrapper>
    </main>
  );
};
