import React from "react";
import styled from "styled-components";
import milestoneBackground from "../assets/milestone-background.png";
import milestone1 from "../assets/milestone1.png";
import milestone2 from "../assets/milestone2.png";
import milestone3 from "../assets/milestone3.png";

interface IMilestones {}

const Milestones: React.FC<IMilestones> = ({}) => {
  const milestones = [
    {
      image: milestone1,
      data: "Client Served",
      amount: "877",
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: "1.4M",
    },
    {
      image: milestone3,
      data: "Reviews",
      amount: "5.5K",
    },
  ];
  return (
    <Section id="milestones">
      <div className="background">
        <img src={milestoneBackground} alt="milestone background" />
      </div>
      <div className="milestones">
        {milestones.map(({ image, data, amount }, _) => {
          return (
            <div className="milestone">
              <p>{amount}</p>
              <span>{data}</span>
              <img src={image} alt="Milestone" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default Milestones;

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding: 0 5rem;
  position: relative;
  .background {
    position: absolute;
    left: 0;
    bottom: 30%auto;
    img {
      z-index: 2;
      height: 43rem;
    }
  }

  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    align-items: center;
    height: 100%;
    width: 100%;
    .milestone {
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img {
        height: 6rem;
      }
    }
  }
`;
