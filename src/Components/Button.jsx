// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
  return (
    //  CHILDREN TO CHANGE BY TEXT, ONCLICK TO DEFINE
    <button
      className="text-default text-primary bg-secondary-var-1 hover:bg-primary hover:text-secondary-var-1 transition-all border border-primary py-1.5 px-6 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
