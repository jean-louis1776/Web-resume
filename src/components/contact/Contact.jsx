import React, { useRef } from "react"
import { MdOutlineMail } from "react-icons/md"
import { FaTelegramPlane } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"
import "./contact.css"

const Contact = (props) => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_USER_ID"
        )

        e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>aleksin095@gmail.com</h5>
                        <a
                            href="mailto:aleksin095@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className="contact__option-icon" />
                        <h4>Telegram</h4>
                        <h5>@ilya_js_overflow</h5>
                        <a
                            href="https://t.me/ilya_js_overflow"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+7 (987) 648-74-86</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=79876487486"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
