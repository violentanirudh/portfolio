import { Fade } from "react-awesome-reveal"

const Contact = () => {

    const classes = {
        input: "w-full rounded-sm block px-4 py-2 bg-black/10 border-2 border-indigo-400/20 transition-all duration-100 hover:border-indigo-600 outline-none hover:ring-4 hover:ring-indigo-950",
    }

    return (
        <Fade>
            <div className="">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p>Got an Idea? Let's discuss!</p>
                    <form action="" className="mt-6 space-y-4">
                        <input type="name" name="name" placeholder="Full Name" className={classes.input} />
                        <input type="email" name="email" placeholder="Email Address" className={classes.input} />
                        <textarea name="message" placeholder="Your Thoughts!" className={`${classes.input} h-40 resize-none`} />
                        <button className="bg-indigo-600 px-6 py-2 rounded-sm hover:ring-4 hover:ring-indigo-950">Send Message</button>
                    </form>
            </div>
        </Fade>
    )
}

export default Contact