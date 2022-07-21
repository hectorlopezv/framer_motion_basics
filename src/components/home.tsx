import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { homeAnimation, homeInfoAnimation } from "../animation";
import home from "../assets/home.png";
import play from "../assets/play.png";
import NavBar from "./navbar";

interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  return (
    <Section id="home">
      <NavBar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Blossoms Parlour</h1>
          </div>
          <div className="subTitle">
            <p>
              At The Beatuy Parlour, we believe in beauty with a conscience. we
              have created a salon that offers the highest quality hair
              services.
            </p>
          </div>
          <img src={play} alt="play button" />
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Parlouar Academy</strong>
            <p>Bolossoms Academy</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>blossoms@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+1 123456789</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>332, Dunk Square</p>
            <p>0177772 Usa</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Sparking</p>
            <p>SPA Cream</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>8:00 Am to 5:00 Pm</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
export default Home;

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;

  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 90%;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
`;
