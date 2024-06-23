import { useCount } from "../animation/useCount";

export const StatsCount = ({ num }) => {
  const { count } = useCount(num.start, num.end);
  return (
    <div className="mx-3 flex items-center justify-center flex-col">
      <h2 className="text-3xl  md:text-5xl font-bold leading-[51px]">{count}+ </h2>
      <p className="text-sm text-center md:text-lg font-medium">{num.description}</p>
    </div>
  );
};
