import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AmigoprojectshowcaseplatformPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="h-[10200px] md:h-[10393px] sm:h-[9870px] md:px-5 relative w-full">
          <div className="absolute bg-teal-50 h-[9412px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto w-auto md:w-full">
            <div className="bg-teal-50 flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-32 w-auto md:w-full">
                <div className="md:h-[650px] h-[722px] md:pl-10 sm:pl-5 pl-[887.5px] py-[53px] relative w-[1439px] md:w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end my-auto pt-[61px] right-[0] w-[44%]">
                    <Img
                      className="h-[589px] md:h-auto object-cover w-full"
                      src="images/img_6373f7f03c5d3a2.png"
                      alt="6373f7f03c5d3aTwo"
                    />
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-start m-auto md:pr-10 sm:pr-5 pr-[496.16px] w-auto">
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[7px] w-auto">
                      <Text
                        className="leading-[96.00px] md:text-5xl text-[64px] text-blue_gray-900"
                        size="txtInterBold64"
                      >
                        <span className="text-blue_gray-900 font-inter text-left font-bold">
                          <>
                            Welcome to
                            <br />
                          </>
                        </span>
                        <span className="text-teal-500 font-coveredbyyourgrace text-left font-normal">
                          Amigo
                        </span>
                        <span className="text-blue_gray-900 font-inter text-left font-bold">
                          {" "}
                          World of innovation and knowledge sharing.
                        </span>
                      </Text>
                      <div className="flex flex-col gap-12 items-start justify-start w-auto md:w-full">
                        <Text
                          className="text-gray-700 text-xl w-auto"
                          size="txtInterMedium20"
                        >
                          Where Ideas Blossom, Collaboration Thrives.
                        </Text>
                        <div className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[349.19px] w-auto md:w-full">
                          <Button
                            className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold min-w-[263px] text-[13px] text-center tracking-[1.20px] uppercase"
                            shape="round"
                            color="deep_orange_A200"
                            size="2xl"
                            variant="fill"
                          >
                            Create project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-end py-24 w-full">
              <Text
                className="mt-14 md:text-5xl text-[63px] text-blue_gray-900 text-center tracking-[-2.00px]"
                size="txtInterBold63"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  Our Trading
                </span>
                <span className="text-blue_gray-900 font-inter font-bold">
                  {" "}
                </span>
                <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                  Blogs.
                </span>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <div className="md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start pl-[1044px] pr-16 md:px-10 sm:px-5 w-auto md:w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-[193px] md:h-auto object-cover w-full"
                      src="images/img_63286e5151c6792.png"
                      alt="63286e5151c6792"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-[65%]"
                      src="images/img_63286e5288280c8.png"
                      alt="63286e5288280cEight"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-48 md:h-auto object-cover w-full"
                      src="images/img_63286ff1f1b6f25.png"
                      alt="63286ff1f1b6fTwentyFive"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-[83%]"
                      src="images/img_63286e91cff7c91.png"
                      alt="63286e91cff7cNinetyOne"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-[193px] md:h-auto object-cover w-full"
                      src="images/img_63286e923461861.png"
                      alt="63286e923461861"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-[59%]"
                      src="images/img_6328726dc5bca9f.png"
                      alt="6328726dc5bca9f"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[1804px] w-auto">
                  <div className="flex flex-col gap-6 items-center justify-start w-[284px]">
                    <Img
                      className="h-[193px] md:h-auto object-cover w-full"
                      src="images/img_63286d1e1785f6f.png"
                      alt="63286d1e1785f6f"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-[22%]"
                      src="images/img_6328725f3fcfbbb.png"
                      alt="6328725f3fcfbbb"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-52 w-auto md:w-full">
              <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-end py-24 w-full">
                <Text
                  className="leading-[76.00px] mt-3 md:text-5xl text-[63px] text-blue_gray-900 text-center tracking-[-2.00px]"
                  size="txtInterBold63"
                >
                  <span className="text-blue_gray-900 font-inter font-bold">
                    Why use{" "}
                  </span>
                  <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                    <>
                      Amigo
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-900 font-inter font-bold">
                    It{" "}
                  </span>
                  <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                    works
                  </span>
                  <span className="text-blue_gray-900 font-inter font-bold">
                    {" "}
                    like crazy.
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[170px] items-center justify-between w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start px-[5px]">
                    <Text
                      className="md:text-5xl text-[63px] text-blue_gray-900 text-center tracking-[-2.00px]"
                      size="txtInterBold63"
                    >
                      10X
                    </Text>
                    <Text
                      className="leading-[22.00px] text-center text-gray-700 text-sm w-full"
                      size="txtInterMedium14"
                    >
                      Get the more traffic to your projects
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[23%] md:w-full">
                    <Img
                      className="h-[201px] md:h-auto object-cover w-full"
                      src="images/img_634434dadd8ea3e.png"
                      alt="634434dadd8ea3e"
                    />
                    <Text
                      className="text-center text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Your messages get read
                    </Text>
                  </div>
                  <div className="h-[122px] md:h-[76px] p-[17px] relative w-[23%] md:w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto md:text-5xl text-[62px] text-blue_gray-900 text-center top-[14%] tracking-[-2.00px] w-max"
                      size="txtInterBold62"
                    >
                      .....
                    </Text>
                    <Text
                      className="absolute bottom-[17%] inset-x-[0] mx-auto text-center text-gray-700 text-sm w-max"
                      size="txtInterMedium14"
                    >
                      ......................................
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="md:h-[2291px] h-[2637px] sm:h-[3803px] mx-auto md:px-10 sm:px-5 px-[75px] w-[1440px] md:w-full">
                <div className="flex flex-col m-auto w-full">
                  <div className="bg-red-50 h-[1111px] mx-auto w-full"></div>
                  <div className="flex flex-col items-center justify-center mb-auto mt-[-1111px] mx-auto p-[106px] md:px-10 sm:px-5 w-[90%] z-[1]">
                    <Text
                      className="mt-14 md:text-5xl text-[70px] text-blue_gray-900 text-center tracking-[-2.00px]"
                      size="txtInterBold70"
                    >
                      <span className="text-blue_gray-900 font-inter font-bold">
                        About{" "}
                      </span>
                      <span className="md:text-5xl text-teal-500 font-coveredbyyourgrace text-[90px] font-normal">
                        Amigo
                      </span>
                      <span className="text-blue_gray-900 font-inter font-bold">
                        {" "}
                      </span>
                    </Text>
                    <div className="flex flex-col gap-[15px] h-[670px] md:h-auto items-start justify-start mb-[1621px] w-auto md:w-full">
                      <div className="flex flex-col items-center justify-end p-[95px] md:px-10 sm:px-5">
                        <Text
                          className="mt-[35px] text-black-900 text-center text-xl"
                          size="txtInterRegular20"
                        >
                          Amigo is a basically Project sharing platform
                        </Text>
                      </div>
                      <div className="flex flex-col h-[402px] md:h-auto items-start justify-start max-w-[1077px] w-full">
                        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center max-w-[1077px] w-full">
                          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[46px] md:px-10 sm:px-5 px-[46px] rounded-[15px] shadow-bs3 w-[31%] md:w-full">
                            <Img
                              className="h-[212px] md:h-auto object-cover w-[87%] sm:w-full"
                              src="images/img_link1.png"
                              alt="linkOne"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                              size="txtInterMedium24"
                            >
                              Project Analysis
                            </Text>
                            <Text
                              className="mt-[49px] text-black-900_01 text-center text-sm"
                              size="txtInterRegular14"
                            >
                              Details
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[52px] md:px-10 sm:px-5 px-[52px] rounded-[16px] shadow-bs4 w-[34%] md:w-full">
                            <Img
                              className="h-[239px] md:h-auto object-cover w-[88%] sm:w-full"
                              src="images/img_link1_239x228.png"
                              alt="linkOne_One"
                            />
                            <Text
                              className="sm:text-[23.1px] md:text-[25.1px] text-[27.1px] text-black-900_01 text-center"
                              size="txtInterMedium271"
                            >
                              Online Reach
                            </Text>
                            <Text
                              className="mt-[58px] text-[15.81px] text-black-900_01 text-center"
                              size="txtInterRegular1581"
                            >
                              Details
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-11 md:px-10 px-11 sm:px-5 rounded-[15px] shadow-bs3 w-[31%] md:w-full">
                            <Img
                              className="h-[212px] md:h-auto object-cover w-[86%] sm:w-full"
                              src="images/img_link1_212x202.png"
                              alt="linkOne_Two"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                              size="txtInterMedium24"
                            >
                              Your Presence
                            </Text>
                            <Text
                              className="mt-[50px] text-[15.81px] text-black-900_01 text-center"
                              size="txtInterRegular1581"
                            >
                              Details
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[75px] w-auto md:w-full">
                  <div className="flex flex-col items-center justify-end py-[95px] w-full">
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
                          <div className="bg-red-50 flex flex-1 flex-col gap-[35px] justify-start p-5 rounded-[13px] w-full">
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
                                Native integrations provide seamless
                                segmentation, automation & tracking. No clunky
                                spreadsheets.
                              </Text>
                              <Text
                                className="bg-deep_orange-A200 border-2 border-blue_gray-900 border-solid h-5 justify-center mt-2 pt-[13px] sm:px-5 px-[35px] rounded-[10px] text-[13px] text-center text-shadow-ts text-white-A700 tracking-[1.20px] uppercase w-[157px]"
                                size="txtInterBold13"
                              >
                                Check It
                              </Text>
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
                                Ink profits while you sleep: Just set it and
                                forget it.
                              </Text>
                            </div>
                            <Button
                              className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold h-[42px] mt-[30px] text-[13px] text-center tracking-[1.20px] uppercase w-[157px]"
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
                          <div className="bg-red-50_01 flex flex-1 flex-col justify-end p-3.5 rounded-[13px] w-full">
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
              </div>
              <div className="bg-cyan-50_01 flex flex-col items-end justify-end mt-[-27.27px] mx-auto md:px-10 sm:px-5 px-[75px] py-24 w-auto md:w-full z-[1]">
                <div className="flex flex-col gap-[51px] justify-end pt-2.5 w-full">
                  <Text
                    className="leading-[76.00px] md:ml-[0] ml-[357px] mr-[432px] md:text-5xl text-6xl text-blue_gray-900 text-center tracking-[-2.00px]"
                    size="txtInterBold60"
                  >
                    <span className="text-blue_gray-900 font-inter font-bold">
                      <>
                        How Amigo will work
                        <br />
                      </>
                    </span>
                    <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                      <>Here&#39;s how.</>
                    </span>
                  </Text>
                  <div className="flex flex-col font-coveredbyyourgrace items-start justify-start md:pr-10 sm:pr-5 pr-[745.13px] w-auto md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start pb-48 w-auto">
                      <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start sm:px-5 px-6">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-teal-500_66 tracking-[4.00px]"
                            size="txtCoveredByYourGraceRegular48"
                          >
                            01
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start md:pr-10 sm:pr-5 pr-[268.88px] w-auto sm:w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_66 tracking-[-0.50px] w-auto"
                            size="txtInterBold36"
                          >
                            Post the Project
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start px-4">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-teal-500_66 tracking-[4.00px]"
                            size="txtCoveredByYourGraceRegular48"
                          >
                            02
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start md:pr-10 sm:pr-5 pr-[303.88px] w-auto md:w-full">
                          <Text
                            className="leading-[44.00px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_66 tracking-[-0.50px]"
                            size="txtInterBold36"
                          >
                            <span className="text-blue_gray-900_66 font-inter text-left font-bold">
                              <>
                                Go for Verification
                                <br />
                              </>
                            </span>
                            <span className="text-blue_gray-900_66 font-inter text-left text-xl font-bold">
                              <>
                                Project will verify by the faculty of the <br />
                                college where student was studying.
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-10 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-center justify-start px-[18px] w-[15%] sm:w-full">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-teal-500 tracking-[4.00px]"
                            size="txtCoveredByYourGraceRegular48Teal500"
                          >
                            03
                          </Text>
                          <Img
                            className="h-24"
                            src="images/img_div.svg"
                            alt="div"
                          />
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start pb-1 sm:pr-5 pr-[32.19px] w-auto sm:w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 tracking-[-0.50px] w-auto"
                            size="txtInterBold36Bluegray900"
                          >
                            Listing on Platform
                          </Text>
                          <Text
                            className="leading-[34.00px] max-w-[392px] md:max-w-full text-gray-700 text-xl"
                            size="txtInterMedium20"
                          >
                            One-off announcements or automatically triggered
                            flows. Customers receive their personalized cards
                            within a week.
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start px-[18px]">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-teal-500_66 tracking-[4.00px]"
                            size="txtCoveredByYourGraceRegular48"
                          >
                            04
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-start justify-start md:pr-10 sm:pr-5 pr-[280.88px] w-auto md:w-full">
                          <Text
                            className="sm:text-[33px] md:text-[35px] text-[37px] text-blue_gray-900_66 tracking-[-0.50px] w-auto"
                            size="txtInterBold37"
                          >
                            Get new connections
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start py-[93px] w-full">
              <Text
                className="md:text-5xl text-[63px] text-blue_gray-900 text-center tracking-[-2.00px]"
                size="txtInterBold63"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  Feedback
                </span>
                <span className="text-blue_gray-900 font-inter font-bold">
                  {" "}
                </span>
                <span className="text-blue_gray-900 font-inter font-bold">
                  of{" "}
                </span>
                <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                  STUDENTS
                </span>
              </Text>
              <div className="flex flex-col items-start justify-start mt-[74px] w-auto md:w-full">
                <div className="overflow-x-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between overflow-auto pb-[30px] w-full">
                    <div className="border-2 border-blue_gray-900 border-solid flex md:flex-1 flex-col items-start justify-end sm:pr-5 pr-[34px] py-[34px] rounded-[15px] w-[16%] md:w-full">
                      <div className="flex flex-col items-start justify-end mt-20 pr-[3px] py-[3px]">
                        <Text
                          className="mt-[123px] text-base text-gray-700"
                          size="txtInterBold16"
                        >
                          <span className="text-gray-700 font-inter text-left font-bold">
                            @getpostpilot
                          </span>
                          <span className="text-gray-700 font-inter text-left font-medium">
                            . Killer tool.
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="border-2 border-blue_gray-900 border-solid flex md:flex-1 flex-col gap-4 items-center justify-start p-[34px] sm:px-5 rounded-[15px] w-[29%] md:w-full">
                      <div className="flex flex-row gap-[144.08px] items-center justify-between w-auto">
                        <div className="flex flex-row gap-4 items-center justify-between w-[49%]">
                          <Img
                            className="h-16 md:h-auto rounded-[50%] w-16"
                            src="images/img_6346b036bcdef6b.png"
                            alt="6346b036bcdef6b"
                          />
                          <div className="flex flex-col gap-[-1px] items-start justify-start py-3 w-auto">
                            <Text
                              className="text-[15px] text-blue_gray-900 w-auto"
                              size="txtInterMedium15"
                            >
                              Helen Guo
                            </Text>
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtInterMedium14"
                            >
                              @HelenGuo_
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                          <Img
                            className="h-8 w-8"
                            src="images/img_6323a6a5f0aabc9.svg"
                            alt="6323a6a5f0aabcNine"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start p-[3px]">
                        <Text
                          className="leading-[30.00px] text-base text-gray-700 w-full"
                          size="txtInterMedium16"
                        >
                          Been using Amigo for years. Good for re-engagement.
                          And you can get creative with your messaging.
                        </Text>
                      </div>
                    </div>
                    <div className="border-2 border-blue_gray-900 border-solid flex md:flex-1 flex-col items-end justify-start sm:pl-5 pl-[34px] py-[34px] rounded-[15px] w-[29%] md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex flex-row gap-[122.61px] items-center justify-between w-auto">
                            <div className="flex flex-row gap-4 items-center justify-between w-[55%]">
                              <Img
                                className="h-16 md:h-auto rounded-[50%] w-16"
                                src="images/img_6346afeb5316380.png"
                                alt="6346afeb5316380"
                              />
                              <div className="flex flex-col gap-[-1px] items-start justify-start pr-[1.39px] py-3 w-auto">
                                <Text
                                  className="text-[15px] text-blue_gray-900 w-auto"
                                  size="txtInterMedium15"
                                >
                                  Nathan Woods
                                </Text>
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtInterMedium14"
                                >
                                  @HeisNathan
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col h-8 items-center justify-start w-8">
                              <Img
                                className="h-8 w-8"
                                src="images/img_6323a6a5f0aabc9.svg"
                                alt="6323a6a5f0aabcNine_One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[172.88px] w-auto">
                            <div className="flex flex-row gap-4 items-center justify-start w-full">
                              <Img
                                className="h-16 md:h-auto rounded-[50%] w-16"
                                src="images/img_6346afc5b178d5c.png"
                                alt="6346afc5b178d5c"
                              />
                              <div className="flex flex-col gap-[-1px] items-start justify-start pr-[1.13px] py-3 w-auto">
                                <Text
                                  className="text-blue_gray-900 text-sm w-auto"
                                  size="txtInterMedium14Bluegray900"
                                >
                                  Chris Lander
                                </Text>
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtInterMedium14"
                                >
                                  @chris_basis
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1">
                          <Text
                            className="leading-[30.00px] text-base text-gray-700 w-[97%] sm:w-full"
                            size="txtInterMedium16"
                          >
                            We have done some rad winbacks to 360-720 days since
                            purchase that have rocked. Amigo team is one of my
                            favs.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 border-blue_gray-900 border-solid flex md:flex-1 flex-col items-center justify-end p-[34px] sm:px-5 rounded-[15px] w-[29%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[1069px] items-center justify-start mt-20 pr-[5px] py-[5px] w-full">
                        <Text
                          className="sm:flex-1 leading-[30.00px] text-base text-gray-700 w-[77%] sm:w-full"
                          size="txtInterMedium16"
                        >
                          <span className="text-gray-700 font-inter text-left font-medium">
                            Email is a killer channel, but if you layer in
                            postal mail you can really supercharge results. The
                            team at
                          </span>
                          <span className="text-gray-700 font-inter text-left font-bold">
                            {" "}
                            @Amigo
                          </span>
                          <span className="text-gray-700 font-inter text-left font-medium">
                            {" "}
                            will spark ideas for ya.
                          </span>
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[30.00px] text-base text-gray-700 w-[78%] sm:w-full"
                          size="txtInterMedium16"
                        >
                          <>
                            Another +1 for Amigo. Have only done winbacks, but
                            it&#39;s been wonderful. Their team is also top
                            notch. Super helpful every time we set something up.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold mb-0.5 min-w-[254px] mt-16 text-[13px] text-center tracking-[1.20px] uppercase"
                shape="round"
                color="deep_orange_A200"
                size="2xl"
                variant="fill"
              >
                Explore Amigo
              </Button>
            </div>
            <div className="bg-deep_purple-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-24 w-auto md:w-full">
              <div className="flex flex-col items-center justify-start pb-[60px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between sm:pr-5 pr-9 w-full">
                  <Img
                    className="h-[601px] md:h-auto md:mt-0 mt-3 object-cover"
                    src="images/img_6324832a3a111e0.png"
                    alt="6324832a3a111eZero"
                  />
                  <div className="flex sm:flex-1 flex-col gap-9 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[76.00px] max-w-[565px] md:max-w-full md:text-5xl text-[63px] text-blue_gray-900 tracking-[-2.00px]"
                      size="txtInterBold63"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        How{" "}
                      </span>
                      <span className="text-teal-500 font-coveredbyyourgrace text-left font-normal">
                        Amigo
                      </span>
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        {" "}
                      </span>
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        Help You to Increase Presence in Tech Industry
                      </span>
                    </Text>
                    <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[34.00px] max-w-[555px] md:max-w-full text-gray-700 text-xl"
                        size="txtInterMedium20"
                      >
                        The 🚀 Amigo will helps to showcase your project ideas
                        in front of the world. We are open source Tech platform
                        representing your research.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-12 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-0.5 items-start justify-start md:pr-10 sm:pr-5 pr-[62.33px] w-auto">
                          <Text
                            className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[-1.00px] w-auto"
                            size="txtInterBold34"
                          >
                            100%
                          </Text>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Reach
                          </Text>
                        </div>
                        <div className="flex flex-col gap-0.5 items-start justify-start md:pr-10 sm:pr-5 pr-[62.33px] w-auto">
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900 tracking-[-1.00px] w-auto"
                            size="txtInterBold35"
                          >
                            20%
                          </Text>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Attention Rate
                          </Text>
                        </div>
                        <div className="flex flex-col gap-0.5 items-start justify-start sm:pr-5 pr-[38.34px] w-auto">
                          <Text
                            className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[-1.00px] w-auto"
                            size="txtInterBold34"
                          >
                            1000+
                          </Text>
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Students get Offers
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="border-2 border-blue_gray-900 border-solid cursor-pointer font-bold min-w-[173px] text-center text-sm tracking-[1.20px] uppercase"
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="fill"
                      >
                        Read blog
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-deep_orange-A200 flex flex-col items-start justify-start px-10 sm:px-5 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-8 items-start justify-start pl-[35px] md:pr-10 pr-[712px] sm:px-5 w-auto">
                <div className="flex flex-col gap-[17px] items-start justify-start py-[95px] w-auto md:w-full">
                  <Text
                    className="leading-[96.00px] max-w-[509px] md:max-w-full md:text-5xl text-[81px] text-white-A700"
                    size="txtInterBold81"
                  >
                    Express Your Thought.
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="leading-[34.00px] text-white-A700 text-xl"
                      size="txtInterMedium20WhiteA700"
                    >
                      <>
                        New Technology. <br />
                        Startup idea suggestions.
                        <br />
                        Project idea. <br />
                        Technical stuff.
                      </>
                    </Text>
                    <Button
                      className="common-pointer border-2 border-blue_gray-900 border-solid cursor-pointer font-bold min-w-[190px] text-[13px] text-center tracking-[1.20px] uppercase"
                      onClick={() => navigate("/thoughts")}
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    >
                      GET STARTED
                    </Button>
                  </div>
                </div>
                <Img
                  className="h-[546px] sm:h-auto object-cover w-[573px] md:w-full"
                  src="images/img_633f02b776651e7.png"
                  alt="633f02b776651eSeven"
                />
              </div>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto md:px-10 sm:px-5 px-[75px] w-auto md:w-full">
                <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-end py-24 w-full">
                  <Text
                    className="mt-0.5 md:text-5xl text-[68px] text-blue_gray-900 text-center tracking-[-2.00px]"
                    size="txtInterBold68"
                  >
                    <span className="text-blue_gray-900 font-inter font-bold">
                      Latest trends &{" "}
                    </span>
                    <span className="text-teal-500 font-coveredbyyourgrace font-normal">
                      insights
                    </span>
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start pb-1 w-[32%] md:w-full">
                      <Img
                        className="h-[272px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_div_272x410.png"
                        alt="div_One"
                      />
                      <Text
                        className="leading-[36.00px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900 w-[84%] sm:w-full"
                        size="txtInterBold26"
                      >
                        3 Low-Cost Campaigns You Must Run to Win BFCM
                      </Text>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start pb-1 w-[32%] md:w-full">
                      <Img
                        className="h-[272px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_div_1.png"
                        alt="div_Two"
                      />
                      <Text
                        className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-[88%] sm:w-full"
                        size="txtInterBold28"
                      >
                        Postcard Marketing: The Definitive Guide to High ROI
                        [2022]
                      </Text>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start pb-1 w-[32%] md:w-full">
                      <Img
                        className="h-[272px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_div_2.png"
                        alt="div_Three"
                      />
                      <Text
                        className="leading-[36.00px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 w-[88%] sm:w-full"
                        size="txtInterBold25"
                      >
                        The Ultimate Guide to Thank You Notes for Ecommerce
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col h-[642px] md:h-auto items-center justify-end mt-[-0.11px] mx-auto pt-24 md:px-10 sm:px-5 px-[75px] w-auto md:w-full z-[1]">
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
                        Our aim to give knowledge and contribute to make in
                        India project.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                      <Text
                        className="text-[13px] text-blue_gray-900 tracking-[1.50px] uppercase w-auto"
                        size="txtInterBold13Bluegray900"
                      >
                        Company
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          About us
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          Partner program
                        </Text>
                        <a
                          href="javascript:"
                          className="text-base text-blue_gray-900 w-auto"
                        >
                          <Text size="txtInterMedium16Bluegray900">Career</Text>
                        </a>
                        <a
                          href="javascript:"
                          className="text-base text-blue_gray-900 w-auto"
                        >
                          <Text size="txtInterMedium16Bluegray900">
                            Contact us
                          </Text>
                        </a>
                        <a
                          href="javascript:"
                          className="text-base text-blue_gray-900 w-auto"
                        >
                          <Text size="txtInterMedium16Bluegray900">
                            Privacy Policy
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-11 w-auto">
                      <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          Pricing
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          Direct Mail Amigo
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtInterMedium16Bluegray900"
                        >
                          Success stories
                        </Text>
                        <a
                          href="javascript:"
                          className="text-base text-blue_gray-900 w-auto"
                        >
                          <Text size="txtInterMedium16Bluegray900">
                            Terms & conditions
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start pb-5 pr-5 w-[26%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-xs tracking-[1.50px] uppercase"
                        size="txtInterBold12"
                      >
                        Contact
                      </Text>
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-7 md:pr-10 sm:pr-5 pr-[124.02px] w-auto">
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
                      <Text
                        className="mb-[90px] mt-[47px] text-base text-gray-700"
                        size="txtInterMedium16"
                      >
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
                    </div>
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
                        className="border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[83px] rounded-[12px] text-[15px] text-center"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        Login
                      </Button>
                      <Button
                        className="border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[101px] rounded-[12px] text-center text-sm"
                        color="deep_orange_A200"
                        size="lg"
                        variant="fill"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[74px] mr-[37px] mt-5 py-1 w-[93%]">
              <div className="flex flex-col items-start justify-start w-auto">
                <Img
                  className="h-[45px] md:h-auto object-cover w-[165px]"
                  src="images/img_amigobyhorseware.png"
                  alt="amigobyhorsewar_One"
                />
              </div>
              <div className="border-l-2 border-solid border-white-A700_19 flex md:flex-col flex-row gap-[19px] items-center justify-start w-auto md:w-full">
                <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-start sm:pr-5 pr-[37px] w-[69%] md:w-full common-row-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-[10.48px] items-center justify-start p-[19px]">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtInterMedium14Gray90001"
                        >
                          Resources
                        </Text>
                        <Img
                          className="h-1.5 w-2.5"
                          src="images/img_arrowdown_blue_gray_900.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[34px] mt-5 text-blue_gray-900 hover:text-gray-900_01 text-sm"
                    >
                      <Text size="txtInterMedium14Bluegray900">Colleges</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-[8.59px] items-center justify-start ml-10 p-[19px]">
                        <a href="/search"> <Text
                          className="text-[15px] text-gray-900_01 w-auto"
                          size="txtInterMedium15Gray90001"
                        >
                          Projects
                        </Text></a>
                        {/* <Img
                          className="h-1.5 w-2.5"
                          src="images/img_arrowdown_blue_gray_900.svg"
                          alt="arrowdown_One"
                        /> */}
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-10 mt-5 text-blue_gray-900 hover:text-gray-900_01 text-sm"
                    >
                      <Text size="txtInterMedium14Bluegray900">Help</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="common-pointer border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[83px] rounded-[12px] text-[15px] text-center"
                    onClick={() => navigate("/signup")}
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    Login
                  </Button>
                  <Button
                    className="common-pointer border-2 border-blue_gray-900 border-solid cursor-pointer font-medium min-w-[103px] rounded-[12px] text-center text-sm"
                    onClick={() => navigate("/signupone")}
                    color="deep_orange_A200"
                    size="lg"
                    variant="fill"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default AmigoprojectshowcaseplatformPage;
