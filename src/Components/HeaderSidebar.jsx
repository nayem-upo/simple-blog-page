// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderSidebar = ({ headerIsOpen, toggleHeaderSidebar }) => {
    const sidebarClasses = `bg-[#ADADAD] h-screen w-[50%] md:hidden md:static fixed top-0 right-0 overflow-y-auto transform transition-transform duration-300 ease-in-out ${headerIsOpen ? 'translate-x-0' : 'translate-x-full'}`;

    return (
        <div className={sidebarClasses}>
            <div className="p-4">
                <div className="md:hidden flex justify-end mb-10">
                    <AiOutlineClose onClick={toggleHeaderSidebar} className="cursor-pointer text-2xl text-[#d8d8d8]" />
                </div>
                <ul className="flex text-black items-center gap-6 p-4 flex-col font-semibold">
                    <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Home</li>
                    <li className='cursor-pointer hover:text-[#9398BF] duration-150'>About</li>
                    <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Blog</li>
                    <li className='cursor-pointer hover:text-[#9398BF] duration-150'>Contact</li>
                </ul>
            </div>
        </div>
    );
};
HeaderSidebar.propTypes = {
    headerIsOpen: PropTypes.bool.isRequired,
    toggleHeaderSidebar: PropTypes.func.isRequired,
};


export default HeaderSidebar;