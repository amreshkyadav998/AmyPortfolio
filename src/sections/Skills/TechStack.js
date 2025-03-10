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
} from "react-icons/si";
import { GiGearHammer } from "react-icons/gi";
import { FaCloud } from "react-icons/fa"; // Alternative for Cloudinary

function TechStack() {
  const techs = [
    { icon: <SiC />, name: "C" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <AiFillHtml5 />, name: "HTML5" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaCloud />, name: "Cloudinary" },
    { icon: <SiRazorpay />, name: "Razorpay" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <DiPython />, name: "Python" },
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
