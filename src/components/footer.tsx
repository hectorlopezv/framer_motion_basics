import React from "react";
import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import styled from "styled-components";
interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  return (
    <Foot>
      <span> &copy; React website TRANSITION ANIMATION</span>
      <div className="footer__social__icons">
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsBehance />
      </div>
    </Foot>
  );
};
export default Footer;

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;
