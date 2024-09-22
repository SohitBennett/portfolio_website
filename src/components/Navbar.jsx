import logo from "../assets/kevinRushLogo.png";
import logo2 from "../assets/SohitJoshiLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo2} alt="logo" />
        </div>  
        {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
        </div>   */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sohit-joshi-36b680235/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/SohitBennett" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://x.com/Sohitjoshi21" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/sohitjsh" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar


