import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[15px]" };
const variants = {
  fill: {
    teal_200: "bg-teal-200 text-white-A700",
    indigo_50: "bg-indigo-50 text-indigo-300",
    purple_100: "bg-purple-100 text-deep_purple-600",
    deep_orange_100: "bg-deep_orange-100",
    blue_500: "bg-blue-500 text-white-A700",
    purple_400: "bg-purple-400 text-white-A700_01",
    white_A700: "bg-white-A700 shadow-bs1 text-blue_gray-900",
    deep_orange_A200: "bg-deep_orange-A200 shadow-bs1 text-white-A700",
  },
  outline: { blue_500: "border border-blue-500 border-solid text-blue-500" },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "p-[17px]",
  "2xl": "p-6 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "teal_200",
    "indigo_50",
    "purple_100",
    "deep_orange_100",
    "blue_500",
    "purple_400",
    "white_A700",
    "deep_orange_A200",
  ]),
};

export { Button };
