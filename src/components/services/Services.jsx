import React from "react"
import { BiCheck } from "react-icons/bi"
import { MdOutlineDoNotDisturbAlt } from "react-icons/md"
import "./services.css"

const Services = (props) => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Layout</h3>
                    </div>

                    <div className="service__list">
                        <BiCheck className="service__list-icon" />
                        <p>
                            I can and love to work on a project when there is a
                            well-developed design of the final product. I use
                            programs like Avocode and Figma.
                        </p>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <div className="service__list">
                        <BiCheck className="service__list-icon" />
                        <p>
                            I know HTML5, CSS3 (as well as preprocessors like
                            SASS) and JavaScript. Therefore, it is not a problem
                            for me to create a website.
                        </p>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>React Web Apps</h3>
                    </div>

                    <div className="service__list">
                        <BiCheck className="service__list-icon" />
                        <p>
                            Developing applications with ReactJS is more fun
                            than just coding a website. This framework is easy
                            to use and understandable. <br />
                            <br />
                            <a
                                href="https://github.com/jean-louis1776/Web-resume"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <i>
                                    For example, this website is built using
                                    React. (Click)
                                </i>
                            </a>
                        </p>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Work With Database</h3>
                    </div>

                    <div className="service__list">
                        <BiCheck className="service__list-icon" />
                        <p>
                            At a basic level, I can use SQLite. I want to learn
                            MongoDB in the near future.
                        </p>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>React Native (Mobile Apps)</h3>
                    </div>

                    <div className="service__list">
                        <MdOutlineDoNotDisturbAlt className="service__list-icon" />
                        <p>Still at the stage of study...</p>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>ElectronJS (Desktop React Apps)</h3>
                    </div>

                    <div className="service__list">
                        <MdOutlineDoNotDisturbAlt className="service__list-icon" />
                        <p>Still at the stage of study...</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services
