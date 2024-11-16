import { Fade } from 'react-awesome-reveal'

// eslint-disable-next-line react/prop-types
const Tags = ({ title }) => {
    return (
        <span className="inline-block bg-indigo-900/10 border-2 border-indigo-800/40 py-2 px-4 rounded-sm">{title}</span>
    )
}

// eslint-disable-next-line react/prop-types
const TagsContainer = ({ title, set }) => {
    return (
        <Fade>
            <div className="">
                <h2 className="text-3xl font-bold mb-6">{ title }</h2>
                <div className="flex gap-2 flex-wrap">
                    {set.map((skill, index) => (
                        <Tags key={index} title={skill} />
                    ))}
                </div>
            </div>
        </Fade>
    )
}

export default TagsContainer