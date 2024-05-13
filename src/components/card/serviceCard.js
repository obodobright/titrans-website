import { TIcon } from "../icons";

export const ServiceCard = ({ service }) => {
  return (
    <section
      className={`${
        service.isDark ? "bg-[#181818]" : "bg-[#EBEBEB]"
      } my-3 rounded-[20px]  py-7 px-5`}
    >
      {service.icon}
      <div className="mt-4">
        <h2
          className={`font-semibold text-xl ${
            service.isDark ? "text-[#ebebeb]" : "text-[#181818]"
          }`}
        >
          {service.name}
        </h2>
        <p
          className={`text-[#595566] text-sm ${
            service.isDark ? "text-[#ebebeb]" : "text-[#181818]"
          } `}
        >
          {service.description}
        </p>
      </div>
    </section>
  );
};
