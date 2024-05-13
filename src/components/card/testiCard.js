/* eslint-disable @next/next/no-img-element */
export const TestiCard = ({ isActive, data }) => {
  return (
    <section>
      <div
        className={`${
          isActive ? "w-36 h-36" : "w-24 h-24"
        } rounded-full mx-2 overflow-hidden flex items-center justify-center bg-slate-200`}
      >
        <img src={data.img} className="w-full" alt={data.name} />
      </div>
    </section>
  );
};
