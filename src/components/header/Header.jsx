import React from "react"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import LOGO from "../../assets/logo_header.png"
import HeaderSocials from "./HeaderSocials"
import "./header.css"

const Header = (props) => {
    return (
        <header>
            <div className="container header__container">
                <a href="#" className="header__logo">
                    <img src={LOGO} alt="Brand Logo" />
                </a>
                <h5>Hello, I'm</h5>
                <h1>Ilya Aleksin</h1>
                <h5 className="text-light">Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Me" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
