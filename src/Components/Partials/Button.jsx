import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`archivo-black-regular bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-[#d1741f] hover:scale-110 transition font-semibold duration-300 shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
