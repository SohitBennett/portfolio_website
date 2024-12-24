// import logo from "../assets/kevinRushLogo.png";
// import logo2 from "../assets/SohitJoshiLogo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";


// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
//             <img className="mx-2 w-16" src={logo2} alt="logo" />
//         </div>  
//         {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <FaLinkedin />
//             <FaGithub />
//             <FaTwitter />
//             <FaInstagram />
//         </div>   */}
//         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <a href="https://www.linkedin.com/in/sohit-joshi-36b680235/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin />
//             </a>
//             <a href="https://github.com/SohitBennett" target="_blank" rel="noopener noreferrer">
//                 <FaGithub />
//             </a>
//             <a href="https://x.com/Sohitjoshi21" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter />
//             </a>
//             <a href="https://www.instagram.com/sohitjsh" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//             </a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar




// -------------------New Navbar-----------


import React, { useState } from 'react';
import logo from "../assets/SohitJoshiLogo.png";
import logo3 from "../assets/newLogo_erased.png";
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='mt-6 mb-20  top-4 left-0 right-0 z-50 m-2'>
        <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl
        mx-auto px-4 py-3 flex justify-between items-center rounded-xl border
        border-neutral-800'>
            <img src={logo3} alt="logo" width={100} height={24} style={{ marginLeft: '16px' }} />
            <div className='hidden md:flex space-x-6'>
                {/* <a href="#skills" className='hover:text-neutral-200'>
                    Skills
                </a> */}
                <Link 
                    to="skills" 
                    smooth={true} 
                    duration={1000} 
                    className='hover:text-neutral-200 cursor-pointer text-xl transition-transform duration-200 hover:scale-105'>
                    Skills👨🏻‍💻
                </Link>
                <Link 
                    to="projects" 
                    smooth={true} 
                    duration={1000} 
                    className='hover:text-neutral-200 cursor-pointer text-xl transition-transform duration-200 hover:scale-105'
                    >
                    Projects🛠️
                </Link>

                <Link 
                    to="aboutme" 
                    smooth={true} 
                    duration={1500} 
                    className='hover:text-neutral-200 cursor-pointer text-xl transition-transform duration-200 hover:scale-105'>
                    About Me🙋🏻‍♂️
                </Link>
                <Link 
                    to="contactme" 
                    smooth={true} 
                    duration={1500} 
                    className='hover:text-neutral-200 cursor-pointer text-xl transition-transform duration-200 hover:scale-105'>
                    Contact Me↗
                </Link>
            </div>

            { /* Right: buttons (hidden on mobile) */}
            {/* <div className='hidden md:flex space-x-4 items-center'> */}


            <div className='hidden md:flex items-center justify-center gap-4 text-2xl mr-5'>
                <SocialIcon 
                    url="https://www.linkedin.com/in/sohit-joshi-36b680235/" 
                    style={{ height: 35, width: 35, borderRadius: '10%' }} 
                    target="_blank" 
                    rel="noopener noreferrer" // Opens in a new tab securely
                    className="transition-transform duration-200 hover:scale-125"
                />
                <SocialIcon 
                    url="https://github.com/SohitBennett" 
                    style={{ height: 40, width: 40 }} 
                    target="_blank" 
                    rel="noopener noreferrer" // Opens in a new tab securely
                    className="transition-transform duration-200 hover:scale-125"
                />
                <a 
                    href="https://twitter.com/Sohitjoshi21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%' }}
                    className="transition-transform duration-200 hover:scale-125"
                >
                    <FaTwitter size={20} color="#1DA1F2" /> 
                </a>
                <SocialIcon 
                    url="https://www.instagram.com/sohitjsh" 
                    style={{ height: 35, width: 35 }} 
                    target="_blank" 
                    rel="noopener noreferrer" // Opens in a new tab securely
                    className="transition-transform duration-200 hover:scale-125"
                />
            </div>

            { /*Hamburger icon for mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white 
                focus:outline-none' aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                    {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                </button>
            </div>
        </div>

        { /* Mobile Menu */}
        {isOpen && (
            <div className='md:hidden bg-neutral-900/60 backdrop-blur-md border
            border-neutral-800 p-4 rounded-xl mt-2'>
                <div className='flex flex-col space-y-4'>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={1000} 
                        className='hover:text-neutral-200 cursor-pointer'>
                        Skills
                    </Link>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        duration={1000} 
                        className='hover:text-neutral-200 cursor-pointer'>
                        Projects
                    </Link>
                    <Link 
                        to="aboutme" 
                        smooth={true} 
                        duration={1500} 
                        className='hover:text-neutral-200 cursor-pointer'>
                        About Me
                    </Link>
                    <Link 
                        to="contactme" 
                        smooth={true} 
                        duration={1500} 
                        className='hover:text-neutral-200 cursor-pointer'>
                        Contact Me
                    </Link>
                    <div className='flex items-center justify-center gap-6 text-2xl'>
                        <SocialIcon 
                            url="https://www.linkedin.com/in/sohit-joshi-36b680235/" 
                            style={{ height: 35, width: 35, borderRadius: '10%'}} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        />
                        <SocialIcon 
                            url="https://github.com/SohitBennett" 
                            style={{ height: 40, width: 40 }} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        />
                        <a 
                            href="https://twitter.com/Sohitjoshi21" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%' }}
                        >
                            <FaTwitter size={20} color="#1DA1F2" /> 
                        </a>
                        <SocialIcon 
                            url="https://www.instagram.com/sohitjsh" 
                            style={{ height: 35, width: 35 }} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        />
                    </div>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar
