import React from "react"
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs"

const HeaderSocials = (props) => {
    return (
        <div className="header__socials">
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
    )
}

export default HeaderSocials
