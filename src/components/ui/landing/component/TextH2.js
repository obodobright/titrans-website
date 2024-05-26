export const TextH2 = ({ cls, children }) => {
  return <h3 className={`text-[#181818] font-bold text-2xl md:text-5xl ${cls}`}>{children}</h3>;
};

export const TextH3 = ({ cls, children }) => {
  return (
    <h3 className={`font-bold text-[24px] md:text-[38px] md:leading-[52.2px]  " ${cls}`}>
      {children}
    </h3>
  );
};
