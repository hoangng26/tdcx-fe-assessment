import React from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-decoration: underline;
  margin-left: auto;
  margin-right: auto;
`;

const HomePageComponent: React.FC = () => {
  return <CustomDiv>HomePageComponent</CustomDiv>;
};

export default HomePageComponent;
