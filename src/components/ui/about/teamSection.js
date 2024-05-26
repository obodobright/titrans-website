import { TagBadge } from "@/components/Tag";
import { TeamCard } from "@/components/card/teamCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";

export const TeamSection = () => {
  return (
    <section className="py-12 w-full bg-[#F5F5F5] px-8">
      <CustomSectiomWrapper>
        <div className="flex items-end justify-between">
          <div>
            <TagBadge cls="bg-[#FFCC4A] text-black uppercase">Our team</TagBadge>
            <h2 className="text-4xl max-w-md text-left text-[#181818] font-bold">
              We champion the bold to achieve the extraordinary
            </h2>
            <p className="max-w-xl my-3">
              Ippsum is the result of synergy between our teams and our customers. Our company
              culture is focused on excellent productivity, customer satisfaction, respect for team.
            </p>
          </div>
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
          className="mt-8 grid items-center justify-center  grid-cols-3 gap-3"
        >
          {Array.from({ length: 6 }).map((data, index) => (
            <TeamCard key={index} />
          ))}
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
