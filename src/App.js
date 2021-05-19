import React from "react";
import {
  InfoCard,
  CardContentWrapper,
  SideBarWrapper,
  SectionWrapper,
  SectionHeadline,
  CenteredCardText,
  CardImage,
  TrainingDetails,
  HealthSectionItem,
  InlineWrapper,
  ActivityTimePlan,
  ActivityMoreIcon,
  Chip,
  MoreWrapper,
  Gradient,
  UserDetails,
} from "./components/common";
import DashboardLayout from "./layouts/dashboardLayout";
import BellIcon from "./assets/images/bx-bell.svg";
import ChatIcon from "./assets/images/chat.svg";
import SettingIcon from "./assets/images/setting-lines.svg";
import HeartBeatIcon from "./assets/images/heartbeat.svg";
import MoonIcon from "./assets/images/moon.svg";
import AppleIcon from "./assets/images/apple.svg";
import RegisterIcon from "./assets/images/undrawRegister.svg";
import ellipsisIcon from "./assets/images/ellipsis.svg";
import moreIcon from "./assets/images/more.svg";
import avatarIcon from "./assets/images/man.svg";
function App() {
  return (
    <DashboardLayout>
      <div>Left Section</div>
      <div>Mid Section</div>
      <>
        <Gradient from={"#fff"} to={"#f8f9fd"}>
          <SideBarWrapper>
            <UserDetails
              avatarSrc={avatarIcon}
              name={"Floyd Miles"}
              accountType={"Free account"}
              iconOneSrc={BellIcon}
              iconTwoSrc={SettingIcon}
              badge={"1"}
            />

            <SectionWrapper margin={"24px 0 0 0"}>
              <SectionHeadline>Health</SectionHeadline>
              <InlineWrapper>
                <HealthSectionItem
                  progressPercentage={"75"}
                  bgColor={"#4C95FF"}
                  textData={"6:25"}
                  itemName={"Hours"}
                  iconSrc={MoonIcon}
                />
                <HealthSectionItem
                  progressPercentage={"100"}
                  bgColor={"#FF7368"}
                  textData={"120"}
                  itemName={"Bpm"}
                  iconSrc={HeartBeatIcon}
                />
                <HealthSectionItem
                  progressPercentage={"30"}
                  bgColor={"#6FCE63"}
                  textData={"1.84"}
                  itemName={"KCal"}
                  iconSrc={AppleIcon}
                />
              </InlineWrapper>
              <InfoCard bgColorPrimary={"#FFFBF0"} bgColorSecondary={"#FFEDC4"}>
                <CardContentWrapper margin={"12px 0 0 0"}>
                  <CardImage
                    src={RegisterIcon}
                    height={"120px"}
                    width={"120px"}
                  />
                  <CenteredCardText>
                    Sign Up for a personal trainer to improve results
                    <Chip bgColor={"#FBC852"} button>
                      Sign Up
                    </Chip>
                  </CenteredCardText>
                </CardContentWrapper>
              </InfoCard>
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeadline>Today's trainings</SectionHeadline>

              <InfoCard bgColorPrimary={"#4C95FF"} bgColorSecondary={"#BFD9FF"}>
                <CardContentWrapper>
                  <TrainingDetails
                    title={"Box"}
                    subtitle={"Sport Club"}
                    time={"10:00"}
                  />
                  <ActivityTimePlan
                    time={"40"}
                    unit={"min"}
                    description={"Warm-up"}
                  />
                  <ActivityTimePlan
                    time={"40"}
                    unit={"min"}
                    description={"Stretch"}
                  />
                  <ActivityMoreIcon src={ellipsisIcon} />
                </CardContentWrapper>
              </InfoCard>
              <InfoCard bgColorPrimary={"#FF7368"} bgColorSecondary={"#FDBEC0"}>
                <CardContentWrapper>
                  <TrainingDetails
                    title={"Crossfit"}
                    subtitle={"Sport Club"}
                    time={"12:00"}
                  />
                  <ActivityTimePlan
                    time={"20"}
                    unit={"min"}
                    description={"Warm-up"}
                  />
                  <ActivityTimePlan
                    time={"20"}
                    unit={"min"}
                    description={"Pull-Ups"}
                  />
                  <ActivityMoreIcon src={ellipsisIcon} />
                </CardContentWrapper>
              </InfoCard>
            </SectionWrapper>

            <MoreWrapper>
              <ActivityMoreIcon src={moreIcon} />
            </MoreWrapper>
          </SideBarWrapper>
        </Gradient>
        <SideBarWrapper>
          <UserDetails
            avatarSrc={avatarIcon}
            name={"John Kavangh"}
            accountType={"MMA coach"}
            iconOneSrc={ChatIcon}
            online
          />
          <UserDetails
            avatarSrc={avatarIcon}
            name={"Jacob Jones"}
            accountType={"Boxing coach"}
            iconOneSrc={ChatIcon}
            online
          />
        </SideBarWrapper>
      </>
    </DashboardLayout>
  );
}

export default App;
