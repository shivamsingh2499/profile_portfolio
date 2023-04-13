import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

const Works = () => {
     const theme = useContext(themeContext);
     const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          magnam
          <br />
          similique velit ullam quae dolorum a
          <br />
          Lorem ipsum dolor sit amet
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </span>

        <button className="button s-button">Hire me</button>

        {/* blur */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*---------Right side-----  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork icon" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr icon" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon icon" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify icon" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook icon" />
          </div>
        </motion.div>
        {/* Background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
