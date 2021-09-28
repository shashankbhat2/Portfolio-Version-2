import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";
import {
  FaRegLightbulb,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiNextDotJs, SiTypescript, SiSass } from "react-icons/si";
const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shashank Bhat | Front End Developer and UI Desginer</title>
        <meta
          name="description"
          content="Shashank Bhat, a budding Frontend Developer with Experience in React, Typescript, Nodejs and Nextjs. Also knows how to Design Simple yet elegant UI"
        />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <img src="assets/logo.svg" alt="Logo" />
        </div>
        <div className={styles.bulb}>
          <FaRegLightbulb size="24px" />
          <span className={styles.badge}>
            soon
          </span>
        </div>
      </nav>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} Shashank Bhat</p>
        </div>
        <div>
          <p className={styles.site_stack_trigger}>
            <div className={styles.site_stack_tooltip}>
              <div className={styles.tech_stack_icons}>
                <SiNextDotJs size="24px" />
                <SiTypescript size="24px" />
                <img src="assets/contentful.svg" height="24px" width="auto" />
                <SiSass size="24px" />
              </div>
            </div>
            site-stack
          </p>
        </div>
        <a href="/">my resume</a>
        <div className={styles.footer_social}>
          <a href="https://www.instagram.com/bhat.svg/" target="_blank">
            <FaInstagram size="18px" />
          </a>
          <a
            href="https://www.linkedin.com/in/shashank-bhat-1b9a89163/"
            target="_blank"
          >
            <FaLinkedin size="18px" />
          </a>
          <a href="https://github.com/shashankbhat2" target="_blank">
            <FaGithub size="18px" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
