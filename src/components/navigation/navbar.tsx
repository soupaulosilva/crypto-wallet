import Image from "next/image";
import Menu from "./menu";

export default function NavBar() {
    return (
        <nav>
            <Menu/> 
            <button>Create account</button>
        </nav>
    )
}