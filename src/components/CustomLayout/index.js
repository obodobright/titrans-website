import { Footer } from "../footer";
import { InfoHeaderNav } from "../header/infoHeader";
import { MainNavHeader } from "../header/mainHeader";

export const CustomLayout = ({ children }) => {
  return (
    <div>
      <InfoHeaderNav />
      <MainNavHeader />
      <>{children}</>
      <Footer />
    </div>
  );
};
