import { motion } from "framer-motion";
import React from "react";
import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import styled from "styled-components";
import { footerTextAnimation } from "../animation";
import useScroll from "../hooks/useScroll";
interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  const [element, controls] = useScroll({});
  return (
    <Foot ref={element as any}>
      <motion.span
        variants={footerTextAnimation}
        animate={controls as any}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
      >
        {" "}
        &copy; React website TRANSITION ANIMATION
      </motion.span>
      <motion.div
        variants={footerTextAnimation}
        animate={controls as any}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        className="footer__social__icons"
      >
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsBehance />
      </motion.div>
    </Foot>
  );
};
export default Footer;

const Foot = styled(motion.footer)`
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;
