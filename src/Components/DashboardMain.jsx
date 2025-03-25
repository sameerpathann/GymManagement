import React, { useState } from "react";
import DashBoardSection from "./Sections/DashBoardSection";
import UserSection from "./Sections/UserSection";
import MembershipSection from "./Sections/MembershipSection";
import PaymentSection from "./Sections/PaymentSection";
import SettingsSection from "./Sections/SettingsSection";

const DashboardMain = ({ isClick, trainerDetails, setTrainersDetails }) => {
  const sections = {
    1: DashBoardSection,
    2: UserSection,
    3: MembershipSection,
    4: PaymentSection,
    5: SettingsSection,
  };

  const ContentComponent =
    sections[isClick] || (() => <div>Section Not Found</div>);
  return (
    <>
      {
        <ContentComponent
          trainerDetails={trainerDetails}
          setTrainersDetails={setTrainersDetails}
        />
      }
    </>
  );
};

export default DashboardMain;
