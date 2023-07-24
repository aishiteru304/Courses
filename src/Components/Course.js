import React from 'react'
import { FaUser } from 'react-icons/fa'
import Star from './Star'
import { GrFormSchedule } from 'react-icons/gr'

export default function Course({ course }) {
    return (
        <div className='rounded-md px-2 mt-4'>
            <div className='h-[180px] relative -mx-2'>
                <img alt='courseImage' src={course.courseImage} className='h-full w-full rounded-md object-cover'></img>
                <div className='h-16 w-16 rounded-sm absolute bg-black -bottom-4 left-3'>
                    <img alt='mentorImge' src={course.mentorImage} className='h-full rounded-sm object-cover'></img>
                </div>
                <div className='h-10 w-10 rounded-md absolute right-2 -bottom-11'>
                    <img alt='level' src={`${course.level ? `/images/icon-title-course-${course.level}.png` : '/images/hot.png'}`} className='h-full object-cover'></img>
                </div>
            </div>
            <h2 className='mt-6 text-md text-black font-semibold my-3'>{course.name}</h2>
            <div className='flex gap-2 text-sm font-normal'>
                <span className='italic font-medium text-text'>Mentor</span>
                <span className='text-main font-medium'>{course.nameMentor}</span>
            </div>
            <div className='flex gap-2 mt-1 items-center'>
                <FaUser /> <span className='font-medium'>{course.numbersStudent}</span> <span className='italic font-medium'>Học viên</span>
            </div>
            <p className='text-text font-normal line-clamp-3 leading-snug my-1'>{course.desc}</p>
            <div className='flex text-main gap-1'>
                <Star value={course.star} />
            </div>
            <div className='mt-1 flex items-center justify-between pb-3 border-b-[1px]'>
                <span className='text-red-700 font-medium'>
                    {
                        course.price.toLocaleString('vi-VN') + " VNĐ"
                    }
                </span>
                <GrFormSchedule className='text-lg' />
                <span className='italic text-sm font-medium'>
                    {course.lesson} {" Buổi học"}
                </span>
            </div>
            <button className='btn-main flex-colo w-full  mb-4 transitions'>xem chi tiết</button>
        </div>
    )
}
