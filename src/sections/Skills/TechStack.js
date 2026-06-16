import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostman,
  SiTypescript,
  SiCanva,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiMysql,
  SiC,
  SiRazorpay,
  SiSass,
  SiFastapi,
  SiFlask,
  SiMaterialui,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiJupyter,
} from "react-icons/si";
import { GiGearHammer } from "react-icons/gi";
import { FaCloud, FaAws, FaGithub } from "react-icons/fa"; // FaCloud = Cloudinary

function TechStack() {
  const techs = [
    { icon: <SiC />, name: "C" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <AiFillHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <SiSass />, name: "SCSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiMaterialui />, name: "Material UI" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <FaCloud />, name: "Cloudinary" },
    { icon: <SiRazorpay />, name: "Razorpay" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <GiGearHammer />, name: "OOPs" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={4} sm={4} md={3} lg={2} className="tech-icons" style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
          <div style={{ fontSize: "1rem", marginTop: "10px" }}>{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
