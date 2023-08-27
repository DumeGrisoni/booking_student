/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PricingContainer = ({
  title,
  children,
  price,
  secondPrice,
  hour,
  secondHour,
}) => {
  return (
    <div className="w-[300px] h-auto lg:min-h-[1350px] flex flex-col border items-center border-grey-font rounded-md shadow-md shadow-grey-font">
      {/* TITLE SECTION */}
      <div className="mx-auto w-full items-center justify-center text-center flex min-h-[125px] bg-primary text-secondary-var-1 text-title">
        <h1>{title}</h1>
      </div>
      {/* TEXT SECTION */}
      <div className=" flex-1 p-5 flex w-full items-start text-primary mt-8 justify-start text-start text-default">
        <p>{children}</p>
      </div>
      {/* PRICE SECTION */}
      {!secondPrice ? (
        <div className=" font-bold flex h-auto p-10 lg:p-0 lg:h-[200px] border-t text-default border-grey-font w-full items-center text-title bg-primary-var-1 text-secondary-var-1 justify-center">
          <div className="flex flex-col gap-10 justify-center items-center">
            {hour ? <span className="font-bold">{hour}</span> : ''}
            <p>{price}</p>
          </div>
        </div>
      ) : (
        <div className="font-bold flex h-auto p-10 lg-p-0 lg:h-[200px] border-t text-default gap-7 border-grey-font w-full items-center text-title bg-primary-var-1 text-secondary-var-1 justify-center ">
          <div className="flex flex-col justify-center items-center gap-10 text-center">
            <span>{hour}</span>
            <span>{price}</span>
          </div>
          <hr className="bg-secondary h-[100px] w-[1px]" />
          <div className="flex flex-col justify-center items-center gap-10 text-center">
            <span>{secondHour}</span>
            <span>{secondPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingContainer;
