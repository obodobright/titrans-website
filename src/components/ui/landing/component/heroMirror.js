export const HeroMirror = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: "0px 24px 42px 0px #B9B9B940",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      className="bg-transparent  py-12 px-8 max-w-lg rounded-[29px]"
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
      className="w-full fle items-center relative bg-white bg-no-repeat bg-cover bg-center  bg-red-30 py-12 px-12 "
    >
      {children}
    </section>
  );
};
