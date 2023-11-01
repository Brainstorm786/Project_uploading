import React from "react";

const sizeClasses = {
  txtCabinItalic18: "font-cabin font-normal italic",
  txtCabinBold16Bluegray90001: "font-bold font-cabin",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold25: "font-bold font-inter",
  txtInterMedium15Gray90001: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterBold26: "font-bold font-inter",
  txtCabinItalic9: "font-cabin font-normal italic",
  txtInterBold28: "font-bold font-inter",
  txtInterBold68: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtSegoeUISemibold13: "font-segoeui font-semibold",
  txtInterBold62: "font-bold font-inter",
  txtInterBold63: "font-bold font-inter",
  txtInterBold64: "font-bold font-inter",
  txtInterMedium14Black90001: "font-inter font-medium",
  txtCabinRegular16: "font-cabin font-normal",
  txtInterBold60: "font-bold font-inter",
  txtCoveredByYourGraceRegular70: "font-coveredbyyourgrace font-normal",
  txtCabinRegular14: "font-cabin font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtCabinRegular12: "font-cabin font-normal",
  txtCabinItalic14: "font-cabin font-normal italic",
  txtCabinItalic16: "font-cabin font-normal italic",
  txtInterRegular1581: "font-inter font-normal",
  txtCabinRegular12Bluegray90001: "font-cabin font-normal",
  txtCabinBold16: "font-bold font-cabin",
  txtSegoeUI15Blue500: "font-normal font-segoeui",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtSegoeUISemilight15: "font-normal font-segoeui",
  txtInterMedium16: "font-inter font-medium",
  txtCoveredByYourGraceRegular48: "font-coveredbyyourgrace font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold13: "font-bold font-inter",
  txtInterMedium15: "font-inter font-medium",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtCoveredByYourGraceRegular48Teal500: "font-coveredbyyourgrace font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterBold13Bluegray900: "font-bold font-inter",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtRobotoMedium13: "font-medium font-roboto",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular20Gray500: "font-inter font-normal",
  txtSegoeUIBold15: "font-bold font-segoeui",
  txtSegoeUISemibold20Blue500: "font-segoeui font-semibold",
  txtInterLight15: "font-inter font-light",
  txtSegoeUI15: "font-normal font-segoeui",
  txtSegoeUI13: "font-normal font-segoeui",
  txtInterBold81: "font-bold font-inter",
  txtSegoeUIBlack20: "font-black font-segoeui",
  txtInterMedium14Bluegray900: "font-inter font-medium",
  txtInterMedium271: "font-inter font-medium",
  txtInterMedium14Gray90001: "font-inter font-medium",
  txtInterBold36: "font-bold font-inter",
  txtInterBold37: "font-bold font-inter",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtSegoeUISemibold20: "font-segoeui font-semibold",
  txtInterBold34: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtSegoeUI20: "font-normal font-segoeui",
  txtInterBold35: "font-bold font-inter",
  txtRobotoRegular15: "font-normal font-roboto",
  txtInterBold70: "font-bold font-inter",
  txtInterBold36Bluegray900: "font-bold font-inter",
  txtRobotoBold15: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
