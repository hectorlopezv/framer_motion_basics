import React, { FC } from "react";
import home from '../assets/home.png';
import styled from "styled-components";
import NavBar from "./navbar";

interface IHome {}

const Home: FC<IHome> = ({}) => {
  return (
    <Section id="home">
      <NavBar />
    </Section>
  );
};
export default Home;

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
`;
