import { ReactTyped } from "react-typed";
import Nav from "./Nav";

export default function Header () {
    return (
        <header class="bg-black text-color-white hero">
            <Nav />
            <ReactTyped strings={["REACT.", "HTML5.", "CSS3."]} typeSpeed={40} backSpeed={50} loop className='typed text-color-green'></ReactTyped>
            <h1>Bruno Erceg React Devoloper</h1>
            <p>Front end devoloper from Šibenik Croatia</p>
            <button>Contact me</button>
        </header>
    )
}