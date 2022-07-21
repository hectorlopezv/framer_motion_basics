import React, { Fragment } from "react";
import styled from "styled-components";
import play from "../assets/play.png";
import pricing1 from "../assets/pricing1.png";
import pricing2 from "../assets/pricing2.png";
import Title from "./title";
interface IPricing {}

const Pricing: React.FC<IPricing> = ({}) => {
  const plans = [
    {
      name: "Basic",
      price: 13,
    },
    {
      name: "Pro",
      price: 35,
    },
    {
      name: "Expert",
      price: 77,
    },
  ];

  const data = [
    {
      value: "Full face USD.250",
      type: "Basic",
    },
    {
      value: "Cheeks USD.90",
      type: "Basic",
    },
    {
      value: "Jawline USD.50",
      type: "Basic",
    },
    {
      value: "Lower Lip USD.50",
      type: "Basic",
    },
    {
      value: "Upper Lip USD.50",
      type: "Basic",
    },
    {
      value: "Under arms USD.100",
      type: "Basic",
    },
    {
      value: "Full Legs USD.450",
      type: "Pro",
    },
    {
      value: "Half Legs USD.300",
      type: "Pro",
    },
    {
      value: "Daily Backups",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    },
  ];
  return (
    <Section>
      <Title value="pricing" />
      <div className="background">
        <img src={pricing1} alt="background1" className="bg1" />
        <img src={pricing2} alt="background2" className="bg2" />
      </div>
      <div className="princing__title">
        <p>Find your pricing plan</p>
        <h2>Finding the best salons in your city could be time consuming..</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, price }, index) => {
          return (
            <div className="pricing__plan">
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <span>$</span>
                  <p>{price}</p>
                </div>
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        {name === "Basic" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
                <div className="pricing__plan__content__actions">
                  <span>Order Now</span>
                  <img src={play} alt="Order Now" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default Pricing;

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  .background {
    .bg1 {
      position: absolute;
      top: -60%;
      left: -5%auto;
      z-index: -1;
    }
    .bg2 {
      position: absolute;
      right: 0;
      bottom: 5rem;
    }
  }
  .princing__title {
    margin: 6rem 10rem;
    p {
      color: var(--seconday-primary);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }
      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: #fff;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          .line {
            text-decoration: line-through;
          }
          margin-bottom: 2rem;
        }
        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
