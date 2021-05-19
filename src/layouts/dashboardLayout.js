import React from "react";
import styled from "styled-components";

const SinglePageLayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 4fr 400px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 0px 0px 100%;
  }
`;
const BlankWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px dashed #ccc;
`;
const SectionWrapper = styled.div`
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DashboardLayout = ({ children }) => {
  return (
    <SinglePageLayoutWrapper>
      <BlankWrapper>{children[0]}</BlankWrapper>
      <BlankWrapper>{children[1]}</BlankWrapper>
      <SectionWrapper>{children[2]}</SectionWrapper>
    </SinglePageLayoutWrapper>
  );
};

export default DashboardLayout;
