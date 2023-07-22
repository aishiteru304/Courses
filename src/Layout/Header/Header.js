import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'

const Menu = [
    {
        name: "Trang Chủ",
        link: "/"
    },
    {
        name: "Về Chúng Tôi",
        link: "/aboutus"
    },
    {
        name: "Khóa Học STEM",
        link: "/stem"
    },
    {
        name: "Khóa Học",
        link: "/courses"
    },
    {
        name: "Mentor",
        link: "/mentor"
    },
    {
        name: "Blog",
        link: "/blog"
    }
]

export default function Header() {

    const hover = 'hover:text-main transitions text-black'
    const Hover = ({ isActive }) => (isActive ? 'text-main' : hover)

    // State mobile menu
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

    return (
        <>
            {/* PC */}
            <div className='h-20 border-b-2 border-gray-800 fixed top-0 right-0 left-0 bg-white z-10'>
                <div className='h-full max-w-5xl mx-auto flex sm:px-2 sm:justify-start justify-between pr-8 pl-4'>

                    {/* Logo section */}
                    <Link to='/' className='h-full flex items-center lg:w-[250px] md:w-[180px] sm:w-[160px]'>
                        <img alt='logo' src='/images/logo.png' className='h-16'></img>
                    </Link>

                    {/* Navbar Section */}
                    <div className='flex-grow sm:flex justify-between text-black md:text-sm sm:text-xs hidden'>
                        <ul className='flex h-full items-center md:gap-5 gap-2 font-semibold'>
                            {
                                Menu.map((item, index) => (
                                    <li key={index}>
                                        <NavLink to={item.link} className={Hover}>{item.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className='h-full flex items-center relative'>
                            <img alt='icon-shopping' src='/images/icon-shopping-cart.jpg' className='h-12'></img>
                            <div className='w-4 h-4 absolute bg-main right-[8px] top-[21px] rounded-full text-white flex-colo text-sm'>0</div>
                        </div>
                    </div>

                    <div onClick={() => setIsShowMobileMenu(true)} className='sm:hidden flex items-center text-3xl cursor-pointer'>
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            {
                isShowMobileMenu &&
                <div onClick={() => setIsShowMobileMenu(false)} className='fixed top-0 right-0 bottom-0 left-0 bg-darkTransparent z-50 h-screen'>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className='bg-white absolute top-0 right-0 bottom-0 w-[250px] px-6'
                    >
                        <div className='flex justify-between h-20 items-center mt-2'>
                            <img alt='logo' src='/images/icon-logo-mobile.png' className='h-full'></img>
                            <RiCloseFill onClick={() => setIsShowMobileMenu(false)} className='h-10 w-10 cursor-pointer' />
                        </div>

                        <div className='h-12 relative'>
                            <img alt='icon-shopping' src='/images/icon-shopping-cart.jpg' className='h-12'></img>
                            <div className='w-4 h-4 absolute bg-main left-[42px] top-[6px] rounded-full text-white flex-colo text-sm'>0</div>
                        </div>

                        <div className='mt-2'>
                            <ul className='flex flex-col font-medium'>
                                {
                                    Menu.map((item, index) => (
                                        <li key={index} className='uppercase py-1 border-b-2 border-gray-100'>
                                            <NavLink to={item.link} className={Hover}>{item.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='mt-4 relative flex items-center w-full'>
                            <input
                                type='text'
                                placeholder='Tìm kiếm khóa học'
                                className='outline-none border-2 border-gray-200 pl-2 py-1 rounded-md placeholder:text-sm placeholder:text-gray-400 placeholder:font-medium font-medium text-text'
                            />
                            <AiOutlineSearch className='absolute right-[10px] cursor-pointer' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
