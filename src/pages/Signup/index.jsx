import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Line, Text } from "components";

const SignupPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

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
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[66px] items-center justify-start p-[11px] md:px-5 w-[54%] md:w-full">
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
          <div className="flex flex-col gap-[26px] justify-start mb-24 w-[63%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-700_01 text-justify sm:text-xl tracking-[1.92px]"
              size="txtInterBold24"
            >
              Login Account
            </Text>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between ml-0.5 md:ml-[0] w-full">
                <div className="h-[45px] relative w-[45%] sm:w-full">
                  <div
                    className="common-pointer flex flex-row gap-[17px] h-full items-start justify-start ml-[7px] my-auto w-[76%]"
                    onClick={() => googleSignIn()}
                  >
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_goog1.svg"
                      alt="googOne"
                    />
                    <Text
                      className="mt-1 text-gray-700_01 text-xs"
                      size="txtInterRegular12"
                    >
                      Login with Google
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
                    className="ml-auto mr-[21px] my-auto text-gray-700_01 text-xs"
                    size="txtInterRegular12"
                  >
                    Login with Facebook
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
                className="mt-[57px] text-base text-gray-500"
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
              <Button
                className="common-pointer border border-blue-100 border-solid cursor-pointer font-semibold min-w-[400px] sm:min-w-full ml-3 md:ml-[0] mt-[50px] rounded-lg text-base text-center"
                onClick={() => navigate("/taskmanagementdashboard")}
                color="teal_200"
                size="lg"
                variant="fill"
              >
                Login Account
              </Button>
              <Text
                className="md:ml-[0] ml-[82px] mt-10 text-base text-gray-500"
                size="txtInterRegular16"
              >
                <span className="text-gray-500 font-inter text-left font-normal">
                  Don’t have an account?{" "}
                </span>
                <span className="text-green-800 font-inter text-left font-normal">
                  Sign Up{" "}
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
