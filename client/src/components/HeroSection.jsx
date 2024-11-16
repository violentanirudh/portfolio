import {Fade} from "react-awesome-reveal"

const HeroSection = () => {
    return (
        <Fade>
            <div className="w-full flex gap-6 justify-center items-center flex-grow flex-wrap sm:flex-nowrap">
                <img src="https://avatars.githubusercontent.com/u/108894819?v=4"
                     className="h-48 w-48 rounded-sm"
                     alt=""
                />
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">I am <span className="text-indigo-400">Anirudh Singh</span></h1>
                    <p className="text-zinc-200">
                        I’m a <span className="text-indigo-400">MERN stack developer</span> crafting seamless web experiences, a <span className="text-indigo-400">Data Science</span> explorer diving into new challenges, and an all-around tech enthusiast. I turn coffee into code, data into insights, and always aim to build something extraordinary.
                    </p>
                </div>
            </div>
        </Fade>
    )
}

export default HeroSection