import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { PiHamburgerLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

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
                <AnimatePresence>
                    { nav ? 
                        <motion.div 
                            initial={{ opacity:0, scale:"0" }}
                            animate={{ opacity:1, scale:"1"}}
                            exit={{ opacity:0, scale:"0,5" }}
                            transition={{ ease:"easeInOut", duration:"1.4" }}
                        >
                        <CgClose className="menuIcon"/>
                        </motion.div>
                        : 
                        <motion.div 
                            initial={{ opacity:0, scale:"0" }}
                            animate={{ opacity:1, scale:"1"}}
                            exit={{ opacity:0, scale:"0,5" }}
                            transition={{ ease:"easeInOut", duration:"1.4" }}
                        > 
                        <PiHamburgerLight className="menuIcon"/></motion.div>
                    }
                </AnimatePresence>
                </div>
                <AnimatePresence mode="popLayout">
                {nav ?
                    
                    <motion.div 
                        className="menuPopUp"
                        initial={{ opacity:0, scale:"0" }}
                        animate={{ opacity:1, scale:"1"}}
                        exit={{ opacity:0, scale:"0,5" }}
                        transition={{ ease:"easeInOut", duration:"1.4" }}
                    >
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div> : ""
                }
                </AnimatePresence>
            </div>
        </section>


    )
}