import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiAlignRight } from "react-icons/fi";
import MenuSidebar from "../Components/MenuSidebar";
import MainContent from "../Components/MainContent";
import HeaderSidebar from "../Components/HeaderSidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [headerIsOpen, setheaderIsOpen] = useState(false);

    const toggleMenuSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleHeaderSidebar = () => {
        setheaderIsOpen(!headerIsOpen);
    };
    return (
        <div>
            <header>
                <div className="md:block hidden">
                    <ul className="flex justify-center gap-12 p-4 bg-black text-white">
                        <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Home</li>
                        <li className='cursor-pointer hover:text-[#9398BF] duration-150'>About</li>
                        <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Blog</li>
                        <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Contact</li>
                    </ul>
                </div>
                <div className="md:hidden flex justify-between px-4 py-2 bg-black text-white">
                    <div onClick={toggleMenuSidebar} className="flex items-center gap-2 cursor-pointer">
                        <h1>Menu</h1>
                        <AiOutlineMenu />
                    </div>
                    <div onClick={toggleHeaderSidebar} className="flex items-center gap-2 cursor-pointer">
                        <h1>Sidebar</h1>
                        <FiAlignRight />
                    </div>
                </div>
            </header>
            <div className="flex">
                <MenuSidebar isOpen={isOpen} toggleMenuSidebar={toggleMenuSidebar} />
                {/* Main content here */}
                <MainContent />
                <HeaderSidebar headerIsOpen={headerIsOpen} toggleHeaderSidebar={toggleHeaderSidebar} />
            </div>
        </div>
    );
};

export default Home;