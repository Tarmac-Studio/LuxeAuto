import Border from "../../elements/Border";

const BorderList = () => {
  const steps = [
    "Explore our Curated Collection",
    "Connect Your Wallet",
    "Immerse in Transparent Transactions",
    "Secure Your Dream Car",
    "Become a LuxeAuto Seller",
    "Personalized Seller Dashboard",
    "Join the LuxeAuto Community",
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <Border
          key={index}
          number={index + 1}
          text={step}
          // Apply responsive margins
          className={
            index === steps.length - 1
              ? "mb-16 sm:mb-20 md:mb-32 lg:mb-40 xl:mb-60 2xl:mb-120"
              : "mb-2"
          }
        />
      ))}
    </div>
  );
};

export default BorderList;
