/* eslint-disable @next/next/no-img-element */
export const TestiCard = ({ isActive, data }) => {
  return (
    <section>
      <div
        className={`${
          isActive ? "w-40 h-40 " : "w-24 h-24 hidden md:flex"
        } rounded-full transition-all mx-2 overflow-hidden flex items-center justify-center bg-slate-200`}
      >
        <img src={data.img} className="w-full transition-all object-cover" alt={data.name} />
      </div>
    </section>
  );
};
