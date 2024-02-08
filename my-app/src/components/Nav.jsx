import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { PiHamburgerLight } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Nav() {
const[ nav, setNav ] = useState(false);
const handelNav = () => {
    setNav(!nav)
}

    return(
        <section className="nav">
            <h2 className="logo">BRUNO.</h2>

            <div>
                <div onClick={handelNav}>
                    { nav ? <CgClose className="menuIcon" /> : <PiHamburgerLight className="menuIcon"/> }
                </div>

                {nav ?
                    <motion.div 
                        className="menuPopUp"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                    >
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div> : ""
                }
            </div>
        </section>


    )
}