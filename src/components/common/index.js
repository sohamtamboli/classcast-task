import styled, { keyframes } from "styled-components";
const settle = keyframes`
from{
transform: translateY(-12px);
}
to{
transform: translateY(0px);
}
`;
const rise = keyframes`
from{
transform: translateY(0px);
}
to{
transform: translateY(-12px);
}
`;
export const BaseCard = styled.div`
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  outline-offset: 4px;
  //background: #fdbec0;
  margin: 32px 0;
  background-color: ${(props) => props.bgColor};
`;
export const CardFront = styled.span`
  display: block;
  width: 100%;
  padding: 8px 42px 8px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: rgba(254, 115, 104);
  color: white;
  transform: translateY(-12px);
  border: 2px solid white;
  margin: 0 -8px;
  background-color: ${(props) => props.bgColor};
  animation: ${rise} 500ms linear forwards;
  :hover {
    animation: ${settle} 500ms linear forwards;
  }
`;

export const SquareButton = styled.button`
  padding: 0;
  outline: 0;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  background: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  border: 1px #eee solid;
  cursor: pointer;
  position: relative;
`;
export const SideBarWrapper = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SectionWrapper = styled.div`
  margin: ${(props) => props.margin || "0"};
`;
export const UserAvatar = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: url(${(props) => props.avatarSrc});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
export const ProgressBarBase = styled.div`
  background: #eef1fa;
  width: 100%;
  border-radius: 12px;
  height: 5px;
`;
export const Progress = styled.div`
  width: ${(props) => props.progressPercentage}%;
  background: ${(props) => props.barColor};
  height: 100%;
  border-radius: 12px;
`;
export const SectionHeadline = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;
export const StatImage = styled.div`
  border-radius: 8px;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  background-color: ${(props) => props.bgColor};
  width: 35px;
  height: 35px;
`;
export const CardImage = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const CenteredCardText = styled.div`
  text-align: center;
  max-width: 200px;
  word-wrap: normal;
  color: #757582;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;
export const InlineWrapper = styled.div`
  display: flex;
  > span {
    position: relative;
    padding: 0.5rem 1rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex: 0 1 33%;
    @media only screen and (max-width: 768px) {
      padding: 0.5rem 0.6rem;
    }
  }
  > span:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -2px;
    top: 10%;
    width: 2px;
    height: 80%;
    background-color: #eee;
  }
  > span:first-child {
    padding-left: 0;
  }
`;
export const HealthStatWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const HealthStatData = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
`;
export const HealthStatDetail = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 5px;
`;
export const CardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
`;
export const ActivityMoreIcon = styled.img`
  height: 20px;
  width: 20px;
`;
export const MoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Gradient = styled.div`
  background: ${(props) => `linear-gradient(
    180deg,
    ${props.from} 0%,
    ${props.to} 100%
  )`};
  border-radius: 0 0 16px 16px;
`;
export const Chip = styled.div`
  padding: 0.5rem;
  margin: 12px auto;
  display: inline-block;
  background: ${(props) => props.bgColor};
  ${(props) =>
    props.button
      ? `
  cursor:pointer;
  transition:1s;
  :hover{
    color:black;
  }
  `
      : null}
  border-radius:8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(props) => props.color || "#fff"};
`;

export const TrainingTitle = styled.div`
  font-size: 1.2rem;
  margin: 8px 0 8px 0;
  text-align: left;
  font-weight: 600;
  color: #fff;
`;
export const TrainingSubTitle = styled(TrainingTitle)`
  font-size: 0.9rem;
  margin: 0px 0;
  font-weight: bold;
`;

export const ActivityTime = styled.div`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
`;
export const ActivityUnit = styled(ActivityTime)`
  font-size: 1rem;
  font-weight: 700;
`;
export const ActivityDescription = styled(ActivityUnit)`
  font-weight: 500;
`;
export const InfoCard = ({ children, bgColorPrimary, bgColorSecondary }) => {
  return (
    <BaseCard bgColor={bgColorSecondary}>
      <CardFront bgColor={bgColorPrimary}>{children}</CardFront>
    </BaseCard>
  );
};
export const Badge = styled.div`
  height: 14px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  border-radius: 50%;
  color: #fff;
  background: ${(props) => (props.type === "status" ? "#BDFFA9" : "#eb3232")};
  position: absolute;
  ${(props) =>
    props.type === "status"
      ? `
      bottom:0;
      left:-4px;
      `
      : `  
    top: 0;
    right: -4px;
  `};
`;
const HealthItemWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;
const UserDetailsWrapper = styled.div``;
const UserName = styled.div`
  font-weight: 700;
`;
const AccountType = styled.div`
  font-size: 0.8rem;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-right: 18px;
`;
export const ProgressBar = ({ progressPercentage, barColor }) => {
  return (
    <ProgressBarBase>
      <Progress progressPercentage={progressPercentage} barColor={barColor} />
    </ProgressBarBase>
  );
};

export const HealthSectionItem = ({
  progressPercentage,
  bgColor,
  textData,
  itemName,
  iconSrc,
}) => {
  return (
    <HealthItemWrapper>
      <HealthStatData>{textData}</HealthStatData>
      <HealthStatDetail>
        <StatImage imgSrc={iconSrc} bgColor={bgColor} />
        {itemName}
      </HealthStatDetail>
      <ProgressBar progressPercentage={progressPercentage} barColor={bgColor} />
    </HealthItemWrapper>
  );
};

export const TrainingDetails = ({ title, subtitle, time }) => {
  return (
    <div>
      <TrainingTitle>{title}</TrainingTitle>
      <TrainingSubTitle>{subtitle}</TrainingSubTitle>
      <Chip bgColor={"#FFF"} color={"#888996"}>
        {time}
      </Chip>
    </div>
  );
};

export const ActivityTimePlan = ({ time, unit, description }) => {
  return (
    <div>
      <ActivityTime>{time}</ActivityTime>
      <ActivityUnit>{unit}</ActivityUnit>
      <ActivityDescription>{description}</ActivityDescription>
    </div>
  );
};

export const UserDetails = ({
  avatarSrc,
  name,
  accountType,
  iconOneSrc,
  iconTwoSrc,
  badge,
  online,
}) => {
  return (
    <CardContentWrapper margin={"16px 0"}>
      <UserInfo>
        <UserAvatar avatarSrc={avatarSrc}>
          {online ? <Badge type="status" /> : null}
        </UserAvatar>
        <UserDetailsWrapper>
          <UserName>{name}</UserName>
          <AccountType>{accountType}</AccountType>
        </UserDetailsWrapper>
      </UserInfo>
      <SquareButton backgroundImage={iconOneSrc}>
        {badge ? <Badge>{badge}</Badge> : null}
      </SquareButton>
      {iconTwoSrc ? <SquareButton backgroundImage={iconTwoSrc} /> : null}
    </CardContentWrapper>
  );
};
