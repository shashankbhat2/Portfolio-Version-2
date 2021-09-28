import styles from "../styles/Home.module.scss";
import { createClient } from "contentful";
import { FaLink } from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiHtml5,
  SiMongodb,
  SiNetlify,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";

export async function getStaticProps() {
  const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  });

  const res = await client.getEntries({
    content_type: "projectName",
  });

  return {
    props: {
      projects: res.items.splice(0, 4),
    },
    revalidate: 1,
  };
}

const Home = ({ projects }: any) => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img src="assets/me.png" alt="Me!" height="200px" width="180px" />
        <h2>Hi, Shashank Bhat here 👋! </h2>
        <p>
          budding Full Stack Developer & UI Designer with a constant urge to
          learn new technologies and work on new challenges!
        </p>
        <div className={styles.hero_cta}>
          <a href="mailto:shashank.bhat2525@gmail.com">
            Have a project? Hit me up!
          </a>
          <p>scroll for more!</p>
        </div>
      </div>
      <div className={styles.work_container}>
        <h2>Work</h2>
        <div className={styles.work_grid}>
          {projects.map((project: any, i: number) => (
            <div
              className={styles.work_card}
              key={i}
              style={{ background: project.fields.projectBaseColor }}
            >
              <div className={styles.work_details}>
                <div>
                  <p>{project.fields.projectName}</p>
                  <p>{project.fields.projectType}</p>
                </div>
                <a href={project.fields.projectLink} target="_blank">
                  <FaLink size="14px" />
                </a>
              </div>
              <img src={project.fields.projectThumb.fields.file.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tech_stack_container}>
        <h2>Stack</h2>
        <p>
          I constantly look out for new libraries and frameworks, while also
          improving my knowledge on the fundamentals.{" "}
        </p>
        <p>Here are some of my tools: </p>
        <div className={styles.tech_stack_block}>
          <div className={styles.tech_stack_tab}>Frontend</div>
          <SiReact size="22px" />
          <SiHtml5 size="22px" />
          <SiSass size="22px" />
          <SiNextDotJs size="22px" />
          <SiTypescript size="22px" />
        </div>
        <div className={styles.tech_stack_block}>
          <div className={styles.tech_stack_tab}>Backend</div>
          <SiFirebase size="22px" />
          <SiNodeDotJs size="22px" />
          <SiNetlify size="22px" />
          <SiMongodb size="22px" />
        </div>
        <div className={styles.tech_stack_block}>
          <div className={styles.tech_stack_tab}>Design & video</div>
          <SiFigma size="22px" />
          <SiFramer size="22px" />
          <SiAdobeaftereffects size="22px" />
        </div>
      </div>
      <div className={styles.banner}>
        <h2>Lets Work Together?</h2>
        <a href="mailto:shashank.bhat2525@gmail.com">Email Me</a>
      </div>
    </div>
  );
};

export default Home;
