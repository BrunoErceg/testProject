import { ReactTyped } from "react-typed";
import Nav from "./Nav";
import { motion } from "framer-motion";

export default function Header () {
    return (
        <header class="bg-black text-color-white hero">
            <Nav />
            <motion.div
                initial={{ y:"+40px", opacity: 0,}}
                animate={{ y:"0px", opacity: 1, }}
                transition={{ duration:"1", delay:"0.1", ease:"backInOut",}}
                >
                <ReactTyped strings={["REACT.", "HTML5.", "CSS3."]} typeSpeed={40} backSpeed={50} loop className='typed text-color-green'></ReactTyped>
            </motion.div>
            
            <motion.h1
                initial={{ y:"+40px", opacity: 0,}}
                animate={{ y:"0px", opacity: 1, }}
                transition={{ duration:"1", delay:"0.3", ease:"backInOut",}}
                >
                Bruno Erceg React Devoloper
            </motion.h1>

            <motion.p
                initial={{ y:"+40px", opacity: 0,}}
                animate={{ y:"0px", opacity: 1, }}
                transition={{ duration:"1", delay:"0.5", ease:"backInOut",}}
                >
                Front end devoloper from Šibenik Croatia
            </motion.p>

            <motion.button
                initial={{ y:"+40px", opacity: 0,}}
                animate={{ y:"0px", opacity: 1, }}
                transition={{ duration:"1", delay:"0.7", ease:"backInOut",}}
                >
                Contact me
            </motion.button>
        </header>
    )
}