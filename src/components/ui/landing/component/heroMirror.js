export const HeroMirror = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: "0px 24px 42px 0px #B9B9B940",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      className="py-4 px-4 lg:py-12 lg:px-8 w-full md:max-w-lg  rounded-[29px]"
    >
      {children}
    </div>
  );
};

export const HeroLayout = ({ bg, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(/asset/${bg})`,
      }}
      className="w-full  fle items-center relative bg-[whitesmoke]  bg-no-repeat bg-cover bg-center  bg-red-30 py-6 px-3 md:py-12 md:px-12 "
    >
      {children}
    </section>
  );
};
