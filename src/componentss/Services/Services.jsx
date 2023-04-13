import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './SHIVAM CV.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';
const Services = () => {
  const transition={duration:1,type:'spring'}
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          magnam
          <br />
          similique velit ullam quae dolorum a.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        {/* blur */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "16rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma,Sketch, Photoshop,Adobe, Adobe xd"}
          />
        </motion.div>
        {/* Second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css,javaScript,React,java,c"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
        style={{ top: "19rem", left: "14rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate!"
            }
          />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        
      </div>
    </div>
  );
};

export default Services;
