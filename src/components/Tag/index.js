export const TagBadge = ({ cls, children }) => {
  return (
    <div
      className={`text-base text-center mb-3 w-fit font-normal px-3 tracking-wide rounded-full text-white ${cls}`}
    >
      {children}
    </div>
  );
};
