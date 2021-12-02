import React from "react";
import { Icon } from "@iconify/react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterWrapper}>
          <div className={classes.LeftCol}>
            <p>
              Design made with ♥️ by me. <br /> You can follow me in social
              media or drop a message there.
            </p>
          </div>
          <div className={classes.RightCol}>
            <a
              href="https://www.linkedin.com/in/alkis-green/"
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
            >
              <Icon className={classes.Icon} icon="akar-icons:linkedin-fill" />
            </a>
            <a
              href="https://github.com/Alkis-Green"
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
            >
              <Icon className={classes.Icon} icon="akar-icons:github-fill" />
            </a>
            <a
              href="https://www.instagram.com/alcibiadeshimself/"
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
            >
              <Icon className={classes.Icon} icon="cib:instagram" />
            </a>
            <a
              href="https://www.facebook.com/alkis.gkreen/"
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
            >
              <Icon
                className={classes.Icon}
                icon="ant-design:facebook-filled"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.CopyrightContainer}>
        <div>
          Copyright &copy; 2021 All rights reserved by Alcibiades Green.
        </div>
      </div>
    </>
  );
};

export default Footer;
