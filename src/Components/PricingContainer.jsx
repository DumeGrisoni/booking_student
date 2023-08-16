// eslint-disable-next-line react/prop-types
const PricingContainer = ({ title, children, price }) => {
  return (
    <div className="w-[300px] h-auto lg:h-[1100px] flex flex-col border items-center border-grey-font rounded-md shadow-md shadow-grey-font">
      {/* TITLE SECTION */}
      <div className="mx-auto w-full items-center justify-center text-center flex h-[125px] bg-primary text-secondary-var-1 text-title">
        <h1>{title}</h1>
      </div>
      {/* TEXT SECTION */}
      <div className=" flex-1 p-5 flex w-full items-start text-primary mt-8 justify-center text-center text-default">
        <p>{children}</p>
      </div>
      {/* PRICE SECTION */}
      <div className="flex h-auto p-10 lg:p-0 lg:h-[200px] border-t text-default border-grey-font w-full items-center text-title bg-primary-var-1 text-secondary-var-1 justify-center">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default PricingContainer;
