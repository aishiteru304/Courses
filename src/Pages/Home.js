import React, { useState } from 'react'
import Layout from '../Layout/MainLayout'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import { AiFillSetting, AiFillFire } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { GiAchievement } from 'react-icons/gi'
import { PiSquaresFour } from 'react-icons/pi'
import BenefitItem from '../Components/BenefitItem'

import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { CoursesData } from '../Data/CoursesData'
import Course from '../Components/Course'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { MentorData } from '../Data/MentorData'
import Mentor from '../Components/Mentor'


export default function Home() {
    const breakpoints = {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4
        }
    };

    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevEl] = useState(null)

    const TopCourses = CoursesData.sort((a, b) => b.star - a.star).slice(0, 8)

    const [nextEl2, setNextEl2] = useState(null)
    const [prevEl2, setPrevEl2] = useState(null)
    const QuickCourses = CoursesData.filter(item => item.level === 0).slice(0, 8)

    const [nextEl3, setNextEl3] = useState(null)
    const [prevEl3, setPrevEl3] = useState(null)


    return (
        <Layout>
            <div className='bg-white'>
                {/* Banner section */}
                <div className='h-[400px] relative'>
                    <img alt='titleIm' src='/images/banner.jpg' className='h-full w-full object-cover'></img>
                    <div className='absolute top-0 right-0 left-0 bottom-0 bg-titleTransparent flex flex-col items-center justify-center gap-2'>
                        <div className='max-w-5xl text-center px-4'>
                            <h2 className='text-main uppercase font-semibold md:text-2xl'>khởi đầu sự nghiệp của bạn</h2>
                            <h1 className='text-white font-bold md:text-3xl mt-4'>Trở thành lập trình viên chuyên nghiệp tại BSMART</h1>
                            <p className='text-white font-normal md:text-lg mt-2 text-sm'>Với đội ngũ Mentor có nhiều năm kinh nghiệm trong việc giảng dạy cùng các khóa học chất lượng. BSMART sẽ giúp bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập trình viên chuyên nghiệp. </p>
                            <Link to='/courses' className='text-base mt-4 inline-block max-content btn-main'>Xem khóa học</Link>
                        </div>
                    </div>
                </div>

                {/* About Us section */}
                <div className='relative md:h-[450px] sm:h-[600px] xs:h-[700px] fold:h-[720px] h-[770px]'>
                    <img alt='titleIm' src='/images/background.jpg' className='h-full w-full object-cover'></img>
                    <div className='absolute top-0 right-0 left-0 bottom-0 bg-lightTransparent'>
                        <div className='mt-10 mb-5'>
                            <Title title={"Về chúng tôi"} />
                        </div>
                        <div className='max-w-5xl grid md:grid-cols-2 grid-cols-1 mx-auto'>
                            <div className='span-col-1 px-4 mt-2 mb-4'>
                                <p className='text-justify'>BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy và đào đạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm
                                    và chuyên môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhât. Hệ thống khóa học đa dang và linh hoạt, từ cơ bản đến nâng cao, giúp
                                    học viên có thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình.
                                </p>
                                <div className='flex justify-center gap-4 mt-4'>
                                    <Link to='/courses' className='sm:text-md text-xs btn-main transitions'>Xem khóa học</Link>
                                    <Link to='/' className='sm:text-md text-xs btn-main transitions'>hỗ trợ tư vấn</Link>
                                </div>
                            </div>
                            <div className='span-col-1 mt-2 px-4'>
                                <img alt='about-us' src='/images/banner-2.jpg' className='h-[300px] w-full rounded-lg object-cover'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefit section */}
                <div>
                    <div className='mt-10 mb-5'>
                        <Title title={"Điểm ưu việt tại BSmart"} />
                    </div>
                    <div className='max-w-5xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-2'>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<TiTick />}
                                title={"Học theo lộ trình, có định hướng"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<AiFillSetting />}
                                title={"Nền tảng cốt lõi trong lập trình"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<AiFillFire />}
                                title={"Mài dũa bạn qua thực tế"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<FaUserFriends />}
                                title={"Mentor tận tâm"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<PiSquaresFour />}
                                title={"Công nghệ mới, thực tế"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                        <div className='span-col-1'>
                            <BenefitItem
                                icon={<GiAchievement />}
                                title={"Trao tay chìa khóa thành công"}
                                desc={"BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học."}
                            />
                        </div>
                    </div>
                </div>

                {/* Image advertisement */}
                <div className='grid md:grid-cols-2 grid-cols-1 mt-20 px-1 md:gap-0 gap-4 overflow-hidden'>
                    <div className='span-col-1 h-[400px] relative rounded-corner-image'>
                        <img alt='advertisement' src='/images/banner-3.jpg' className='h-full object-cover rounded-lg w-full rounded-corner-image'></img>
                        <div className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]'>
                            <h2 className='text-white uppercase text-center mt-[250px] text-2xl font-semibold tracking-wider'>Trái ngành</h2>
                            <h4 className='text-white text-center mt-2 font-normal text-base'>From Zero to Hero</h4>
                        </div>
                    </div>
                    <div className='span-col-1 h-[400px] relative rounded-corner-image-reverse'>
                        <img alt='advertisement' src='/images/banner-4.jpg' className='h-full object-cover rounded-lg w-full rounded-corner-image-reverse'></img>
                        <div className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-10'>
                            <h2 className='text-white uppercase text-center mt-[250px] text-2xl font-semibold tracking-wider'>Đã biết lập trình</h2>
                            <h4 className='text-white text-center mt-2 font-normal text-base'>Đã có kiến thức tư duy lập trình và OOP</h4>
                        </div>
                    </div>
                </div>

                {/* Top courses */}
                <div>
                    <div className='mt-10 mb-5'>
                        <Title title={"Khóa học tiêu biểu"} />
                    </div>
                    <div className='max-w-5xl mx-auto px-4 relative'>
                        <Swiper
                            breakpoints={breakpoints}
                            navigation={{ nextEl, prevEl }}
                            spaceBetween={20}
                            loop={true}
                            speed={1000}
                            modules={[Navigation, Autoplay, Pagination]}
                            autoplay={true}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                        >
                            {TopCourses[0] &&
                                TopCourses.map((course, index) => (
                                    <SwiperSlide key={index} className='shadow-lg mb-8'>
                                        <Course course={course} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <button className='text-main absolute text-3xl top-[50%] left-0' ref={(node) => setPrevEl(node)}>
                            <BsCaretLeftFill />
                        </button>

                        <button className='text-main absolute text-3xl top-[50%] right-0' ref={(node) => setNextEl(node)}>
                            <BsCaretRightFill />
                        </button>
                    </div>
                </div>

                {/* Quick courses */}
                <div>
                    <div className='mt-10 mb-5'>
                        <Title title={"Khóa học cấp tốc"} />
                    </div>
                    <div className='max-w-5xl mx-auto px-4 relative'>
                        <Swiper
                            breakpoints={breakpoints}
                            navigation={{ nextEl: nextEl2, prevEl: prevEl2 }}
                            spaceBetween={20}
                            loop={true}
                            speed={1000}
                            modules={[Navigation, Autoplay, Pagination]}
                            autoplay={true}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                        >
                            {QuickCourses[0] &&
                                QuickCourses.map((course, index) => (
                                    <SwiperSlide key={index} className='shadow-lg mb-8'>
                                        <Course course={course} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <button className='text-main absolute text-3xl top-[50%] left-0' ref={(node) => setPrevEl2(node)}>
                            <BsCaretLeftFill />
                        </button>

                        <button className='text-main absolute text-3xl top-[50%] right-0' ref={(node) => setNextEl2(node)}>
                            <BsCaretRightFill />
                        </button>
                    </div>
                </div>

                {/* Mentor Section */}
                <div>
                    <div className='mt-10 mb-5'>
                        <Title title={"Mentor tiêu biểu"} />
                    </div>
                    <div className='max-w-5xl mx-auto px-4 relative'>
                        <Swiper
                            breakpoints={breakpoints}
                            navigation={{ nextEl: nextEl3, prevEl: prevEl3 }}
                            spaceBetween={20}
                            loop={true}
                            speed={1000}
                            modules={[Navigation, Autoplay, Pagination]}
                            autoplay={true}
                            pagination={{
                                // dynamicBullets: true,
                                clickable: true,
                            }}
                        >
                            {MentorData[0] &&
                                MentorData.slice(0, 12).map((mentor, index) => (
                                    <SwiperSlide key={index} className='shadow-lg mb-10'>
                                        <Mentor mentor={mentor} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <button className='text-main absolute text-3xl top-[50%] left-0 z-10' ref={(node) => setPrevEl3(node)}>
                            <BsCaretLeftFill />
                        </button>

                        <button className='text-main absolute text-3xl top-[50%] right-0 z-10' ref={(node) => setNextEl3(node)}>
                            <BsCaretRightFill />
                        </button>
                    </div>
                </div>

                {/* Road Section */}
                <div className='bg-gray-200 flex-colo py-10 mt-10 px-2'>
                    <h3 className='mb-5 font-semibold sm:text-lg text-base text-center'>Định hướng và chuẩn hóa lộ trình học tập</h3>
                    <Title title={"Học Thật, Dự Án Thật, Mentor Tận Tâm"} />
                    <div className='flex mt-4 gap-2 mb-5'>
                        <Link to='/courses' className='btn-main transitions md:text-base text-sm'>Danh sách khóa học</Link>
                        <Link to='/courses' className='btn-main transitions md:text-base text-sm'>Tư vấn lộ trình</Link>
                    </div>
                </div>

                {/* Đối tác */}
                <div className='my-10'>
                    <div className='mb-8 mt-4'>
                        <Title title={"Nhận sự tin tưởng của đối tác"} />
                    </div>
                    <div className='max-w-5xl mx-auto px-4 relative'>
                        <Swiper
                            breakpoints={breakpoints}
                            spaceBetween={40}
                            loop={true}
                            speed={1000}
                            modules={[Autoplay, Pagination]}
                            autoplay={true}
                            pagination={{
                                clickable: true,
                            }}
                        >

                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college1.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college2.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college3.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college4.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college5.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college6.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college7.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                            <SwiperSlide className='shadow-lg mb-12 h-[90px]'>
                                <img alt='college' src='/images/college1.jpg' className='w-full h-ull object-cover'></img>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
