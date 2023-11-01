import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const ThoughtsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto md:px-10 sm:px-5 px-[101px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 h-[1136px] md:h-auto items-start justify-start max-w-[1237px] mx-auto w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[482px] h-[1134px] md:h-auto items-start justify-start pb-3 pt-0.5 px-3 w-auto">
            <div className="flex flex-col gap-[22px] items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start px-1.5 py-[9px] w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Img
                      className="h-[45px] md:h-auto object-cover w-[165px]"
                      src="images/img_amigobyhorseware.png"
                      alt="amigobyhorsewar"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-segoeui gap-2 items-start justify-start w-auto">
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUISemibold20"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_trash_blue_500.svg"
                    alt="trash"
                  />
                  <Text
                    className="text-blue-500 text-xl w-auto"
                    size="txtSegoeUISemibold20Blue500"
                  >
                    Explore
                  </Text>
                </div>
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUISemibold20"
                  >
                    Notifications
                  </Text>
                </div>
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUISemibold20"
                  >
                    Bookmarks
                  </Text>
                </div>
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_frame133.svg"
                    alt="frame133"
                  />
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUISemibold20"
                  >
                    Profile
                  </Text>
                </div>
                <div className="flex flex-row gap-3 h-12 md:h-auto items-center justify-center p-3 rounded-[24px] w-auto">
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_frame133_gray_900_03.svg"
                    alt="frame133_One"
                  />
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUISemibold20"
                  >
                    More
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold h-12 rounded-[24px] text-[15px] text-center w-[225px]"
                color="blue_500"
                size="xl"
                variant="fill"
              >
                Express Taught
              </Button>
            </div>
            <div className="flex flex-col h-16 md:h-auto items-center justify-start p-3 w-[251px]">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <div className="flex flex-col h-12 items-center justify-start w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_ellipse91.png"
                      alt="ellipseNinetyOne"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-[15px] text-gray-900_03 w-auto"
                      size="txtRobotoBold15"
                    >
                      Username
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-600 w-auto"
                      size="txtRobotoRegular15"
                    >
                      @username
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-0.5"
                  src="images/img_group549.svg"
                  alt="group549"
                />
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-50_01 h-[1134px] md:h-px md:w-full w-px" />
          <div className="flex md:flex-1 flex-col font-segoeui gap-px items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly shadow-bs8 w-full">
              <div className="bg-white-A700 flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start pl-4 w-[557px] sm:w-full">
                <Text
                  className="text-gray-900_03 text-xl w-auto"
                  size="txtSegoeUIBlack20"
                >
                  Express
                </Text>
              </div>
              <div className="bg-white-A700 h-[52px] w-[7%]"></div>
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-3 items-start justify-start px-4 py-2 shadow-bs8 w-[598px] md:w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_ellipse91.png"
                alt="ellipseNinetyOne_One"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start py-3 w-full">
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUI20"
                  >
                    Hello I’m a Student at D Y Patil
                  </Text>
                </div>
                <div className="flex flex-col font-roboto h-11 md:h-auto items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-center p-1 w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_vector_blue_500.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-blue-500 w-auto"
                      size="txtRobotoMedium13"
                    >
                      Everyone can reply
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-50_01 h-px w-full" />
                <div className="flex flex-row font-roboto items-end justify-between w-full">
                  <Img
                    className="h-[52px] w-[191px]"
                    src="images/img_frame121.svg"
                    alt="frame121"
                  />
                  <div className="flex flex-row gap-3 h-10 md:h-auto items-center justify-end mt-3 w-[171px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_image57.svg"
                      alt="imageFiftySeven"
                    />
                    <Line className="bg-blue_gray-200_01 h-[31px] w-px" />
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                    <Button
                      className="cursor-pointer font-bold rounded-[20px] text-[15px] text-center w-[74px]"
                      color="blue_500"
                      size="lg"
                      variant="fill"
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 h-3 shadow-bs8 w-full"></div>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start shadow-bs8 w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start pb-3 pt-1 px-4 w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse91_48x48.png"
                    alt="ellipseNinetyOne"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-1 h-[26px] md:h-auto items-center justify-start py-3 w-[459px] sm:w-full">
                        <Text
                          className="text-[15px] text-gray-900_03 w-auto"
                          size="txtSegoeUIBold15"
                        >
                          Sharad Patil
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          @Sharad
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          ·
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          1 min
                        </Text>
                      </div>
                      <Img
                        className="h-[26px] w-[25px]"
                        src="images/img_user_blue_gray_600.svg"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[20.00px] max-w-[506px] md:max-w-full text-[15px] text-gray-900_03"
                        size="txtSegoeUISemilight15"
                      >
                        <span className="text-gray-900_03 font-segoeui text-left font-normal">
                          The DesignLab is doing major work on Community-Driven
                          Design, with several different variants. If you are
                          working in this area, submit a paper to the DIS
                          conference here in San Diego (see DesignLab posting
                          below)....{" "}
                        </span>
                        <span className="text-blue-500 font-segoeui text-left font-normal">
                          https://facebook.com/don.norman.18/...
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row h-[52px] md:h-auto items-end justify-between w-[425px] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start p-2 w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_file.svg"
                          alt="file"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start px-2 py-[9px] w-auto">
                        <Img
                          className="h-[15px] w-[18px]"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          16
                        </Text>
                      </div>
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-[46px] w-10"
                        src="images/img_retweet.svg"
                        alt="retweet"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start shadow-bs8 w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start pb-3 pt-1 px-4 w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse91_48x48.png"
                    alt="ellipseNinetyOne"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="flex sm:flex-1 flex-row gap-1 h-[26px] md:h-auto items-center justify-start py-3 w-[476px] sm:w-full">
                        <Text
                          className="text-[15px] text-gray-900_03 w-auto"
                          size="txtSegoeUIBold15"
                        >
                          Vinayak Patil
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          @vinayak
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          ·
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          5 min
                        </Text>
                      </div>
                      <Img
                        className="h-[26px] w-[25px]"
                        src="images/img_user_blue_gray_600.svg"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-[15px] text-gray-900_03 w-auto"
                        size="txtSegoeUISemilight15"
                      >
                        Thoughts.........................................................
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-3 w-full">
                      <Img
                        className="h-[283px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                        src="images/img_rectangle739.png"
                        alt="rectangle739"
                      />
                    </div>
                    <div className="flex flex-row h-[52px] md:h-auto items-end justify-between w-[425px] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start p-2 w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_file.svg"
                          alt="file"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start px-2 py-[9px] w-auto">
                        <Img
                          className="h-[15px] w-[18px]"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          16
                        </Text>
                      </div>
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-[46px] w-10"
                        src="images/img_retweet.svg"
                        alt="retweet"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start shadow-bs8 w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start pb-3 pt-1 px-4 w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse91_48x48.png"
                    alt="ellipseNinetyOne"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="flex sm:flex-1 flex-row gap-1 h-[26px] md:h-auto items-center justify-start py-3 w-[480px] sm:w-full">
                        <Text
                          className="text-[15px] text-gray-900_03 w-auto"
                          size="txtSegoeUIBold15"
                        >
                          Vinayak
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          @vinayak
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          ·
                        </Text>
                        <Text
                          className="text-[15px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI15"
                        >
                          15 min
                        </Text>
                      </div>
                      <Img
                        className="h-[26px] w-[25px]"
                        src="images/img_user_blue_gray_600.svg"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-[15px] text-gray-900_03 w-auto"
                        size="txtSegoeUISemilight15"
                      >
                        Thoughts
                      </Text>
                    </div>
                    <div className="flex flex-row h-[52px] md:h-auto items-end justify-between w-[425px] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start p-2 w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_file.svg"
                          alt="file"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start px-2 py-[9px] w-auto">
                        <Img
                          className="h-[15px] w-[18px]"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          16
                        </Text>
                      </div>
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                      <Img
                        className="h-[46px] w-10"
                        src="images/img_retweet.svg"
                        alt="retweet"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-blue_gray-50_01 h-[1134px] md:h-px md:w-full w-px" />
          <div className="bg-white-A700 flex flex-1 flex-col font-roboto items-start justify-start pl-3 w-full">
            <div className="flex flex-col gap-4 items-start justify-start pt-1 w-full">
              <Input
                name="search"
                placeholder="Search Topic"
                className="md:h-auto p-0 placeholder:text-blue_gray-600 sm:h-auto text-[15px] text-left w-full"
                wrapClassName="flex rounded-[22px] w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-[18px] mr-2.5"
                    src="images/img_search_1.svg"
                    alt="search 1"
                  />
                }
                shape="round"
              ></Input>
              <div className="bg-black-900_07 flex flex-col font-segoeui gap-px items-start justify-start rounded-[20px] w-full">
                <div className="bg-gray-50_02 flex flex-col items-center justify-start px-4 py-3 rounded-tl-[20px] rounded-tr-[20px] shadow-bs w-full">
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUIBlack20"
                  >
                    Trending
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-50_02 flex flex-1 flex-col gap-px items-start justify-start px-4 py-3 shadow-bs w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-[132px]">
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          Trending in Maharshtra
                        </Text>
                      </div>
                      <Img
                        className="h-4 w-6"
                        src="images/img_user_blue_gray_600.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-[15px] text-gray-900_03 w-auto"
                      size="txtSegoeUIBold15"
                    >
                      Artificial Intelligence
                    </Text>
                    <Text
                      className="text-[13px] text-blue_gray-600 w-auto"
                      size="txtSegoeUI13"
                    >
                      16.9K thought
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 flex flex-1 flex-col gap-px items-start justify-start px-4 py-3 shadow-bs w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-[119px]">
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          Trending in India
                        </Text>
                      </div>
                      <Img
                        className="h-4 w-6"
                        src="images/img_user_blue_gray_600.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-[15px] text-gray-900_03 w-auto"
                      size="txtSegoeUIBold15"
                    >
                      Computer Vision
                    </Text>
                    <Text
                      className="text-[13px] text-blue_gray-600 w-auto"
                      size="txtSegoeUI13"
                    >
                      16.9K Thought
                    </Text>
                  </div>
                </List>
                <div className="bg-gray-50_02 flex flex-col items-start justify-start px-4 py-3 shadow-bs w-full">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <div className="flex flex-col gap-px items-start justify-start w-[234px]">
                      <div className="flex flex-row gap-1 items-start justify-start w-full">
                        <Img
                          className="h-4 md:h-auto rounded-[50%] w-4"
                          src="images/img_ellipse93.png"
                          alt="ellipseNinetyThree"
                        />
                        <Text
                          className="text-[13px] text-gray-900_03 w-auto"
                          size="txtSegoeUISemibold13"
                        >
                          Trending in India
                        </Text>
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          ·
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[234px] md:max-w-full text-[15px] text-gray-900_03"
                        size="txtSegoeUIBold15"
                      >
                        Can Ai take the jobs of Software Engineers ?
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[68px]">
                      <Img
                        className="h-[68px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[68px]"
                        src="images/img_rectangle743.png"
                        alt="rectangle743"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_02 flex flex-col items-start justify-start px-4 py-3 shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-px items-start justify-start w-[318px]">
                      <div className="flex flex-row gap-1 items-start justify-start w-full">
                        <Img
                          className="h-4 md:h-auto rounded-[50%] w-4"
                          src="images/img_ellipse93_16x16.png"
                          alt="ellipseNinetyThree_One"
                        />
                        <Text
                          className="text-[13px] text-gray-900_03 w-auto"
                          size="txtSegoeUISemibold13"
                        >
                          Trending in India
                        </Text>
                        <Text
                          className="text-[13px] text-blue_gray-600 w-auto"
                          size="txtSegoeUI13"
                        >
                          ·
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[318px] md:max-w-full text-[15px] text-gray-900_03"
                        size="txtSegoeUIBold15"
                      >
                        I want Information about my project related to AI and ML
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_02 flex flex-col gap-px items-start justify-start px-4 py-3 shadow-bs w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-[119px]">
                      <Text
                        className="text-[13px] text-blue_gray-600 w-auto"
                        size="txtSegoeUI13"
                      >
                        Trending in India
                      </Text>
                    </div>
                    <Img
                      className="h-4 w-6"
                      src="images/img_user_blue_gray_600.svg"
                      alt="user"
                    />
                  </div>
                  <Text
                    className="leading-[20.00px] max-w-[128px] md:max-w-full text-[15px] text-gray-900_03"
                    size="txtSegoeUIBold15"
                  >
                    What’s is Computer Vision
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[13px] text-blue_gray-600 w-auto"
                      size="txtSegoeUI13"
                    >
                      16.9K Thought
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_02 flex flex-col items-center justify-start px-4 py-3 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <Text
                    className="text-[15px] text-blue-500 w-auto"
                    size="txtSegoeUI15Blue500"
                  >
                    Show more
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_07 flex flex-col font-segoeui gap-px items-start justify-start rounded-[20px] w-full">
                <Input
                  name="frame149"
                  placeholder="Follow Users"
                  className="font-black p-0 placeholder:text-gray-900_03 text-left text-xl w-full"
                  wrapClassName="rounded-tl-[20px] rounded-tr-[20px] w-full"
                  color="gray_50_02"
                  size="xs"
                ></Input>
                <div className="bg-gray-50_02 flex flex-col items-start justify-center px-4 py-3 shadow-bs w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-center w-[235px]">
                      <div className="flex flex-row gap-1 items-center justify-start w-full">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_ellipse91.png"
                          alt="ellipseNinetyThree_Two"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-gray-900_03 w-full"
                            size="txtSegoeUIBold15"
                          >
                            Vinayak Patil
                          </Text>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[13px] text-blue_gray-600 w-auto"
                              size="txtSegoeUI13"
                            >
                              @vinayak
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-end ml-1 w-[79px]">
                      <Button
                        className="cursor-pointer font-bold h-8 rounded-[16px] text-[15px] text-center w-[79px]"
                        shape="round"
                        color="blue_500"
                        size="sm"
                        variant="outline"
                      >
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_02 flex flex-col items-start justify-center px-4 py-3 shadow-bs w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-center w-[235px]">
                      <div className="flex flex-row gap-1 items-center justify-start w-full">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_ellipse91.png"
                          alt="ellipseNinetyThree_Three"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-gray-900_03 w-full"
                            size="txtSegoeUIBold15"
                          >
                            Sharad Patil
                          </Text>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[13px] text-blue_gray-600 w-auto"
                              size="txtSegoeUI13"
                            >
                              @Sharad
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-end ml-1 w-[79px]">
                      <Button
                        className="cursor-pointer font-bold h-8 rounded-[16px] text-[15px] text-center w-[79px]"
                        shape="round"
                        color="blue_500"
                        size="sm"
                        variant="outline"
                      >
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_02 flex flex-col items-center justify-start px-4 py-3 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <Text
                    className="text-[15px] text-blue-500 w-auto"
                    size="txtSegoeUI15Blue500"
                  >
                    Show more
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_07 flex flex-col font-segoeui gap-px items-start justify-start rounded-[20px] w-full">
                <div className="bg-gray-50_02 flex flex-col items-center justify-start px-4 py-3 rounded-tl-[20px] rounded-tr-[20px] shadow-bs w-full">
                  <Text
                    className="text-gray-900_03 text-xl w-auto"
                    size="txtSegoeUIBlack20"
                  >
                    Topics to follow
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-50_02 flex flex-1 flex-col items-start justify-center px-4 py-3 shadow-bs w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[64%]">
                        <div className="flex flex-col items-start justify-center w-[201px]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[15px] text-gray-900_03 w-full"
                                size="txtSegoeUIBold15"
                              >
                                UX Design
                              </Text>
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-[13px] text-blue_gray-600 w-auto"
                                  size="txtSegoeUI13"
                                >
                                  Computer programming
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row font-roboto gap-1 items-center justify-center ml-1 w-[113px]">
                        <div className="flex flex-col items-center justify-end w-auto">
                          <Button
                            className="cursor-pointer font-bold h-8 rounded-[16px] text-[15px] text-center w-[79px]"
                            shape="round"
                            color="blue_500"
                            size="sm"
                            variant="outline"
                          >
                            Follow
                          </Button>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_close_blue_gray_600.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50_02 flex flex-1 flex-col items-start justify-center px-4 py-3 shadow-bs w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[64%]">
                        <div className="flex flex-col items-start justify-center w-[201px]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[15px] text-gray-900_03 w-full"
                                size="txtSegoeUIBold15"
                              >
                                Technology
                              </Text>
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-[13px] text-blue_gray-600 w-auto"
                                  size="txtSegoeUI13"
                                >
                                  All about technology
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row font-roboto gap-1 items-center justify-center ml-1 w-[113px]">
                        <div className="flex flex-col items-center justify-end w-auto">
                          <Button
                            className="cursor-pointer font-bold h-8 rounded-[16px] text-[15px] text-center w-[79px]"
                            shape="round"
                            color="blue_500"
                            size="sm"
                            variant="outline"
                          >
                            Follow
                          </Button>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_close_blue_gray_600.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50_02 flex flex-1 flex-col items-start justify-center px-4 py-3 shadow-bs w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[64%]">
                        <div className="flex flex-col items-start justify-center w-[201px]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[15px] text-gray-900_03 w-full"
                                size="txtSegoeUIBold15"
                              >
                                Python
                              </Text>
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-[13px] text-blue_gray-600 w-auto"
                                  size="txtSegoeUI13"
                                >
                                  Computer programming
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row font-roboto gap-1 items-center justify-center ml-1 w-[113px]">
                        <div className="flex flex-col items-center justify-end w-auto">
                          <Button
                            className="cursor-pointer font-bold h-8 rounded-[16px] text-[15px] text-center w-[79px]"
                            shape="round"
                            color="blue_500"
                            size="sm"
                            variant="outline"
                          >
                            Follow
                          </Button>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_close_blue_gray_600.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray-50_02 flex flex-col items-center justify-start px-4 py-3 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <Text
                    className="text-[15px] text-blue-500 w-auto"
                    size="txtSegoeUI15Blue500"
                  >
                    Show more
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThoughtsPage;
