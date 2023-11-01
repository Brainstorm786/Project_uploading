import React from "react";

import { Img, Line, Text } from "components";

const SignupOnePage = () => {
  return (
    <>
      <div className="bg-blue-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[99px] w-full">
        <div className="flex flex-col gap-[55px] items-center justify-start w-[36%] md:w-full">
          <div className="flex flex-col gap-[34px] items-start justify-start w-[78%] md:w-full">
            <Img
              className="h-[93px] md:h-auto object-cover w-[28%] sm:w-full"
              src="images/img_preview1.png"
              alt="previewOne"
            />
            <Text
              className="text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
              size="txtInterRegular24"
            >
              <span className="text-white-A700 font-inter font-normal">
                Join Our Platform.
              </span>
              <span className="text-white-A700 font-inter font-normal">
                <>
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-inter text-[15px] font-normal">
                We are the upcoming ............
              </span>
            </Text>
          </div>
          <Img
            className="h-[415px] md:h-auto object-cover w-full"
            src="images/img_52032461.png"
            alt="52032461"
          />
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start p-[11px] md:px-5 w-[54%] md:w-full">
          <div className="flex flex-row gap-2 items-end justify-end mt-1.5 w-[15%] md:w-full">
            <Text
              className="text-[15px] text-gray-600 text-justify"
              size="txtInterLight15"
            >
              English (UK)
            </Text>
            <Img
              className="h-2 my-[5px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
          <div className="flex flex-col gap-7 justify-start mb-[71px] w-[63%] md:w-full">
            <a
              href="javascript:"
              className="text-2xl md:text-[22px] text-gray-700_01 text-justify sm:text-xl tracking-[1.92px]"
            >
              <Text size="txtInterBold24">Create Account</Text>
            </a>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between ml-0.5 md:ml-[0] w-full">
                <div className="h-[45px] relative w-[45%] sm:w-full">
                  <div className="flex flex-row gap-[17px] h-full items-start justify-start ml-[7px] my-auto w-[82%]">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_goog1.svg"
                      alt="googOne"
                    />
                    <Text
                      className="mt-1 text-gray-700_01 text-xs"
                      size="txtInterRegular12"
                    >
                      Sign up with Google
                    </Text>
                  </div>
                  <div className="absolute border border-gray-300_01 border-solid h-[45px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                </div>
                <div className="h-[45px] relative w-[46%] sm:w-full">
                  <Img
                    className="absolute h-8 inset-y-[0] left-[0] my-auto"
                    src="images/img_facebookflogo.svg"
                    alt="facebookflogo"
                  />
                  <Text
                    className="ml-auto mr-[9px] my-auto text-gray-700_01 text-xs"
                    size="txtInterRegular12"
                  >
                    Sign up with Facebook
                  </Text>
                  <div className="absolute border border-gray-300_01 border-solid h-[45px] inset-[0] justify-center m-auto rounded-lg w-[99%]"></div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[189px] mt-[54px] text-gray-500 text-xl"
                size="txtInterRegular20Gray500"
              >
                -OR-
              </Text>
              <Text
                className="mt-[30px] text-base text-gray-500"
                size="txtInterRegular16"
              >
                Full Name
              </Text>
              <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-1.5 w-full" />
              <Text
                className="mt-[34px] text-base text-gray-500"
                size="txtInterRegular16"
              >
                Email Address
              </Text>
              <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-1 w-full" />
              <div className="flex flex-col items-center justify-start mt-[35px] w-full">
                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-gray-500"
                      size="txtInterRegular16"
                    >
                      Password
                    </Text>
                    <Img
                      className="h-[22px] mt-[5px] w-[22px]"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  </div>
                  <Line className="bg-gray-200 h-px w-full" />
                </div>
              </div>
              <a
                href="javascript:"
                className="bg-teal-200 border border-blue-100 border-solid h-[45px] justify-center ml-3 md:ml-[0] mt-12 sm:px-5 px-[35px] py-3 rounded-lg text-base text-center text-white-A700 w-[400px]"
              >
                <Text size="txtInterSemiBold16">Create Account</Text>
              </a>
              <Text
                className="ml-3 md:ml-[0] mt-[33px] text-base text-gray-500"
                size="txtInterRegular16"
              >
                <span className="text-gray-500 font-inter text-left font-normal">
                  Already have an account?{" "}
                </span>
                <span className="text-green-800 font-inter text-left font-normal">
                  Log in
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupOnePage;
