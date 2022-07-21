import React from "react";
import styled from "styled-components";
interface IVideo {}

const Video: React.FC<IVideo> = ({}) => {
  return (
    <Section id="video">
      <div className="background">
        <div className="video">
          <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/l0rpabzkkZE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
};
export default Video;
const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;

  .video {
    z-index: 10;
  }
`;
