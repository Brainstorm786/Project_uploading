import React from "react";

import { Button, Img, Line, Text } from "components";

const TaskManagementDashboardCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[15px] items-end justify-start mb-1.5 w-[96%] md:w-full">
          <div className="flex flex-row items-start justify-between mr-0.5 w-full">
            <Text
              className="mt-[3px] text-base text-blue_gray-100_01 text-center"
              size="txtCabinBold16"
            >
              {props?.nov22022}
            </Text>
            <Img
              className="h-5 mb-[3px] w-5"
              src="images/img_overflowmenu.svg"
              alt="overflowmenu"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
            <Text
              className="md:ml-[0] ml-[3px] text-blue_gray-900_01 text-xl"
              size="txtPoppinsSemiBold20"
            >
              {props?.foodwebsite}
            </Text>
            <Text
              className="italic md:ml-[0] ml-[3px] text-base text-blue_gray-900_01"
              size="txtCabinItalic16"
            >
              {props?.foodchainprojec}
            </Text>
            <div className="md:h-[19px] h-[9px] md:ml-[0] ml-[3px] mt-2.5 relative w-[94%]">
              {!!props?.group1000002307 ? (
                <Img
                  className="absolute h-[9px] inset-[0] justify-center m-auto"
                  alt="group1000002307"
                  src={props?.group1000002307}
                />
              ) : null}
              {!!props?.group1000002308 ? (
                <Img
                  className="absolute h-[9px] inset-y-[0] left-[0] my-auto"
                  alt="group1000002308"
                  src={props?.group1000002308}
                />
              ) : null}
            </div>
            <div className="flex flex-row gap-[174px] items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[94%] md:w-full">
              <Text
                className="text-blue_gray-900_01 text-sm"
                size="txtCabinRegular14"
              >
                {props?.unique}
              </Text>
              <Text
                className="text-blue_gray-900_01 text-right text-sm"
                size="txtCabinRegular14"
              >
                {props?.ninety}
              </Text>
            </div>
            {!!props?.linetwo ? (
              <Line className="bg-blue_gray-100_7f h-0.5 mt-[25px] w-[95%]" />
            ) : null}
            <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-2 w-full">
              <div className="flex relative w-[16%]">
                <Img
                  className="h-[25px] ml-[undefinedpx] my-auto rounded-[50%] w-[25px] z-[1]"
                  src="images/img_ellipse11.png"
                  alt="ellipseTwelve"
                />
                {!!props?.ellipseeight ? (
                  <Img
                    className="h-[25px] ml-[-9px] my-auto rounded-[50%] w-[25px] z-[1]"
                    alt="ellipseEight"
                    src={props?.ellipseeight}
                  />
                ) : null}
              </div>
              <div className="bg-green-400 h-[25px] ml-[5px] rounded-[12px] w-[25px]"></div>
              <Button
                className="!text-orange-900 cursor-pointer font-bold font-cabin leading-[normal] min-w-[93px] ml-[94px] rounded-[13px] text-center text-xs"
                color="deep_orange_100"
                size="xs"
                variant="fill"
              >
                {props?.status}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TaskManagementDashboardCard.defaultProps = {
  nov22022: "Nov 2, 2022",
  foodwebsite: "Stock Analyzer",
  foodchainprojec: "Stock market Analyzer",
  unique: "Unique",
  ninety: "75%",
  status: "Status",
};

export default TaskManagementDashboardCard;
