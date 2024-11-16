import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Links = ({ to, variant="button", children }) => {
    const variants = {
        "button": "bg-transparent px-4 py-2 hover:bg-indigo-600 transition-all duration-150",
        "normal": "px-4 py-2 hover:bg-transparent transition-all duration-150",
        "compact": "py-2",
        "underline": "py-2 underline underline-offset-8 decoration-2",
        "icon": "bg-transparent h-12 w-12 hover:bg-indigo-600 transition-all duration-150",
    }
    return (
        <Link to={to} className={`rounded-sm inline-flex justify-center items-center ${variants[variant]}`}>
            {children}
        </Link>
    )
}



export default Links