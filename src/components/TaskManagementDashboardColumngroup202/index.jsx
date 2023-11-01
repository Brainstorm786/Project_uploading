import React from "react";

import { Img, Text } from "components";

const TaskManagementDashboardColumngroup202 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-start justify-start ml-4 md:ml-[0] mt-[3px] w-[64%] md:w-full">
          {!!props?.userimage ? (
            <Img
              className="h-[38px] md:h-auto mt-0.5 object-cover w-[38px]"
              alt="group202"
              src={props?.userimage}
            />
          ) : null}
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-base text-blue_gray-900_01"
              size="txtCabinRegular16"
            >
              {props?.username}
            </Text>
            <Text
              className="mt-0.5 text-blue_gray-900_7f text-xs"
              size="txtCabinRegular12"
            >
              {props?.branch}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TaskManagementDashboardColumngroup202.defaultProps = {
  username: "Maria Memon",
  branch: "Branch",
};

export default TaskManagementDashboardColumngroup202;
