import React from "react";
import styled from "styled-components";
interface ITitle {
  value: string;
}

const Title: React.FC<ITitle> = ({ value }) => {
  return (
    <Div>
      <h1>{value}</h1>
    </Div>
  );
};
export default Title;

const Div = styled.div`
  position: relative;
  h1{
    position: absolute;
    transform: translateX(-30%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 400;
  }
`;