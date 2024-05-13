/* eslint-disable @next/next/no-img-element */
export const PricingCard = ({ plan, amount, isPopular }) => {
  return (
    <section className="w-full bg-white relative px-3 rounded-[20px] py-3 pb-5">
      <div className="bg-[#181818] py-6 rounded-[20px] relative  px-5">
        <h3 className="font-semibold text-2xl text-white">{plan}</h3>
        <p className="text-white font-normal text-base">
          The argument in favor of using to filler text goes something.
        </p>
        <div className="flex items-center border-t pt-2 border-[#565656] mt-3 justify-start gap-3">
          <h3 className="text-4xl font-bold text-white">{amount}</h3>
          <div
            className={` ${
              isPopular ? "bg-[#4EAF4E]" : "bg-[#3E3E3E]"
            } rounded-[20px]  text-white fnt-normal py- px-3 tracking-[0.1rem] uppercase`}
          >
            Monthly
          </div>
        </div>
        <div className="absolute top-0 right-2">
          <img src="/asset/dots.png" className="w-20" alt="" />
        </div>
      </div>
      <div className="py-6 px-6">
        <PricingContainerText>24/7 system monitoring</PricingContainerText>
        <PricingContainerText>Security management</PricingContainerText>
        <PricingContainerText>Secure finance backup</PricingContainerText>
        <PricingContainerText>Remote support</PricingContainerText>
      </div>
      <button
        className={`w-full h-12 border rounded-full text-base font-semibold ${
          isPopular ? "bg-[#FFCC4A]" : "border"
        }`}
      >
        Get This Plan
      </button>
    </section>
  );
};

export const PricingContainerText = ({ children }) => {
  return (
    <div className="flex my-2 items-center justify-start gap-2">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-4.461e-07 10.5351C-3.5787e-07 12.5536 0.598547 14.5268 1.71995 16.2051C2.84135 17.8834 4.43525 19.1914 6.30007 19.9639C8.1649 20.7363 10.2169 20.9384 12.1966 20.5446C14.1763 20.1508 15.9947 19.1788 17.422 17.7516C18.8493 16.3243 19.8213 14.5058 20.2151 12.5261C20.6088 10.5465 20.4067 8.49446 19.6343 6.62963C18.8619 4.76481 17.5538 3.17091 15.8755 2.04951C14.1972 0.928106 12.2241 0.329559 10.2056 0.329559C7.50048 0.334747 4.90767 1.41164 2.99487 3.32443C1.08208 5.23723 0.00518659 7.83004 -4.461e-07 10.5351ZM9.55792 6.42347L13.4831 9.95617C13.5635 10.0297 13.6276 10.1192 13.6715 10.2188C13.7153 10.3185 13.738 10.4262 13.738 10.5351C13.738 10.644 13.7153 10.7518 13.6715 10.8514C13.6276 10.9511 13.5635 11.0406 13.4831 11.1141L9.55792 14.6468C9.40354 14.7821 9.20231 14.8515 8.99736 14.8402C8.79241 14.8289 8.60003 14.7378 8.46144 14.5864C8.32286 14.435 8.24909 14.2353 8.25594 14.0302C8.2628 13.825 8.34973 13.6307 8.49811 13.4889L11.7757 10.5351L8.49811 7.58141C8.41949 7.51252 8.35543 7.42864 8.30966 7.33466C8.2639 7.24069 8.23737 7.13852 8.23162 7.03415C8.22587 6.92979 8.24102 6.82533 8.27618 6.72689C8.31133 6.62846 8.3658 6.53804 8.43637 6.46093C8.50694 6.38383 8.59219 6.32159 8.68714 6.27788C8.78208 6.23416 8.8848 6.20985 8.98926 6.20635C9.09373 6.20287 9.19784 6.22027 9.29549 6.25756C9.39314 6.29484 9.48236 6.35125 9.55792 6.42347Z"
          fill="#181818"
        />
      </svg>

      <p className="text-[#595566] text-base font-normal">{children}</p>
    </div>
  );
};
