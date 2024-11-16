import Links from './Links.jsx'
import { Fade } from "react-awesome-reveal"

const Navbar = () => {
    return (
        <Fade>
            <div className="flex items-center justify-between">
                <Links to='/' variant="compact"><span className="text-xl font-bold">Anirudh Singh.</span></Links>
                <div className="space-x-4 flex items-center justify-between">
                    <Links to="https://github.com/violentanirudh" variant="normal">Github</Links>
                </div>
            </div>
        </Fade>
    )
}

export default Navbar