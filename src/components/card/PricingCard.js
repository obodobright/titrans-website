export const PricingCard = () => {
  return (
    <section className="w-full bg-[red] p-3 rounded-[10px] py-3">
      <div className="bg-[#303030] py-3 rounded-md  px-3">
        <h3 className="font-semibold text-2xl text-white">Basic Plan</h3>
        <p className="text-white font-normal text-base">
          The argument in favor of using to filler text goes something.
        </p>
        <div>
          <h3>$35</h3>
          <div>Monthly</div>
        </div>
      </div>
      <div>
        <div>
          <p>24/7 system monitoring</p>
        </div>
        <div>
          <p>Security management</p>
        </div>
        <div>
          <p>Secure finance backup</p>
        </div>
        <div>
          <p>Remote support</p>
        </div>
      </div>
    </section>
  );
};
