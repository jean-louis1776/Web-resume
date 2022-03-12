import React from "react"
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs"
import LOGO from "../../assets/logo.png"
import "./footer.css"

const Footer = (props) => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                <img src={LOGO} alt="Logo" />
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a
                    href="https://www.instagram.com/ilya_geek_overflow/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsInstagram />
                </a>
                <a
                    href="https://github.com/jean-louis1776"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
                <a
                    href="https://twitter.com/AleksinIlya"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>2022 &copy; ILALEX. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
