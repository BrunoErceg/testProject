import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

export default function About () {
    return(
        <section className="about bg-black text-color-white ">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FaHtml5 className="icon text-color-green" />
                        <p>HTML5</p>
                    </div>
                    <div className="col">
                        <FaCss3Alt className="icon text-color-green"/>
                        <p>CSS3</p>
                    </div>
                    <div className="col">
                        <IoLogoJavascript  className="icon text-color-green"/>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="col">
                        <FaReact className="icon text-color-green" />  
                        <p>REACT</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}