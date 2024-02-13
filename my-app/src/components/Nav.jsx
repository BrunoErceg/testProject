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
                <motion.div
                    onClick={handelNavIsVisibel} 
                    whileHover={{scale:1.2, rotate:"10deg"}}
                    >
                    { navIsVisibel ? <CgClose className="menuIcon"/>:<PiHamburgerLight className="menuIcon"/>}
                </motion.div>

                <AnimatePresence>
                {navIsVisibel && (
                    <motion.div 
                        className="menuPopUp"
                        key="model"
                        initial={{  x:320 }}
                        animate={{ x:0 }}
                        exit={{ x:320 }}
                        transition={{  duration:"0.3", ease:"easeOut"}}
                    >
                        <ul>
                            <motion.li
                                initial={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,223,154,1) 100%)"}}
                                whileHover={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,223,154,1) 0%)", color:"#000"}}
                                transition={{  duration:"0.2", ease:"easeOut"}}
                                >Home
                            </motion.li>
                            <motion.li
                                initial={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,223,154,1) 100%)"}}
                                whileHover={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,223,154,1) 0%)", color:"#000"}}
                                transition={{  duration:"0.2", ease:"easeOut"}}
                                >About
                            </motion.li>
                            <motion.li
                                initial={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,223,154,1) 100%)"}}
                                whileHover={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,223,154,1) 0%)", color:"#000"}}
                                transition={{  duration:"0.2", ease:"easeOut"}}
                                >Skills
                            </motion.li>
                            <motion.li
                                initial={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,223,154,1) 100%)"}}
                                whileHover={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,223,154,1) 0%)", color:"#000"}}
                                transition={{  duration:"0.2", ease:"easeOut"}}
                                >Contact
                            </motion.li>
                        </ul>
                    </motion.div> 
                )}
                </AnimatePresence>
            </div>
        </section>


    )
}