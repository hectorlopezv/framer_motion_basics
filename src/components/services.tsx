import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { servicesAnimations } from "../animation";
import play from "../assets/play.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import useScroll from "../hooks/useScroll";
import Title from "./title";
interface IServices {}

const Services: React.FC<IServices> = ({}) => {
  const [element, controls] = useScroll({});
  const data = [
    {
      type: "Blowout",
      text: "Shampoo and blow dry. If you are looking to celebrate your special day with us, please note we only have 3 stylists scheduled",
      image: service1,
    },
    {
      type: "Olaplex",
      text: "Hair treatment helping keep coloured hair healthy from the inside If you are looking to celebrate your special day with us.",
      image: service2,
    },
    {
      type: "Retouch",
      text: "We bring to you a bouquet of services to remain worry free about your looks. We have made effortless beauty equipment and products.",
      image: service3,
    },
  ];
  return (
    <Section ref={element as any} id="services">
      <Title value="services" />
      <div className="services">
        {data.map(({ type, text, image }, index) => {
          return (
            <motion.div
              className="services__service"
              key={type}
              variants={servicesAnimations}
              transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
              animate={controls as any}
            >
              <div className="services__service__image">
                <img src={image} alt="service 1" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Readmore" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
export default Services;

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;

    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }

      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bold;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;
