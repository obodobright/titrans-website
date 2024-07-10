/* eslint-disable @next/next/no-img-element */
export const TestiCard = ({ isActive, data }) => {
  return (
    <section className=" flex items-center justify-center flex-col">
      <div
        className={`${
          isActive ? "w-32 h-32 flex justify-center items-center " : "w-24 h-24 hidden"
        } rounded-full transition-all mx-2 overflow-hidden flex items-center justify-center bg-slate-200`}
      >
        <img src={data.img} className="w-full transition-all object-cover" alt={data.name} />
      </div>
      {isActive ? (
        <div className="mt-3 text-center">
          <h3 className="font-medium text-3xl text-[#030211]">{data.name}</h3>
          <p className="text-lg font-normal text-[#030211]">{data.jobTitle}</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
