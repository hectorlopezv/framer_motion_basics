import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface IuseScroll {
  threshold: number;
}
const useScroll = ({ threshold }: IuseScroll) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: threshold });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export default useScroll;
