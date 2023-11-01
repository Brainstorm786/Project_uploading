import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import TaskManagementDashboardCard from "components/TaskManagementDashboardCard";
import TaskManagementDashboardColumngroup202 from "components/TaskManagementDashboardColumngroup202";

import { CloseSVG } from "../../assets/images";

const TaskmanagementdashboardPage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_checkmark.svg"
          alt="checkmark"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_lightbulb.svg"
          alt="lightbulb"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-6 mb-[62px] w-6"
          src="images/img_refresh.svg"
          alt="refresh"
        />
      ),
    },
    {
      label: (
        <Img className="h-7 w-7" src="images/img_settings.svg" alt="settings" />
      ),
    },
  ];
  const [grouptwelvevalue, setGrouptwelvevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-cabin items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <Sidebar className="!sticky !w-[131px] bg-white-A700_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[20px] top-[0]">
            <Img
              className="h-[93px] md:h-auto mt-5 mx-auto object-cover w-[78%]"
              src="images/img_preview1.png"
              alt="previewOne"
            />
            <Button
              className="flex items-center justify-center md:ml-[0] ml-[30px] mr-[39px] mt-[73px] rounded-[32px] w-[48%]"
              color="purple_400"
              size="xl"
              variant="fill"
            >
              <Img className="h-7" src="images/img_clock.svg" alt="clock" />
            </Button>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  flexDirection: "column",
                  marginTop: "2px",
                  paddingBottom: "62px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[368px] mt-16 pl-[47px] pr-14 md:px-10 sm:px-5 w-[22%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
            <div className="md:h-[307px] h-[311px] relative w-full">
              <div className="absolute bg-white-A700_01 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[29px] sm:px-5 rounded-[20px] w-full">
                <Text
                  className="md:ml-[0] ml-[5px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01"
                  size="txtPoppinsSemiBold40"
                >
                  Teacher’s Desk
                </Text>
                <Text
                  className="italic md:ml-[0] ml-[11px] mt-[5px] text-blue_gray-900_01 text-lg"
                  size="txtCabinItalic18"
                >
                  Check projects comes for validation{" "}
                </Text>
                <Button
                  className="cursor-pointer font-cabin leading-[normal] mb-2 min-w-[180px] md:ml-[0] ml-[5px] mt-[19px] rounded-[10px] text-base text-center"
                  color="purple_400"
                  size="md"
                  variant="fill"
                >
                  Check Projects
                </Button>
              </div>
              <Input
                name="groupTwelve"
                placeholder="Search"
                value={grouptwelvevalue}
                onChange={(e) => setGrouptwelvevalue(e)}
                className="!placeholder:text-black-900_66 !text-black-900_66 leading-[normal] p-0 text-base text-center w-full"
                wrapClassName="flex left-[0] rounded-[20px] top-[1%] w-[26%]"
                suffix={
                  grouptwelvevalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-[18px] ml-[35px] left-[4%] absolute my-px inset-y-[0]"
                      onClick={() => setGrouptwelvevalue("")}
                      fillColor="#00000066"
                      height={18}
                      width={18}
                      viewBox="0 0 18 18"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-[18px] ml-[35px] left-[4%] absolute my-px inset-y-[0]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                color="white_A700_01"
              ></Input>
              <Img
                className="absolute h-[307px] inset-y-[0] my-auto right-[8%]"
                src="images/img_timemanagementamico.svg"
                alt="timemanagementa"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <TaskManagementDashboardCard
                className="bg-white-A700_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[22px] w-full"
                foodwebsite="Food Website"
                foodchainprojec="Food chain project"
                ninety="90%"
              />
              <div className="bg-white-A700_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[22px] w-full">
                <div className="flex flex-col items-center justify-start mb-1.5 w-[98%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-[3px] text-base text-blue_gray-100_01 text-center"
                      size="txtCabinBold16"
                    >
                      Nov 26, 2022
                    </Text>
                    <Img
                      className="h-5 mb-[3px] w-5"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[13px] w-[89%] md:w-full">
                    <Text
                      className="text-blue_gray-900_01 text-center text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Mobile App
                    </Text>
                    <Text
                      className="italic md:ml-[0] ml-[5px] text-base text-blue_gray-900_01 text-center"
                      size="txtCabinItalic16"
                    >
                      Shopping
                    </Text>
                    <div className="md:h-[19px] h-[9px] ml-0.5 md:ml-[0] mt-2.5 relative w-full">
                      <Img
                        className="absolute h-[9px] inset-[0] justify-center m-auto"
                        src="images/img_group1000002307.svg"
                        alt="group1000002307"
                      />
                      <Img
                        className="absolute h-[9px] inset-y-[0] left-[0] my-auto"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                    </div>
                    <div className="flex flex-row font-cabin items-start justify-between mt-[11px] w-full">
                      <Text
                        className="text-blue_gray-900_01 text-sm"
                        size="txtCabinRegular14"
                      >
                        Unique
                      </Text>
                      <Text
                        className="text-blue_gray-900_01 text-right text-sm"
                        size="txtCabinRegular14"
                      >
                        30%
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-100_7f h-0.5 mt-6 w-full" />
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[9px] w-[98%] md:w-full">
                    <div className="flex relative w-[15%]">
                      <Img
                        className="h-[25px] my-auto rounded-[50%] w-[25px]"
                        src="images/img_ellipse11.png"
                        alt="ellipseNine"
                      />
                      <Img
                        className="h-[25px] ml-[-12px] my-auto rounded-[50%] w-[25px] z-[1]"
                        src="images/img_ellipse11.png"
                        alt="ellipseTen"
                      />
                    </div>
                    <div className="bg-green-400 h-[25px] ml-5 rounded-[12px] w-[25px]"></div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[93px] ml-[94px] rounded-[11px] text-center text-xs"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                    >
                      Status
                    </Button>
                  </div>
                </div>
              </div>
              <TaskManagementDashboardCard
                className="bg-white-A700_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[22px] w-full"
                group1000002307="images/img_group1000002307.svg"
              />
            </List>
            <div className="flex md:flex-col flex-row font-poppins gap-[19px] items-center justify-between w-[99%] md:w-full">
              <div className="h-72 sm:h-[365px] md:mt-0 mt-[5px] relative w-[68%] md:w-full">
                <div className="h-72 sm:h-[365px] m-auto w-full">
                  <div className="h-72 sm:h-[304px] m-auto w-full">
                    <div className="h-72 m-auto w-full">
                      <div className="absolute bg-white-A700_01 flex flex-row gap-2 h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[20px] w-full">
                        <div className="h-[212px] md:h-[251px] mb-7 ml-1 mt-[11px] relative w-[2%]">
                          <Line className="absolute bg-gray-200_03 h-[212px] inset-y-[0] left-[29%] my-auto w-px" />
                          <Line className="absolute bg-gray-200_03 h-px inset-x-[0] mx-auto top-[10%] w-full" />
                        </div>
                        <Text
                          className="text-blue_gray-900_01 text-center text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Number of projects Arrived
                        </Text>
                      </div>
                      <Line className="absolute bg-gray-200_03 bottom-[16%] h-px inset-x-[0] mx-auto rotate-[-180deg] w-[97%]" />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col h-[186px] inset-x-[0] items-center justify-start mx-auto pb-2 pr-2 w-[89%]"
                      style={{
                        backgroundImage: "url('images/img_group21.png')",
                      }}
                    >
                      <div className="flex flex-col gap-12 justify-start mb-[5px] w-full">
                        <Img
                          className="h-[113px]"
                          src="images/img_vector5.svg"
                          alt="vectorFive"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[79%] md:w-full">
                          <Line className="bg-gray-200_03 h-2.5 rotate-[-90deg] w-px" />
                          <Line className="bg-gray-200_03 h-2.5 sm:ml-[0] ml-[107px] rotate-[-90deg] w-px" />
                          <Line className="bg-gray-200_03 h-2.5 sm:ml-[0] ml-[107px] rotate-[-90deg] w-px" />
                          <Line className="bg-gray-200_03 h-2.5 sm:ml-[0] ml-[107px] rotate-[-90deg] w-px" />
                          <Line className="bg-gray-200_03 h-2.5 sm:ml-[0] ml-[107px] rotate-[-90deg] w-px" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex sm:flex-col flex-row font-cabin gap-3.5 inset-x-[0] items-center justify-start mx-auto w-[90%]">
                    <div className="flex flex-col gap-10 items-center justify-start w-[2%] sm:w-full">
                      <Line className="bg-gray-200_03 h-px w-full" />
                      <Line className="bg-gray-200_03 h-px w-full" />
                      <Line className="bg-gray-200_03 h-px w-full" />
                      <Line className="bg-gray-200_03 h-px w-full" />
                    </div>
                    <div className="flex flex-col gap-2.5 justify-start w-[97%] sm:w-full">
                      <Line className="bg-gray-200_03 h-[205px] md:ml-[0] ml-[480px] mr-[71px] w-px" />
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="italic text-[9px] text-center text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          Jan
                        </Text>
                        <Text
                          className="italic text-[9px] text-center text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          Feb
                        </Text>
                        <Text
                          className="italic text-[9px] text-center text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          March
                        </Text>
                        <Text
                          className="italic text-[9px] text-center text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          April
                        </Text>
                        <Text
                          className="italic text-[9px] text-center text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          May
                        </Text>
                        <Text
                          className="italic text-[9px] text-gray-500_01"
                          size="txtCabinItalic9"
                        >
                          June
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[190px] h-max inset-y-[0] items-start justify-start my-auto right-[17%] w-[2%]">
                  <div className="bg-white-A700 h-[11px] outline outline-[1px] outline-deep_purple-A200 rounded-[5px] w-[11px]"></div>
                  <div className="bg-white-A700 h-1.5 md:ml-[0] ml-[3px] outline outline-[1px] outline-deep_purple-A200 rounded-[50%] w-1.5"></div>
                </div>
              </div>
              <div className="bg-white-A700_01 flex flex-col gap-[17px] items-center justify-start mb-[5px] p-[9px] rounded-[20px] w-[31%] md:w-full">
                <Text
                  className="text-blue_gray-900_01 text-center text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Students
                </Text>
                <div className="flex flex-col font-cabin items-start justify-start mb-2 w-[88%] md:w-full">
                  <div className="bg-white-A700_01 flex flex-col items-start justify-start p-1 rounded-[10px] shadow-bs6 w-full">
                    <div className="flex flex-row gap-4 items-center justify-start mb-[3px] md:ml-[0] ml-[15px] w-[71%] md:w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover w-[38px]"
                        src="images/img_group71.png"
                        alt="groupSeventyOne"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-blue_gray-900_01 text-shadow-ts1"
                          size="txtCabinRegular16"
                        >
                          Ali Ahmad
                        </Text>
                        <Text
                          className="text-blue_gray-900_7f text-shadow-ts1 text-xs"
                          size="txtCabinRegular12"
                        >
                          Branch
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-center mt-2.5 w-full"
                    orientation="vertical"
                  >
                    <TaskManagementDashboardColumngroup202
                      className="bg-white-A700_01 flex flex-1 flex-col items-start justify-end p-[3px] rounded-[10px] w-full"
                      userimage="images/img_group202.png"
                    />
                    <TaskManagementDashboardColumngroup202 className="bg-white-A700_01 flex flex-1 flex-col items-start justify-end p-[5px] rounded-[10px] w-full" />
                  </List>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[93px] md:ml-[0] ml-[68px] mt-3.5 rounded-[11px] text-center text-xs"
                    color="purple_100"
                    size="xs"
                    variant="fill"
                  >
                    See all
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[1001px] md:h-[516px] md:px-5 relative w-full">
            <div className="absolute bg-white-A700_01 md:h-[516px] h-[982px] inset-[0] justify-center m-auto pb-[30px] sm:px-5 px-[30px] rounded-[20px] w-full">
              <Line className="bg-blue_gray-100_7f h-0.5 ml-auto mr-[27px] mt-[123px] w-[66%]" />
              <div className="absolute bg-gray-100_03 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[18px] rounded-[20px] top-[0] w-[84%]">
                <div className="flex flex-col gap-[21px] justify-start mb-10 mt-[30px] w-[98%] md:w-full">
                  <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[31px] w-[63%] md:w-full">
                    <Img
                      className="h-[51px] md:h-auto object-cover w-[51px]"
                      src="images/img_group212.png"
                      alt="group212"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-blue_gray-900_01 text-center text-shadow-ts1"
                        size="txtCabinBold16Bluegray90001"
                      >
                        Teacher Name
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] text-blue_gray-900_01 text-center text-shadow-ts1 text-xs"
                        size="txtCabinRegular12Bluegray90001"
                      >
                        College Name
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-blue_gray-100_7f h-0.5 md:ml-[0] ml-[5px] w-[97%]" />
                    <div className="md:h-[148px] h-[187px] mt-6 p-[11px] relative w-full">
                      <div className="absolute md:h-[124px] h-[158px] inset-[0] justify-center m-auto w-[83%]">
                        <div className="md:h-[124px] h-[158px] m-auto w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="md:h-[123px] h-[157px] relative w-full">
                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                                  <div className="flex flex-col items-end justify-start w-[65%]">
                                    <div className="flex flex-col items-center justify-start w-[16%] md:w-full">
                                      <div className="flex flex-row items-start justify-evenly w-full">
                                        <div className="md:h-0.5 h-px relative w-px">
                                          <div className="absolute bottom-[0] flex flex-col h-px items-start justify-start right-[0] w-px">
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_One"
                                            />
                                          </div>
                                          <div className="absolute bg-gray-300_02 h-px inset-y-[0] left-[0] my-auto w-px"></div>
                                        </div>
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Three"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Four"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Five"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Six"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Seven"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Eight"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Nine"
                                        />
                                        <div className="flex flex-col items-end justify-start w-1/2">
                                          <div className="flex flex-row items-start justify-evenly w-full">
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Ten"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Eleven"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Twelve"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Thirteen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Fourteen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Fifteen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Sixteen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Seventeen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_Eighteen"
                                            />
                                            <div className="flex h-px justify-end relative w-px">
                                              <Img
                                                className="h-px mt-auto w-px"
                                                src="images/img_vector_gray_300_02_1x1.svg"
                                                alt="vector_Nineteen"
                                              />
                                              <div className="absolute bg-gray-300_02 h-px inset-[0] justify-center m-auto w-px"></div>
                                            </div>
                                          </div>
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_TwentyOne"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyTwo"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyThree"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyFour"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyFive"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentySix"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentySeven"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyEight"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_TwentyNine"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_Thirty"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_ThirtyOne"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[19px] items-start justify-between w-[91%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_ThirtyTwo"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_ThirtyThree"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-evenly w-full">
                                      <div className="flex flex-col justify-start w-[92%]">
                                        <Img
                                          className="h-px md:ml-[0] ml-[124px] w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_ThirtyFour"
                                        />
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <div className="h-[55px] relative w-[31%]">
                                            <Img
                                              className="absolute h-[55px] inset-y-[0] my-auto right-[0]"
                                              src="images/img_computer.svg"
                                              alt="computer"
                                            />
                                            <div className="absolute bg-white-A700 h-[55px] inset-y-[0] left-[0] my-auto rotate-[-180deg] w-[93%]"></div>
                                            <div
                                              className="absolute bg-cover bg-no-repeat md:h-[43px] h-[55px] inset-y-[0] left-[0] my-auto w-[93%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group22.svg')",
                                              }}
                                            >
                                              <div className="absolute h-[43px] inset-[0] justify-center m-auto w-[76%]">
                                                <div className="bg-white-A700 h-[43px] m-auto w-full"></div>
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-1.5 w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group24.svg')",
                                                  }}
                                                >
                                                  <Img
                                                    className="h-3.5 mb-[11px] mt-[5px] w-3.5"
                                                    src="images/img_send.svg"
                                                    alt="send"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute bottom-[0] h-[5px] left-[0] w-1"
                                                src="images/img_vector_gray_300_02_5x4.svg"
                                                alt="vector_ThirtySeven"
                                              />
                                              <Img
                                                className="absolute h-[5px] left-[0] top-[0] w-1"
                                                src="images/img_vector_gray_300_02.svg"
                                                alt="vector_ThirtyEight"
                                              />
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-1.5 items-center justify-start right-[0] top-[0] w-[11%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group25.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-1.5"
                                                  src="images/img_vector_gray_300_02.svg"
                                                  alt="vector_ThirtyNine"
                                                />
                                              </div>
                                              <Img
                                                className="absolute bottom-[0] h-[5px] right-[0] w-1"
                                                src="images/img_vector_gray_300_02.svg"
                                                alt="vector_Forty"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="h-[7px]"
                                            src="images/img_vector_blue_gray_900_02.svg"
                                            alt="vector_FortyOne"
                                          />
                                          <div className="flex relative w-[38%]">
                                            <div className="md:h-[33px] h-[34px] m-auto w-full">
                                              <div className="bg-white-A700 h-[33px] m-auto w-full"></div>
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto pb-0.5 w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group23.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_gray_300_02.svg"
                                                  alt="vector_FortyThree"
                                                />
                                                <div className="md:h-7 h-[29px] relative w-full">
                                                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                    <div className="flex flex-col items-start justify-start w-full">
                                                      <div className="flex flex-row items-center justify-start w-[7%] md:w-full">
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_1x1.svg"
                                                          alt="vector_FortyFour"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_1x1.svg"
                                                          alt="vector_FortyFive"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_1x1.svg"
                                                          alt="vector_FortySix"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="h-px"
                                                        src="images/img_vector_gray_300_02.svg"
                                                        alt="vector_FortySeven"
                                                      />
                                                      <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] mt-[3px] w-[90%] md:w-full">
                                                        <div className="bg-gray-300_02 h-[13px] w-[13px]"></div>
                                                        <div className="flex flex-col items-start justify-start w-[53%]">
                                                          <Img
                                                            className="h-px"
                                                            src="images/img_vector_gray_300_02.svg"
                                                            alt="vector_FortyNine"
                                                          />
                                                          <Img
                                                            className="h-px mt-0.5"
                                                            src="images/img_vector_gray_300_02.svg"
                                                            alt="vector_Fifty"
                                                          />
                                                          <Img
                                                            className="h-px mt-0.5"
                                                            src="images/img_vector_gray_300_02.svg"
                                                            alt="vector_FiftyOne"
                                                          />
                                                          <Img
                                                            className="h-px mt-0.5"
                                                            src="images/img_vector_gray_300_02_1x13.svg"
                                                            alt="vector_FiftyTwo"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_gray_300_02.svg"
                                                          alt="vector_FiftyThree"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_gray_300_02.svg"
                                                          alt="vector_FiftyFour"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_gray_300_02.svg"
                                                          alt="vector_FiftyFive"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_gray_300_02.svg"
                                                          alt="vector_FiftySix"
                                                        />
                                                        <Img
                                                          className="h-px w-px"
                                                          src="images/img_vector_gray_300_02.svg"
                                                          alt="vector_FiftySeven"
                                                        />
                                                      </div>
                                                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[5px] mt-1 w-4/5 md:w-full">
                                                        <div className="bg-gray-300_02 h-1.5 w-1.5"></div>
                                                        <div className="bg-gray-300_02 h-1.5 w-1.5"></div>
                                                        <div className="bg-gray-300_02 h-1.5 w-1.5"></div>
                                                        <div className="bg-gray-300_02 h-1.5 w-1.5"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute flex flex-col items-center justify-start right-[8%] top-[0] w-[3%]">
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyTwo"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyThree"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyFour"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyFive"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtySix"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtySeven"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyEight"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_gray_300_02.svg"
                                                      alt="vector_SixtyNine"
                                                    />
                                                    <div className="bg-gray-300_02 h-px w-px"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              className="h-px ml-[-0.09px] mt-[11px] w-px z-[1]"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_SeventyOne"
                                            />
                                          </div>
                                          <Img
                                            className="h-px mt-[11px] w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyTwo"
                                          />
                                          <Img
                                            className="h-px mt-[11px] w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyThree"
                                          />
                                          <Img
                                            className="h-px mt-[11px] w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyFour"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-end justify-start w-[11px]">
                                        <div className="flex flex-col items-center justify-start w-[10%] md:w-full">
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyFive"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventySix"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventySeven"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyEight"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_SeventyNine"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_Eighty"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyOne"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyTwo"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyThree"
                                          />
                                        </div>
                                        <div className="flex flex-row items-start justify-evenly w-full">
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyFour"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyFive"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightySix"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightySeven"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyEight"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_EightyNine"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_Ninety"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_NinetyOne"
                                          />
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_NinetyTwo"
                                          />
                                          <div className="h-0.5 relative w-px">
                                            <div className="absolute flex flex-col h-px items-center justify-start left-[0] top-[0] w-px">
                                              <div className="flex flex-col h-px items-start justify-start w-px">
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_gray_300_02.svg"
                                                  alt="vector_NinetyThree"
                                                />
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_1.svg"
                                                  alt="vector_NinetyFour"
                                                />
                                              </div>
                                            </div>
                                            <div className="absolute bg-gray-300_02 bottom-[0] h-px inset-x-[0] mx-auto w-px"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[41px] items-end justify-start mt-1.5 w-[29%]">
                                    <div className="flex flex-row items-end justify-between mr-[3px] w-[96%] md:w-full">
                                      <Img
                                        className="h-[25px]"
                                        src="images/img_cut.svg"
                                        alt="cut"
                                      />
                                      <Img
                                        className="h-[15px] mt-[9px]"
                                        src="images/img_volume.svg"
                                        alt="volume"
                                      />
                                      <Img
                                        className="h-2 mb-0.5 mt-3.5"
                                        src="images/img_vector_gray_200_02.svg"
                                        alt="vector_NinetySix"
                                      />
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-[37px] md:w-full">
                                      <div className="flex flex-row items-start justify-evenly w-full">
                                        <div className="flex h-0.5 justify-end relative w-0.5">
                                          <Img
                                            className="h-px mt-auto mx-auto w-px"
                                            src="images/img_vector_gray_300_02_1x1.svg"
                                            alt="vector_NinetySeven"
                                          />
                                          <div className="absolute bg-gray-300_02 h-0.5 inset-[0] justify-center m-auto w-0.5"></div>
                                        </div>
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_NinetyNine"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundred"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredOne"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwo"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredThree"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFour"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFive"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredSix"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredSeven"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredEight"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredNine"
                                        />
                                        <div className="md:h-0.5 h-1 relative w-[3px]">
                                          <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-px">
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredTen"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredEleven"
                                            />
                                          </div>
                                          <div className="absolute bg-gray-300_02 h-0.5 right-[0] top-[0] w-0.5"></div>
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredThirteen"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFourteen"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFifteen"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredSixteen"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredSeventeen"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredEighteen"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredNineteen"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwenty"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyOne"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyTwo"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyThree"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyFour"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyFive"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentySix"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentySeven"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyEight"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredTwentyNine"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredThirty"
                                        />
                                      </div>
                                      <div className="flex flex-row gap-[33px] items-start justify-between w-[92%] md:w-full">
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredThirtyOne"
                                        />
                                        <Img
                                          className="h-px w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredThirtyTwo"
                                        />
                                      </div>
                                      <div className="flex flex-row items-start justify-evenly w-full">
                                        <div className="flex flex-col items-start justify-start w-[57%]">
                                          <Img
                                            className="h-px w-px"
                                            src="images/img_vector_gray_300_02.svg"
                                            alt="vector_OneHundredThirtyThree"
                                          />
                                          <div className="flex flex-row items-center justify-evenly w-full">
                                            <div className="h-0.5 relative w-0.5">
                                              <Img
                                                className="h-px ml-auto w-px"
                                                src="images/img_vector_2.svg"
                                                alt="vector_OneHundredThirtyFour"
                                              />
                                              <div className="absolute bg-gray-300_02 h-0.5 inset-[0] justify-center m-auto w-0.5"></div>
                                            </div>
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredThirtySix"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredThirtySeven"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredThirtyEight"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredThirtyNine"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredForty"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredFortyOne"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_300_02.svg"
                                              alt="vector_OneHundredFortyTwo"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="h-px mt-[3px] w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFortyThree"
                                        />
                                        <Img
                                          className="h-px mt-[3px] w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFortyFour"
                                        />
                                        <Img
                                          className="h-px mt-[3px] w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFortyFive"
                                        />
                                        <Img
                                          className="h-px mt-[3px] w-px"
                                          src="images/img_vector_gray_300_02.svg"
                                          alt="vector_OneHundredFortySix"
                                        />
                                        <div className="md:h-0.5 h-[3px] relative w-0.5">
                                          <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-px">
                                            <div className="flex flex-col items-start justify-start md:w-full w-px">
                                              <Img
                                                className="h-px w-px"
                                                src="images/img_vector_gray_300_02.svg"
                                                alt="vector_OneHundredFortySeven"
                                              />
                                              <Img
                                                className="h-px w-px"
                                                src="images/img_vector_gray_300_02.svg"
                                                alt="vector_OneHundredFortyEight"
                                              />
                                            </div>
                                          </div>
                                          <div className="absolute bg-gray-300_02 bottom-[0] h-0.5 right-[0] w-0.5"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[123px] right-[0]"
                                src="images/img_freepikcharac.svg"
                                alt="freepikcharac"
                              />
                            </div>
                            <Img
                              className="h-px"
                              src="images/img_freepiktableinject59.svg"
                              alt="freepiktableinj"
                            />
                          </div>
                          <div className="absolute bottom-[0] h-[126px] md:h-[73px] inset-x-[0] mx-auto w-[26%]">
                            <div className="h-[126px] md:h-[73px] m-auto w-full">
                              <div className="h-[126px] md:h-[73px] m-auto w-full">
                                <div className="h-[126px] md:h-[73px] m-auto w-full">
                                  <div className="h-[126px] md:h-[73px] m-auto w-full">
                                    <div className="absolute h-[126px] md:h-[73px] inset-[0] justify-center m-auto w-full">
                                      <div className="h-[126px] md:h-[73px] m-auto w-full">
                                        <div className="absolute h-[124px] md:h-[73px] inset-[0] justify-center m-auto w-full">
                                          <div className="h-[124px] md:h-[73px] m-auto w-full">
                                            <div className="h-[124px] md:h-[73px] m-auto w-full">
                                              <div className="h-[124px] md:h-[73px] m-auto w-full">
                                                <div className="h-[124px] md:h-[73px] m-auto w-full">
                                                  <div className="h-[124px] md:h-[73px] m-auto w-full">
                                                    <div className="h-[124px] md:h-[73px] m-auto w-full">
                                                      <div className="absolute bottom-[0] h-[118px] md:h-[73px] inset-x-[0] mx-auto w-full">
                                                        <div className="absolute bottom-[0] flex flex-col gap-5 justify-start left-[0] w-[88%]">
                                                          <div
                                                            className="bg-cover bg-no-repeat h-[38px] relative w-[26%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group27.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              className="h-[5px] mb-[-2.49px] ml-1.5 z-[1]"
                                                              src="images/img_vector_deep_orange_300_01_5x1.svg"
                                                              alt="vector_OneHundredFiftyThree"
                                                            />
                                                            <Img
                                                              className="h-0.5 mb-[undefinedpx] mt-[5px] w-0.5 z-[1]"
                                                              src="images/img_vector_deep_orange_300_01_2x2.svg"
                                                              alt="vector_OneHundredFiftyFour"
                                                            />
                                                            <div className="flex flex-col items-start justify-start mt-0.5 w-[7px]">
                                                              <div
                                                                className="bg-cover bg-no-repeat flex flex-row h-0.5 items-center justify-evenly w-[58%] md:w-full"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group33.svg')",
                                                                }}
                                                              >
                                                                <Img
                                                                  className="h-px w-px"
                                                                  src="images/img_vector_deep_orange_300_01.svg"
                                                                  alt="vector_OneHundredFifty"
                                                                />
                                                              </div>
                                                              <div className="h-[5px] md:ml-[0] ml-[3px] relative w-1">
                                                                <Img
                                                                  className="h-[5px] m-auto w-1"
                                                                  src="images/img_vector_deep_orange_200_01.svg"
                                                                  alt="vector_OneHundredFiftyOne"
                                                                />
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto pr-0.5 pt-0.5 w-1"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group32.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    className="h-0.5 w-px"
                                                                    src="images/img_vector_deep_orange_300_01_2x1.svg"
                                                                    alt="vector_OneHundredFiftyTwo"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <Img
                                                            className="h-11 ml-3.5 md:ml-[0]"
                                                            src="images/img_trash.svg"
                                                            alt="trash"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute h-[3px] left-[0] top-[18%]"
                                                          src="images/img_vector_deep_orange_300_01_3x1.svg"
                                                          alt="vector_OneHundredFiftyFive"
                                                        />
                                                        <Img
                                                          className="absolute h-[47px] right-[0] top-1/4"
                                                          src="images/img_vector.svg"
                                                          alt="vector_OneHundredFiftySix"
                                                        />
                                                        <Img
                                                          className="absolute h-5 right-[19%] top-[0]"
                                                          src="images/img_bag.svg"
                                                          alt="bag"
                                                        />
                                                        <Img
                                                          className="absolute h-[23px] inset-x-[0] mx-auto top-[0]"
                                                          src="images/img_volume_blue_gray_900_02.svg"
                                                          alt="volume_One"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="absolute h-[15px] right-[23%] top-[0]"
                                                        src="images/img_user_blue_gray_900_02.svg"
                                                        alt="user"
                                                      />
                                                    </div>
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[33px] items-start justify-center right-[28%] top-[4%] w-[29%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group28.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        className="h-px mt-1 w-0.5"
                                                        src="images/img_vector_blue_gray_900_02_1x2.svg"
                                                        alt="vector_OneHundredFiftySeven"
                                                      />
                                                      <div className="h-[17px] mb-2 relative w-[63%]">
                                                        <Img
                                                          className="h-0.5 mb-[undefinedpx] mt-auto mx-auto w-0.5 z-[1]"
                                                          src="images/img_vector_blue_gray_900_02_1x2.svg"
                                                          alt="vector_OneHundredSixtyFive"
                                                        />
                                                        <Img
                                                          className="h-px mb-[-0.03px] ml-auto z-[1]"
                                                          src="images/img_vector_blue_gray_900_02_1x2.svg"
                                                          alt="vector_OneHundredSixtySix"
                                                        />
                                                        <div className="h-4 md:h-[7px] mt-auto mx-auto w-full">
                                                          <div className="absolute h-1.5 left-[0] top-[0] w-2/5">
                                                            <div className="absolute flex flex-col h-0.5 items-center justify-start left-[0] top-[0] w-0.5">
                                                              <div className="flex flex-col h-0.5 items-start justify-start w-0.5">
                                                                <Img
                                                                  className="h-px w-0.5"
                                                                  src="images/img_vector_blue_gray_900_02_1x2.svg"
                                                                  alt="vector_OneHundredFiftyEight"
                                                                />
                                                                <Img
                                                                  className="h-px w-px"
                                                                  src="images/img_vector_blue_gray_900_02_1x1.svg"
                                                                  alt="vector_OneHundredFiftyNine"
                                                                />
                                                              </div>
                                                            </div>
                                                            <Img
                                                              className="absolute h-1.5 inset-y-[0] my-auto right-[0]"
                                                              src="images/img_vector_blue_gray_900_02_6x2.svg"
                                                              alt="vector_OneHundredSixty"
                                                            />
                                                          </div>
                                                          <div className="absolute flex flex-col h-0.5 items-center justify-start right-[0] top-[0] w-0.5">
                                                            <Img
                                                              className="h-px w-0.5"
                                                              src="images/img_vector_blue_gray_900_02_1x2.svg"
                                                              alt="vector_OneHundredSixtyOne"
                                                            />
                                                            <Img
                                                              className="h-px w-px"
                                                              src="images/img_vector_blue_gray_900_02_1x1.svg"
                                                              alt="vector_OneHundredSixtyTwo"
                                                            />
                                                          </div>
                                                          <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-3/5">
                                                            <Img
                                                              className="h-px w-0.5"
                                                              src="images/img_vector_deep_orange_300.svg"
                                                              alt="vector_OneHundredSixtyThree"
                                                            />
                                                            <Img
                                                              className="h-[3px] mt-[3px]"
                                                              src="images/img_vector_deep_orange_300_01_3x6.svg"
                                                              alt="vector_OneHundredSixtyFour"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute flex flex-row items-end justify-center right-[7%] top-[3%] w-[43%]">
                                                    <Img
                                                      className="h-[21px]"
                                                      src="images/img_question.svg"
                                                      alt="question"
                                                    />
                                                    <Img
                                                      className="h-2.5 my-[5px] w-[9px]"
                                                      src="images/img_volume_blue_gray_900_02.svg"
                                                      alt="volume_Two"
                                                    />
                                                  </div>
                                                </div>
                                                <Img
                                                  className="absolute h-[9px] right-[19%] top-[10%]"
                                                  src="images/img_vector_blue_gray_700_9x1.svg"
                                                  alt="vector_OneHundredSixtySeven"
                                                />
                                              </div>
                                              <Img
                                                className="absolute h-px right-[7%] top-[12%]"
                                                src="images/img_vector_blue_gray_700_1x6.svg"
                                                alt="vector_OneHundredSixtyEight"
                                              />
                                            </div>
                                            <div className="absolute flex flex-row items-end justify-center right-[11%] top-[2%] w-[22px]">
                                              <Img
                                                className="h-[21px]"
                                                src="images/img_question_blue_gray_700.svg"
                                                alt="question_One"
                                              />
                                              <Img
                                                className="h-[3px] mb-1 mt-3.5"
                                                src="images/img_vector_blue_gray_700_1x6.svg"
                                                alt="vector_OneHundredSixtyNine"
                                              />
                                            </div>
                                          </div>
                                          <div className="absolute flex flex-col gap-6 items-end justify-start left-[4%] top-[0] w-[81%]">
                                            <Img
                                              className="h-2"
                                              src="images/img_vector_blue_gray_700.svg"
                                              alt="vector_OneHundredSeventy"
                                            />
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[42px] items-end justify-start w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group26.svg')",
                                              }}
                                            >
                                              <div className="flex flex-row items-start justify-evenly mb-1.5 mt-[11px] w-[74%] md:w-full">
                                                <Img
                                                  className="h-[7px] mt-[3px]"
                                                  src="images/img_vector_blue_gray_900_02_7x1.svg"
                                                  alt="vector_OneHundredSeventyOne"
                                                />
                                                <Img
                                                  className="h-2.5"
                                                  src="images/img_vector_blue_gray_900_02_10x2.svg"
                                                  alt="vector_OneHundredSeventyTwo"
                                                />
                                                <Line className="bg-blue_gray-900_02 h-[19px] w-[3px]" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat h-[13px] md:h-[7px] left-[0] pr-0.5 top-[0] w-3"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group30.svg')",
                                          }}
                                        >
                                          <Img
                                            className="absolute bottom-[0] h-[7px] inset-x-[0] mx-auto w-1.5"
                                            src="images/img_location.svg"
                                            alt="location"
                                          />
                                          <Img
                                            className="absolute h-[7px] left-[0] top-[0]"
                                            src="images/img_vector_white_a700.svg"
                                            alt="vector_OneHundredSeventyFour"
                                          />
                                          <Img
                                            className="absolute h-px inset-x-[0] mx-auto top-[0] w-px"
                                            src="images/img_vector_white_a700_1x1.svg"
                                            alt="vector_OneHundredSeventyFive"
                                          />
                                        </div>
                                        <div className="absolute flex flex-col items-center justify-start left-[9%] top-[11%] w-[9%]">
                                          <Img
                                            className="h-px"
                                            src="images/img_vector_blue_gray_900_02_1x5.svg"
                                            alt="vector_OneHundredSeventySix"
                                          />
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-0.5 items-center justify-start w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group31.svg')",
                                            }}
                                          >
                                            <div className="flex flex-col items-center justify-start w-3/5 md:w-full">
                                              <Img
                                                className="h-px"
                                                src="images/img_vector_blue_gray_700_1x3.svg"
                                                alt="vector_OneHundredSeventySeven"
                                              />
                                              <Img
                                                className="h-px"
                                                src="images/img_vector_1x3.svg"
                                                alt="vector_OneHundredSeventyEight"
                                              />
                                              <Img
                                                className="h-px w-0.5"
                                                src="images/img_vector_blue_gray_700_1x2.svg"
                                                alt="vector_OneHundredSeventyNine"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute bottom-[43%] h-0.5 right-[11%] w-[3px]"
                                          src="images/img_vector_blue_gray_900_02_7x1.svg"
                                          alt="vector_OneHundredEighty"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[42%] h-0.5 right-[14%] w-0.5"
                                        src="images/img_vector_blue_gray_900_02_2x2.svg"
                                        alt="vector_OneHundredEightyOne"
                                      />
                                    </div>
                                    <Img
                                      className="absolute bottom-[42%] h-0.5 right-[18%]"
                                      src="images/img_freepiktableinject59.svg"
                                      alt="vector_OneHundredEightyTwo"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[33%] flex flex-col h-[26px] inset-x-[0] items-end justify-start mx-auto px-[7px] w-[79%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group29.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row gap-3.5 items-center justify-between w-[68%] md:w-full">
                                        <Img
                                          className="h-[3px] w-[3px]"
                                          src="images/img_vector_gray_50_01.svg"
                                          alt="vector_OneHundredEightyThree"
                                        />
                                        <Line className="bg-blue_gray-700 h-[25px] w-1" />
                                      </div>
                                    </div>
                                  </div>
                                  <Line className="absolute bg-blue_gray-700 bottom-[33%] h-[25px] right-1/4 w-1" />
                                </div>
                                <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-auto top-1/4 w-[81%]">
                                  <Img
                                    className="h-[5px]"
                                    src="images/img_vector_purple_400.svg"
                                    alt="vector_OneHundredEightySix"
                                  />
                                  <Img
                                    className="h-px mr-3.5 mt-5"
                                    src="images/img_vector_blue_gray_700_1x32.svg"
                                    alt="vector_OneHundredEightySeven"
                                  />
                                  <Img
                                    className="h-1 mt-2.5 w-[5px]"
                                    src="images/img_vector_black_900_01.svg"
                                    alt="vector_OneHundredEightyEight"
                                  />
                                  <div className="flex flex-row gap-2.5 items-start justify-between mt-[3px] w-[66%] md:w-full">
                                    <Img
                                      className="h-2"
                                      src="images/img_call.svg"
                                      alt="call"
                                    />
                                    <Img
                                      className="h-[5px] w-1.5"
                                      src="images/img_vector_blue_gray_700_5x6.svg"
                                      alt="vector_OneHundredEightyNine"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-0.5 right-[30%] top-[29%]"
                                src="images/img_vector_blue_gray_900_02_2x11.svg"
                                alt="vector_OneHundredNinety"
                              />
                            </div>
                            <div className="absolute flex flex-row items-start justify-center right-[32%] top-1/4 w-[16%]">
                              <Img
                                className="h-[5px]"
                                src="images/img_vector_blue_gray_900_02_10x2.svg"
                                alt="vector_OneHundredNinetyOne"
                              />
                              <Img
                                className="h-1.5 ml-0.5"
                                src="images/img_vector_blue_gray_900_02_1x1.svg"
                                alt="vector_OneHundredNinetyTwo"
                              />
                              <Img
                                className="h-[5px] ml-[3px]"
                                src="images/img_vector_blue_gray_900_02_5x1.svg"
                                alt="vector_OneHundredNinetyThree"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] h-[126px] md:h-[69px] left-[7%] w-[34%]">
                          <div className="h-[126px] md:h-[69px] m-auto w-full">
                            <div className="h-[126px] md:h-[69px] m-auto w-full">
                              <div className="h-[126px] md:h-[69px] m-auto w-full">
                                <div className="h-[126px] md:h-[69px] m-auto w-full">
                                  <div className="absolute bottom-[0] h-[121px] md:h-[69px] left-[0] w-[86%]">
                                    <div className="h-[121px] md:h-[69px] m-auto w-full">
                                      <div className="absolute bottom-[0] h-[110px] md:h-[69px] inset-x-[0] mx-auto w-full">
                                        <div className="absolute md:h-16 h-[110px] inset-[0] justify-center m-auto w-[97%]">
                                          <div className="h-[110px] md:h-[61px] m-auto w-full">
                                            <div
                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-10 items-start justify-end pt-[11px] px-[11px] right-[0] w-[54%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group37.svg')",
                                              }}
                                            >
                                              <Line className="bg-blue_gray-900_02 h-7 w-1" />
                                            </div>
                                            <Img
                                              className="h-[38px] ml-2 mt-[23px]"
                                              src="images/img_checkmark_blue_gray_900_02.svg"
                                              alt="checkmark_One"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat md:h-[52px] h-[76px] left-[0] pb-[3px] pr-[3px] top-[0] w-[71%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group34.svg')",
                                              }}
                                            >
                                              <div className="absolute md:h-[52px] h-[72px] left-[0] top-[0] w-4/5">
                                                <Img
                                                  className="absolute h-6 left-[0] top-[0]"
                                                  src="images/img_contrast.svg"
                                                  alt="contrast"
                                                />
                                                <Img
                                                  className="absolute h-[9px] left-[0] top-[0]"
                                                  src="images/img_contrast_deep_orange_300.svg"
                                                  alt="contrast_One"
                                                />
                                                <Img
                                                  className="absolute bottom-[0] h-[52px] right-[0]"
                                                  src="images/img_mobile.svg"
                                                  alt="mobile"
                                                />
                                              </div>
                                              <Img
                                                className="absolute bottom-[11%] h-[52px] right-[4%]"
                                                src="images/img_mobile.svg"
                                                alt="mobile_One"
                                              />
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-row h-max inset-y-[0] items-start justify-center left-[11%] my-auto pl-0.5 py-0.5 w-[19%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group42.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_gray_600_01.svg"
                                                  alt="vector_OneHundredNinetyFive"
                                                />
                                                <div className="h-1 md:h-[7px] my-0.5 relative w-1">
                                                  <Img
                                                    className="absolute bottom-[0] h-0.5 left-[0] w-px"
                                                    src="images/img_vector_gray_600_01_2x1.svg"
                                                    alt="vector_OneHundredNinetySix"
                                                  />
                                                  <Img
                                                    className="absolute h-[3px] inset-x-[0] mx-auto top-[0] w-1"
                                                    src="images/img_vector_gray_600_01_3x4.svg"
                                                    alt="vector_OneHundredNinetySeven"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute h-16 right-[11%] top-[14%]"
                                            src="images/img_arrowleft.svg"
                                            alt="arrowleft"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[69px] right-[0] top-[14%]"
                                          src="images/img_arrowup.svg"
                                          alt="arrowup"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[67px] items-start justify-start right-[38%] top-[16%] w-[19%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group35.svg')",
                                          }}
                                        >
                                          <Line className="bg-blue_gray-700 h-[25px] mb-7 mt-[9px] w-px" />
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[33px] items-start justify-center right-[16%] top-[0] w-[27%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group38.svg')",
                                        }}
                                      >
                                        <div className="flex flex-row items-start justify-evenly mt-[3px] w-[53%] md:w-full">
                                          <Img
                                            className="h-px w-0.5"
                                            src="images/img_vector_blue_gray_900_02_1x2.svg"
                                            alt="vector_OneHundredNinetyNine"
                                          />
                                          <Img
                                            className="h-px"
                                            src="images/img_vector_blue_gray_900_02_1x2.svg"
                                            alt="vector_TwoHundred"
                                          />
                                        </div>
                                        <div className="h-4 md:h-[23px] mb-2 relative w-[53%]">
                                          <div className="absolute h-4 md:h-[15px] inset-y-[0] left-[0] my-auto w-full">
                                            <div className="absolute bottom-[0] flex flex-col gap-[11px] items-start justify-start right-[0] w-full">
                                              <Img
                                                className="h-px w-px"
                                                src="images/img_vector_3.svg"
                                                alt="vector_TwoHundredOne"
                                              />
                                              <Img
                                                className="h-[3px] ml-0.5 md:ml-[0]"
                                                src="images/img_vector_gray_600_01_3x6.svg"
                                                alt="vector_TwoHundredTwo"
                                              />
                                            </div>
                                            <Img
                                              className="absolute h-px left-[0] top-[0] w-0.5"
                                              src="images/img_vector_blue_gray_900_02_1x2.svg"
                                              alt="vector_TwoHundredThree"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-px right-[0] top-[0] w-px"
                                            src="images/img_vector_3.svg"
                                            alt="vector_TwoHundredFour"
                                          />
                                          <Img
                                            className="absolute h-px right-[0] top-[0] w-0.5"
                                            src="images/img_vector_blue_gray_900_02_1x2.svg"
                                            alt="vector_TwoHundredFive"
                                          />
                                          <Img
                                            className="absolute h-1.5 left-[22%] top-[0]"
                                            src="images/img_vector_blue_gray_900_02_1x1.svg"
                                            alt="vector_TwoHundredSix"
                                          />
                                          <Img
                                            className="absolute bottom-[38%] h-0.5 inset-x-[0] mx-auto w-0.5"
                                            src="images/img_vector_gray_600_01_2x2.svg"
                                            alt="vector_TwoHundredSeven"
                                          />
                                          <Img
                                            className="absolute bottom-[38%] h-0.5 inset-x-[0] mx-auto w-0.5"
                                            src="images/img_vector_2x2.svg"
                                            alt="vector_TwoHundredEight"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-row h-[5px] items-center justify-center right-[13%] top-[7%] w-[5%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group41.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-0.5 w-px"
                                        src="images/img_vector_2x1.svg"
                                        alt="vector_TwoHundredNine"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-row h-4 items-start justify-center right-1/4 top-[0] w-[29%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group39.svg')",
                                    }}
                                  >
                                    <div className="h-[5px] relative w-[62%]">
                                      <Img
                                        className="absolute bottom-[0] h-0.5 inset-x-[0] mx-auto"
                                        src="images/img_vector_blue_gray_700_2x12.svg"
                                        alt="vector_TwoHundredTen"
                                      />
                                      <Img
                                        className="absolute h-[5px] inset-x-[0] mx-auto top-[0]"
                                        src="images/img_vector_blue_gray_700_5x13.svg"
                                        alt="vector_TwoHundredEleven"
                                      />
                                    </div>
                                    <Img
                                      className="h-[9px] mt-1"
                                      src="images/img_vector_blue_gray_700_9x2.svg"
                                      alt="vector_TwoHundredTwelve"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[47px] items-end justify-start p-[5px] right-[0] top-1/4 w-[35%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group36.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-2 mb-[27px] mr-0.5 w-[7px]"
                                      src="images/img_vector_blue_gray_700_8x7.svg"
                                      alt="vector_TwoHundredThirteen"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[38%] flex flex-col h-3.5 items-start justify-end right-[35%] w-[14%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group40.svg')",
                                  }}
                                >
                                  <div className="flex flex-col items-start justify-start mt-0.5 w-2/5 md:w-full">
                                    <Img
                                      className="h-[3px] w-1"
                                      src="images/img_vector_3x4.svg"
                                      alt="vector_TwoHundredFourteen"
                                    />
                                    <Img
                                      className="h-px mt-0.5"
                                      src="images/img_vector_gray_600_01.svg"
                                      alt="vector_TwoHundredFifteen"
                                    />
                                    <Img
                                      className="h-px w-0.5"
                                      src="images/img_vector_gray_600_01_1x2.svg"
                                      alt="vector_TwoHundredSixteen"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[44%] h-0.5 right-[15%]"
                                src="images/img_vector_blue_gray_700_2x14.svg"
                                alt="vector_TwoHundredSeventeen"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[46%] h-px right-[7%]"
                              src="images/img_vector_blue_gray_700_9x1.svg"
                              alt="vector_TwoHundredEighteen"
                            />
                          </div>
                          <div className="absolute flex flex-col gap-[9px] h-max inset-y-[0] items-end justify-start my-auto right-[9%] w-[24%]">
                            <div className="flex flex-col items-start justify-start w-[45%] md:w-full">
                              <Line className="bg-blue_gray-700 h-4 w-1" />
                              <Img
                                className="h-px ml-1 md:ml-[0]"
                                src="images/img_vector_blue_gray_700_1x3.svg"
                                alt="vector_TwoHundredTwenty"
                              />
                            </div>
                            <Img
                              className="h-px"
                              src="images/img_vector_blue_gray_700_1x3.svg"
                              alt="vector_TwoHundredTwentyOne"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[6%] h-[79px] inset-x-[0] mx-auto"
                        src="images/img_freepikplantsinject59.svg"
                        alt="freepikplantsin"
                      />
                    </div>
                    <Text
                      className="leading-[134.00%] md:ml-[0] ml-[5px] mt-[22px] text-blue_gray-900_01 text-xl w-[83%] sm:w-full"
                      size="txtPoppinsSemiBold20"
                    >
                      Details and field of study
                    </Text>
                    <Text
                      className="italic md:ml-[0] ml-[5px] mt-[9px] text-blue_gray-900_01 text-sm"
                      size="txtCabinItalic14"
                    >
                      Details
                    </Text>
                    <Button
                      className="cursor-pointer font-cabin leading-[normal] min-w-[118px] md:ml-[0] ml-[7px] mt-[47px] rounded-[10px] text-base text-center"
                      color="purple_400"
                      size="md"
                      variant="fill"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-100_03 bottom-[0] flex flex-col font-poppins gap-[15px] inset-x-[0] justify-end mx-auto outline outline-[1px] outline-blue_gray-900_01 pt-[41px] rounded-[20px] w-[84%]">
              <Text
                className="md:ml-[0] ml-[25px] mr-[115px] text-blue_gray-900_01 text-xl"
                size="txtPoppinsSemiBold20"
              >
                Blank space to fill
              </Text>
              <div className="bg-gray-100_03 h-[296px] rounded-[20px] shadow-bs7 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskmanagementdashboardPage;
