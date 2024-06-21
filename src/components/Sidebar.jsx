import React, { useState } from 'react';
import { RiHome2Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { MdOutlineFindInPage } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    return (
        <div className="fixed top-30 left-0 h-full bg-gray-100 w-16 flex flex-col items-center justify-between shadow-lg">
            <div className="flex flex-col items-center mt-3">
                <div className="flex flex-col items-center mt-4 border-t border-gray-300">
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'home' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('home')}
                    >
                        <RiHome2Fill size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'shopping' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('shopping')}
                    >
                        <FaShoppingBag size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'person' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('person')}
                    >
                        <IoMdPerson size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'people' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('people')}
                    >
                        <BsPeopleFill size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'assignment' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('assignment')}
                    >
                        <MdAssignment size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'find' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('find')}
                    >
                        <MdOutlineFindInPage size={24} />
                    </a>
                    <a
                        className={`flex items-center justify-center w-12 h-12 mt-4 rounded hover:bg-gray-300 ${activeIcon === 'logout' ? 'text-red-500' : ''}`}
                        href="#"
                        onClick={() => handleIconClick('logout')}
                    >
                        <AiOutlineLogout size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
