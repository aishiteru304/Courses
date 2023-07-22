import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCopyright, AiFillLinkedin, AiOutlineYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='bg-footer mt-10'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-6 sm:grid-cols-3 sm:px-4 px-8'>
                <div className='sm:col-span-2 w-full text-white text-xs pr-4'>
                    <Link to='/' className='block my-4 h-16'>
                        <img alt='logo' src='/images/logoFooter.png' className='h-full'></img>
                    </Link>
                    <p className='text-justify font-normal'>Chúng tôi cung cấp các khóa học chất lượng cao để cải thiện các kĩ năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có kinh nghiệm trong thực tế và giảng dạy.</p>
                    <p className='mt-2 text-sm font-semibold'>Theo dõi chung tôi tại:</p>
                    <div className='flex mt-2 gap-2 text-sm'>
                        <div className='h-[16px] w-[16px] bg-main rounded-full flex-colo cursor-pointer'> <BsFacebook /></div>
                        <div className='h-[16px] w-[16px] bg-main rounded-full flex-colo cursor-pointer'> <AiFillLinkedin /></div>
                        <div className='h-[16px] w-[16px] bg-main rounded-full flex-colo cursor-pointer'> <AiOutlineYoutube /></div>
                    </div>
                </div>
                <div className='sm:col-span-1 w-full'>
                    <h4 className='text-main my-4 text-sm font-semibold'>Menu</h4>

                    <ul className='flex flex-col text-white text-xs gap-2 font-normal'>
                        <li><Link className='hover:text-main transitons' to='/'>Trang chủ</Link></li>
                        <li><Link className='hover:text-main transitons' to='/aboutus'>Về chúng tôi</Link></li>
                        <li><Link className='hover:text-main transitons' to='/stem'>Khóa học STEM</Link></li>
                        <li><Link className='hover:text-main transitons' to='/courses'>Khóa học</Link></li>
                        <li><Link className='hover:text-main transitons' to='/mentor'>Mentor</Link></li>
                        <li><Link className='hover:text-main transitons' to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className='sm:col-span-1 w-full font-normal'>
                    <h4 className='text-main my-4 text-sm font-semibold'>Điều khoản</h4>
                    <ul className='flex flex-col text-white text-xs gap-2'>
                        <li className='hover:text-main transitons cursor-pointer'>Chính sách bảo mật</li>
                        <li className='hover:text-main transitons cursor-pointer'>Chính sách dịch vụ</li>
                    </ul>
                    <h4 className='text-main my-4 text-sm font-semibold'>Cộng tác viên</h4>
                    <ul className='flex flex-col text-white text-xs gap-2'>
                        <li className='hover:text-main transitons cursor-pointer'>Đăng kí cộng tác viên</li>
                        <li className='hover:text-main transitons cursor-pointer'>Đăng kí mentor</li>
                    </ul>
                </div>
                <div className='sm:col-span-2 w-full font-normal'>
                    <h4 className='text-main mt-4 mb-[8px] text-sm  font-semibold'>Liên hệ với chúng tôi</h4>
                    <div className='flex h-8 items-center text-white text-xs -ml-4'>
                        <img alt='position' src='/images/icon-location.png' className='h-full'></img>
                        <p>Quận 9 - Thành phố HCM</p>
                    </div>
                    <div className='flex h-8 items-center text-white text-xs -ml-1'>
                        <img alt='position' src='/images/icon-gmail.png' className='h-6'></img>
                        <p className='ml-2'>mail@gmail.com</p>
                    </div>
                    <div className='flex h-8 items-center text-white text-xs -ml-1'>
                        <img alt='position' src='/images/icon-phone.png' className='h-6'></img>
                        <p className='ml-2'>0123456789</p>
                    </div>
                </div>
            </div>

            <div className='text-white mt-6 pb-4 flex justify-center gap-2 font-normal'>
                <AiOutlineCopyright /> <span className='text-xs'>{" Bản quyền bởi aishiteru - 2023"}</span>
            </div>
        </div>
    )
}
