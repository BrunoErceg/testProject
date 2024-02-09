import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { PiHamburgerLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
const[ navIsVisibel, setNavIsVisibel ] = useState(false);
const handelNavIsVisibel = () => { setNavIsVisibel(!navIsVisibel)}

    return(
        <section className="nav">
            <h2 className="logo">BRUNO.</h2>

            <div>
                <div onClick={handelNavIsVisibel}>
                    { navIsVisibel ? <CgClose className="menuIcon"/>:<PiHamburgerLight className="menuIcon"/>}
                </div>

                <AnimatePresence>
                {navIsVisibel && (
                    <motion.div 
                        className="menuPopUp"
                        key="model"
                        initial={{  opacity:0 }}
                        animate={{ opacity:1}}
                        exit={{ opacity:0 }}
                        transition={{  duration:"1.3" }}
                    >
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div> 
                )}
                </AnimatePresence>
            </div>
        </section>


    )
}