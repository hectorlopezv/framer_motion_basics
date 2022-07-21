import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
interface IScrollToTop {}

const ScrollToTop: React.FC<IScrollToTop> = ({}) => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    const eventFn = debounce(() => {
      console.log(window.scrollY > 100);
      window.scrollY > 100 ? setvisible(true) : setvisible(false);
    }, 200);
    window.addEventListener("scroll", eventFn);

    return () => {
      window.removeEventListener("scroll", eventFn);
    };
  });
  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
};
export default ScrollToTop;

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    transition: 0.4s ease-in-out;
    svg {
      color: white;
      font-size: 1.3rem;
    }
  }
`;
