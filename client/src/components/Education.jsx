import Links from "./Links.jsx"
import { Fade } from "react-awesome-reveal"

// eslint-disable-next-line react/prop-types
const EducationCard = ({ title, description, url }) => {
    return (
        <div className="w-full space-y-2">
            <h3 className="text-xl text-indigo-400">{title}</h3>
            <p className="text-zinc-300">{description}</p>
            <Links to={url} variant="underline">Certification</Links>
        </div>
    )
}

const Education = () => {
    return (
        <Fade>
            <div className="w-full flex flex-col gap-6 tems-center">
                <h2 className="text-3xl font-bold">Education</h2>
                <EducationCard
                    title="CS50X : Introduction To Computer Science"
                    url="https://certificates.cs50.io/b94a27d5-3d9b-472b-9c61-198dd973c0cc.pdf?size=letter"
                    description="An introductory computer science course covering algorithms, data structures, and programming in languages like C, Python, and SQL."
                />
                <EducationCard
                    title="CS50P : Programming With Python"
                    url="https://cs50.harvard.edu/certificates/60563449-86e5-4fe2-8726-e6d4848c5880"
                    description="A beginner-friendly course focused on programming with Python, covering basics like loops, conditionals, data structures and object-oriented programming."
                />
                <EducationCard
                    title="Data Structures + Algorithms"
                    url="https://www.udemy.com/certificate/UC-34202c04-9592-4b47-bfbb-ac9a5cbde089/"
                    description="Successfully completed a comprehensive course on data structures and algorithms by Andrei Neagoie on Udemy, gaining strong problem-solving skills."
                />
                <EducationCard
                    title="The Web Developer Bootcamp"
                    url="https://www.udemy.com/certificate/UC-9a033920-6b91-4e01-9b09-d6bbeb5822da/"
                    description="Successfully completed The Web Developer Bootcamp 2024 by Colt Steele on Udemy, gaining a solid foundation in web development through the course."
                />
            </div>
        </Fade>
    )
}

export default Education