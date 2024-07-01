import { Footer } from "../footer";
import { InfoHeaderNav } from "../header/infoHeader";
import { MainNavHeader } from "../header/mainHeader";

export const CustomLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full fixed top-0 left-0 z-[9999]">
        <InfoHeaderNav />
        <MainNavHeader />
      </div>
      <section className="mt-[170px] md:mt-[150px] relative">{children}</section>
      <Footer />
    </div>
  );
};
