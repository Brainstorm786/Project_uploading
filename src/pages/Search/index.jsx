import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SearchPage = () => {
  const [airbnbsearchvalue, setAirbnbsearchvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 flex md:flex-col gap-6 items-center justify-center px-40 md:px-5 py-6 shadow-bs5 w-full">
          <Input
            name="airbnbsearch"
            placeholder="Search For Project"
            value={airbnbsearchvalue}
            onChange={(e) => setAirbnbsearchvalue(e)}
            className="!placeholder:text-black-900_01 !text-black-900_01 font-medium p-0 text-left text-sm w-full"
            wrapClassName="border border-gray-200_01 border-solid flex md:flex-1 w-[334px] md:w-full"
            suffix={
              airbnbsearchvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer h-5 ml-[35px] my-auto"
                  onClick={() => setAirbnbsearchvalue("")}
                  fillColor="#000000"
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              ) : (
                <Img
                  className="cursor-pointer h-5 ml-[35px] my-auto"
                  src="images/img_search_white_a700.svg"
                  alt="search"
                />
              )
            }
            shape="round"
            color="white_A700"
          ></Input>
          <div className="flex flex-1 flex-row gap-4 items-center justify-end w-full">
            <Text
              className="text-black-900_01 text-sm w-auto"
              size="txtInterMedium14Black90001"
            >
              Home Innovation Hub Help{" "}
            </Text>
            <Img className="h-6 w-6" src="images/img_globe.svg" alt="globe" />
            <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-row gap-2 items-center justify-start pl-4 pr-2 py-2 rounded-[24px] w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_menu_gray_900_02.svg"
                alt="menu"
              />
              <Img className="h-8 w-8" src="images/img_user.svg" alt="user" />
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-auto md:w-full">
          <div className="flex flex-col items-center justify-end max-w-[1290px] mx-auto py-[95px] w-full">
            <div className="flex flex-col items-center justify-start pt-[13px] px-[13px]">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center tracking-[-2.00px]"
                size="txtInterBold64"
              >
                Some of Trending{" "}
              </Text>
            </div>
            <div className="flex flex-col font-coveredbyyourgrace md:gap-10 gap-16 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start pl-[316.34px] pr-[313.66px] pt-[200px] md:px-10 sm:px-5 w-auto md:w-full">
                  <Text
                    className="md:text-5xl text-[70px] text-center text-teal-500 tracking-[-4.00px] w-auto"
                    size="txtCoveredByYourGraceRegular70"
                  >
                    {" "}
                    Projects by the students
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-inter items-center justify-start w-full">
                <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-red-50 flex flex-1 flex-col gap-[34px] justify-start p-5 rounded-[13px] w-full">
                    <Img
                      className="h-52 sm:h-auto ml-5 md:ml-[0] mt-1.5 object-cover w-[90%] md:w-full"
                      src="images/img_634e7afd1117168.png"
                      alt="634e7afd1117168"
                    />
                    <div className="flex flex-col items-center justify-start mb-[18px] mr-7 pt-[21px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                        size="txtInterBold28"
                      >
                        Shopify clone{" "}
                      </Text>
                      <Text
                        className="leading-[30.00px] mt-6 text-base text-center text-gray-700 w-[92%] sm:w-full"
                        size="txtInterMedium16"
                      >
                        Native integrations provide seamless segmentation,
                        automation & tracking.
                      </Text>
                      <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                    </div>
                  </div>
                  <div className="bg-teal-50 flex flex-1 flex-col items-center justify-end p-[11px] rounded-[13px] w-full">
                    <Img
                      className="h-[150px] sm:h-auto mt-[72px] object-cover w-4/5 md:w-full"
                      src="images/img_634e7af2f6791c6.png"
                      alt="634e7af2f6791cSix"
                    />
                    <div className="flex flex-col gap-[27px] items-center justify-start mt-12 pt-[7px] px-[7px]">
                      <Text
                        className="mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                        size="txtInterBold28"
                      >
                        Food Website{" "}
                      </Text>
                      <Text
                        className="leading-[30.00px] text-base text-center text-gray-700 w-full"
                        size="txtInterMedium16"
                      >
                        Ink profits while you sleep: Just set it and forget it.
                      </Text>
                    </div>
                    <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                  </div>
                  <div className="bg-deep_purple-50 flex flex-1 flex-col gap-[22px] items-center justify-end p-[11px] rounded-[13px] w-full">
                    <Img
                      className="h-[222px] sm:h-auto mt-[39px] object-cover w-[82%] md:w-full"
                      src="images/img_634e7af8afb63e2.png"
                      alt="634e7af8afb63eTwo"
                    />
                    <div className="flex flex-col gap-11 items-center justify-start py-[3px]">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 text-center"
                        size="txtInterBold26"
                      >
                        Real-time Stock Monitoring
                      </Text>
                      <Text
                        className="mb-[29px] text-base text-center text-gray-700"
                        size="txtInterMedium16"
                      >
                        Track performance of every stock.
                      </Text>
                    </div>
                    <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                  </div>
                  <div className="bg-cyan-50 flex flex-1 flex-col gap-6 items-center justify-end p-3.5 rounded-[13px] w-full">
                    <Img
                      className="h-[220px] sm:h-auto mt-[42px] object-cover w-[81%] md:w-full"
                      src="images/img_6324738b9a64bf3.png"
                      alt="6324738b9a64bfThree"
                    />
                    <div className="flex flex-col gap-7 items-center justify-start pb-2 px-2">
                      <Text
                        className="leading-[36.00px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 text-center w-full"
                        size="txtInterBold26"
                      >
                        Email and letter generator
                      </Text>
                      <Text
                        className="mb-[11px] text-base text-center text-gray-700"
                        size="txtInterMedium16"
                      >
                        Details
                      </Text>
                    </div>
                    <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                  </div>
                  <div className="bg-red-50_01 flex flex-1 flex-col gap-6 items-center justify-end p-3.5 rounded-[13px] w-full">
                    <Img
                      className="h-[181px] md:h-auto mt-16 mx-auto object-cover w-[66%] sm:w-full"
                      src="images/img_6324738b88eeaa5.png"
                      alt="6324738b88eeaaFive"
                    />
                    <div className="flex flex-col gap-[43px] items-center justify-start mt-12 mx-auto p-1">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center"
                        size="txtInterBold25"
                      >
                        Travelling Master
                      </Text>
                      <Text
                        className="mb-[30px] text-base text-center text-gray-700"
                        size="txtInterMedium16"
                      >
                        Details
                      </Text>
                    </div>
                    <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] mr-[222px] mt-[22px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                  </div>
                  <div className="bg-blue_gray-50 flex flex-1 flex-col gap-[15px] items-center justify-end p-3.5 rounded-[13px] w-full">
                    <Img
                      className="h-56 sm:h-auto mt-[25px] object-cover w-[79%] md:w-full"
                      src="images/img_634e7b01ce9dc33.png"
                      alt="634e7b01ce9dcThirtyThree"
                    />
                    <div className="flex flex-col gap-[59px] items-center justify-start p-[21px] sm:px-5">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                        size="txtInterBold28"
                      >
                        Website generator
                      </Text>
                      <Text
                        className="mb-[13px] text-base text-center text-gray-700"
                        size="txtInterMedium16"
                      >
                        Details
                      </Text>
                    </div>
                    <Button
                      className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
                      shape="round"
                      color="deep_orange_A200"
                      size="lg"
                      variant="fill"
                    >
                      Check It
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white-A700 flex h-[642px] md:h-auto items-center justify-center pt-24 md:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-auto">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start pb-[45.31px] pr-[17.41px] w-auto">
                <Img
                  className="h-[139px] md:h-auto object-cover w-[211px] sm:w-full"
                  src="images/img_pngwing1.png"
                  alt="pngwingOne"
                />
                <Text
                  className="leading-[22.00px] max-w-[277px] md:max-w-full text-gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Our aim to give knowledge and contribute to make in India
                  project.
                </Text>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                <Text
                  className="text-[13px] text-blue_gray-900 tracking-[1.50px] uppercase w-auto"
                  size="txtInterBold13Bluegray900"
                >
                  Company
                </Text>
                <ul className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">
                        Partner program
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">Career</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">Contact us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start pt-11 w-auto">
                <ul className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">Pricing</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">Reviews</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">
                        Direct Mail Amigo
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">
                        Success stories
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900"
                    >
                      <Text size="txtInterMedium16Bluegray900">
                        Terms & conditions
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex md:flex-1 flex-col items-start justify-start pb-5 pr-5 w-[26%] md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-xs tracking-[1.50px] uppercase"
                  >
                    <Text size="txtInterBold12">Contact</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-2.5 items-center justify-start mt-7 md:pr-10 sm:pr-5 pr-[124.02px]">
                      <div className="flex flex-col items-start justify-start w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="text-[15px] text-blue_gray-900 w-auto"
                        size="txtInterMedium15"
                      >
                        support@amigo.com
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mb-[90px] mt-[47px] text-base text-gray-700"
                  >
                    <Text size="txtInterMedium16">
                      <span className="text-gray-700 font-inter text-left font-medium">
                        Printed with{" "}
                      </span>
                      <span className="text-deep_orange-A200 font-inter text-left font-medium">
                        ❤️️️
                      </span>
                      <span className="text-gray-700 font-inter text-left font-medium">
                        {" "}
                        at our facility in Pune.
                      </span>
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-gray-300 border-solid border-t flex sm:flex-col flex-row md:gap-10 gap-[777.22px] items-start justify-start py-12 w-auto md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start pt-[1.64px] w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Img
                    className="h-[54px] md:h-auto object-cover w-[188px]"
                    src="images/img_amigobyhorseware.png"
                    alt="amigobyhorsewar"
                  />
                </div>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  © 2023 Amigo, Inc. All rights reserved.
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start pb-[6.83px] pt-[6.81px] w-auto">
                <Button
                  className="border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[89px] rounded-[12px] text-[15px] text-center"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Follow
                </Button>
                <Button
                  className="border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[115px] rounded-[12px] text-center text-sm"
                  color="deep_orange_A200"
                  size="lg"
                  variant="fill"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SearchPage;
