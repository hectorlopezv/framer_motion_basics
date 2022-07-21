import React from "react";
import styled from "styled-components";
import { videoAnimations } from "../animation";
import useScroll from "../hooks/useScroll";
import {motion} from "framer-motion";
interface IVideo {}

const Video: React.FC<IVideo> = ({ }) => {
  const[element, controls] = useScroll({});
  return (
    <Section id="video" ref={element as any}>
      <div className="background" />
      <motion.div
        variants={videoAnimations}
        animate={controls as any}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        className="video"
      >
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/l0rpabzkkZE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
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
