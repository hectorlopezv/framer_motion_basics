import React from "react";
import styled from "styled-components";
import Title from "./title";
interface IContact {}

const Contact: React.FC<IContact> = ({}) => {
  return (
    <Section id="contact">
      <Title value="contact" />
      <div className="contact">
        <div className="contact__title">
          <p>Stay in touch with me</p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say hi !!</h4>
            <p>
              If you have any questions simply use the following contact
              details.
            </p>
            <p>
              Business Owners to take their Online Presence to the next level.
              We are in the business of Bulk SMS, Digital Marketing.
            </p>
            <div>
              <p>
                <strong>Address:</strong> 33, Flyover Road,
              </p>
              <p>
                <strong>Email:</strong> blossoms@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.blossoms.com
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Contact;

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--seconday-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
          margin-top: 20px;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);

          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
          }
        }
        textarea {
          width: 100%;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: none;
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
          &:hover {
            border: 0.1rem solid var(--secondary-color);
            background-color: var(--secondary-color);
            color: white;
          }
        }
      }
    }
  }
`;
