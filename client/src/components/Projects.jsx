import Links from "../components/Links"

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, image, github, preview }) => {
    return (
        <div className="bg-indigo-900/10 border-2 border-indigo-800/40 rounded-sm">
            <p className="text-xl px-6 py-3">{title}</p>
            <img src={image} className="block w-full object-contain border-y-2 border-indigo-800/40" alt={title}/>
            <div className="p-2 flex justify-between items-center">
                <Links to={github} variant="normal">GitHub</Links>
                <Links to={preview} variant="normal">Preview</Links>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6">
                <ProjectCard
                    title="Tradiz"
                    image="/tradiz.png"
                    github="https://github.com/violentanirudh/tradiz"
                    preview="https://tradiz.vercel.app"
                />
                <ProjectCard
                    title="FocusLearn"
                    image="/focuslearn.png"
                    github="https://github.com/violentanirudh/focuslearn"
                    preview="https://focuslearn.vercel.app"
                />
                <ProjectCard
                    title="AgriBuddy"
                    image="/agribuddy.png"
                    github="https://github.com/violentanirudh/agribuddy"
                    preview="https://agribuddy.onrender.app"
                />
                <ProjectCard
                    title="SnipLab"
                    image="/sniplab.png"
                    github="https://github.com/violentanirudh/sniplab"
                    preview="https://sniplab.vercel.app"
                />
                <ProjectCard
                    title="DotENV"
                    image="/dotenv.png"
                    github="https://github.com/violentanirudh/dotenv"
                    preview="https://dotenv.vercel.app"
                />
            </div>
        </div>
    )
}

export default Projects