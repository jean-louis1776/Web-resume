import React from "react"
import ME from "../../assets/me-about.png"
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"
import { MdOutlineCastForEducation } from "react-icons/md"
import "./about.css"

const About = (props) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>

            <article className="about__card">
              <MdOutlineCastForEducation className="about__icon" />
              <h5>Education</h5>
              <small>30+ IT-Courses</small>
            </article>
          </div>

          <p>
            Hey! I'm Ilya. I'm 25 years old and I'm from Volgograd, Russia. For
            more than a year I have been studying at the GeekBrains IT
            University at the Faculty of Fullstack JavaScript Development.
          </p>
          <p>
            There are already over 30 non-commercial projects on my GitHub. Also
            I plan to improve my skills in the field of mobile development using
            the React Native framework. Also I love making 8-bit games in PICO-8
            engine (Lua).
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
