import React, { useState } from "react";
import styled from "styled-components";
import loadmore from "../assets/loadmore.png";
interface ITestimonial {}

const Testimonial: React.FC<ITestimonial> = ({}) => {
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "SPA",
      name: "Julie Baker",
      review:
        "Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs and give you your ultimate treatment. Massages are a must and worth every penny. Highly worth a visit !",
    },
    {
      designation: "Full Makeup",
      name: "Gabreilla",
      review:
        "Perfection isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Michelle never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations",
    },
    {
      designation: "Skin",
      name: "Natalia",
      review:
        "Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs and give you your ultimate treatment. Massages are a must and worth every penny. Highly worth a visit !",
    },
  ];
  return (
    <Section>
      <div className="container">
        <div className="testimonials">
          {testimonials.map(({ designation, name, review }, index) => {
            return (
              <div
                key={index}
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
              >
                <div className="image">
                  <div className="circle2">
                    <img src={loadmore} alt="loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </div>
        <div className="controls">
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </div>
      </div>
    </Section>
  );
};
export default Testimonial;

const Section = styled.section`
  overflow: hidden;
  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;

      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .image {
          position: relative;
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }

      .hidden {
        display: none;
      }
      color: #fff;
      .designation {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;

      }
      .active{
        background-color:transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }
`;
