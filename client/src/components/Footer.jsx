import Links from "./Links"
import { Instagram, Linkedin, Twitter } from 'feather-icons-react'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-6">
                <Links to="https://instagram.com/violentanirudh" variant='icon'>
                    <Instagram />
                </Links>
                <Links to="https://www.instagram.com/violentanirudh" variant='icon'>
                    <Linkedin />
                </Links>
                <Links to="https://www.instagram.com/violentanirudh" variant='icon'>
                    <Twitter />
                </Links>
            </div>
            <p>Made By Anirudh Singh.</p>
        </footer>
    )
}

export default Footer