import { TagBadge } from "@/components/Tag";
import { ServiceCard } from "@/components/card/serviceCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { serviceData } from "@/helper/data";

export const ServiceSection = () => {
  return (
    <main className="w-full py-6 px-4 md:py-12 md:px-9 bg-[#F8C648]">
      <CustomSectiomWrapper>
        <div className="flex items-center justify-center flex-col">
          <TagBadge cls="bg-[#4EAF4E] text-white">SERVICES</TagBadge>
          <h2 className="text-2xl md:text-4xl text-center text-[#181818] font-bold">
            Our core revolves around human and technological development, and the delivery of
            exceptional services.
          </h2>
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {serviceData.map((data, index) => (
            <ServiceCard key={index} service={data} />
          ))}
        </div>
      </CustomSectiomWrapper>
    </main>
  );
};
