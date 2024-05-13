export const TagBadge = ({ cls, children }) => {
  return (
    <div
      className={`text-sm uppercase text-center mb-3 w-fit font-normal px-3 tracking-wide rounded-full  ${cls}`}
    >
      {children}
    </div>
  );
};
