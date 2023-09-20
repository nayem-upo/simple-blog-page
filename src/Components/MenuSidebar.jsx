import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

function MenuSidebar({ isOpen, toggleMenuSidebar }) {
    const sidebarClasses = `bg-[#9398BF] h-screen w-[50%] md:w-[25%] md:static fixed top-0 left-0 overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;
    useEffect(() => {
        const isMediumOrLargeScreen = window.matchMedia('(min-width: 768px)').matches;
        if (isMediumOrLargeScreen) {
            toggleMenuSidebar()
        }
    }, []);
    return (
        <div className={sidebarClasses}>
            <div className="p-4">
                <div className="md:hidden flex justify-end">
                    <AiOutlineClose onClick={toggleMenuSidebar} className="cursor-pointer text-2xl text-[#d8d8d8]" />
                </div>
                <h1 className="text-2xl font-semibold">Sidebar</h1>
                <ul className="mt-4">
                    <li className="mb-2">
                        <select className='bg-white p-1 w-[95%] outline-none' name="Item1" id="Item1">
                            <option className='bg-[#B8B6B6] font-semibold' disabled>Item 1</option>
                            <option className='bg-[#B8B6B6] font-semibold'>Item A</option>
                            <option className='bg-[#B8B6B6] font-semibold'>Item B</option>
                        </select>
                    </li>
                    <li className="mb-2">
                        <select className='bg-white p-1 w-[95%] outline-none' name="Item1" id="Item1">
                            <option className='bg-[#B8B6B6] font-semibold' disabled>Item 2</option>
                            <option className='bg-[#B8B6B6] font-semibold' >Item C</option>
                            <option className='bg-[#B8B6B6] font-semibold' >Item D</option>
                        </select>
                    </li>
                    <li className="mb-2">
                        <select className='bg-white p-1 w-[95%] outline-none' name="Item1" id="Item1">
                            <option className='bg-[#B8B6B6] font-semibold' disabled>Item 3</option>
                            <option className='bg-[#B8B6B6] font-semibold' >Item E</option>
                            <option className='bg-[#B8B6B6] font-semibold' >Item F</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    );
}

MenuSidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenuSidebar: PropTypes.func.isRequired,
    headerIsOpen: PropTypes.bool.isRequired, // Add this line
};


export default MenuSidebar;
