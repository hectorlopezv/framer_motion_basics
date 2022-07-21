import React, { FC } from "react";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Milestones from "./components/milestones";
import Portfolio from "./components/portfolio";
import Pricing from "./components/pricing";
import ScrollToTop from "./components/scrooltotop";
import Services from "./components/services";
import Skills from "./components/skills";
import Testimonial from "./components/testimonials";
import Video from "./components/video";
interface IApp {}

const App: FC<IApp> = ({}) => {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonial />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </div>
  );
};
export default App;
