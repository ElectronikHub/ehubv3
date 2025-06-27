import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        bg-secondary 
        text-white 
        text-sm 
        px-5 py-2.5 
        rounded-full 
        font-semibold 
        shadow-md 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-[#d1741f] 
        hover:shadow-lg 
        focus:outline-none 
        focus-visible:ring-4 
        focus-visible:ring-[#d1741f] 
        focus-visible:ring-opacity-75 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
