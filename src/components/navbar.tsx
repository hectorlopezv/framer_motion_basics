import { motion } from "framer-motion";
import React, { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
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
      state={isOpen ? true : false}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="logo" />
        </a>

        <div className="toggle">
          {isOpen ? (
            <MdClose onClick={() => setIsOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isOpen ? "show" : ""}`}>
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

interface INavProps {
  state: boolean;
}
const Nav = styled(motion.nav)<any>`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;
