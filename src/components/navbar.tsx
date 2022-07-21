import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import { navAnimation } from "../animation";
import logo from "../assets/logo.png";
import useScroll from "../hooks/useScroll";
interface INavBar {}

const NavBar: FC<INavBar> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [element, controls] = useScroll({});
  return (
    <Nav
      ref={element as any}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls as any}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="logo" />
        </a>

        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};
export default NavBar;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toogle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
`;
