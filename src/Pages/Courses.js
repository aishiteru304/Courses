import React, { useState, useEffect } from 'react'
import Layout from '../Layout/MainLayout'
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineCaretDown, AiOutlineCaretRight } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import CheckBox from '../Components/CheckBox'
import Course from '../Components/Course'
import { CoursesData } from '../Data/CoursesData'
import { toast } from 'react-hot-toast'
import ReactPaginate from "react-paginate";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import NumberInput from '../Components/NumberInput'

const Categories = ["online", "offline"]
const Fields = ["Back-End", "Front-End", "Database", "Cấp tốc", "Other", "STEM"]


export default function Courses() {

    const [isShowPrice, setIsShowPrice] = useState(false)
    const [isShowCategory, setIsShowCategory] = useState(false)
    const [isShowLevel, setIsShowLevel] = useState(false)
    const [isShowFields, setIsShowFields] = useState(false)

    // HANDLE PRICE
    // const [price, setPrice] = useState(["0", "10.000.000"])
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(10000000)
    const [isErrPrice, setIsErrPrice] = useState([false, false])


    const handleFromPrice = (values) => {
        let { value } = values;
        setPriceFrom(parseInt(value))
    }

    const handleToPrice = (values) => {
        let { value } = values;
        setPriceTo(parseInt(value))
    }


    // Bắt lỗi price
    useEffect(() => {
        if (!isNaN(priceFrom) && !isNaN(priceTo)) {
            setIsErrPrice([false, false])

            if (parseInt(priceFrom) >= parseInt(priceTo)) setIsErrPrice([false, true])
            else setIsErrPrice([false, false])
        }
        else setIsErrPrice([true, false])
    }, [priceFrom, priceTo])


    // HANDLE CATEGORY
    const [category, setCategory] = useState([false, false])

    // Hàm xử lí category
    const handleOnchangeCategory = (e) => {
        let { name } = e.target
        if (category[name]) setCategory([false, false])
        else {
            const newCategory = [false, false]
            newCategory[name] = true
            setCategory(newCategory)
        }
    }

    // HANDLE LEVEL
    const [level, setLevel] = useState([false, false, false, false])

    // Hàm xử lí level
    const handleOnchangeLevel = (e) => {
        let { name } = e.target
        if (level[name]) setLevel([false, false, false, false])
        else {
            const newLevel = [false, false, false, false]
            newLevel[name] = true
            setLevel(newLevel)
        }
    }

    // HANDLE FIELDS
    const [fields, setFields] = useState([false, false, false, false, false, false])
    // Hàm xử lí fields
    const handleOnchangefields = (e) => {
        let { name } = e.target
        if (fields[name]) setFields([false, false, false, false, false, false])
        else {
            const newFields = [false, false, false, false, false, false]
            newFields[name] = true
            setFields(newFields)
        }
    }

    // HANDLE SORT
    const [sort, setSort] = useState("Sắp xếp khóa học")
    const [coursesCurrent, setCoursesCurrent] = useState([...CoursesData])
    const handleSortChange = (e) => {
        setSort(e.target.value)
        if (e.target.value === "Từ dễ đến khó") {
            setCoursesCurrent([...coursesCurrent.sort((a, b) => a.level - b.level)])
        }
        else if (e.target.value === "Từ khó đến dễ") {
            setCoursesCurrent([...coursesCurrent.sort((a, b) => b.level - a.level)])
        }
        else if (e.target.value === "Từ giá thấp đến cao") {
            setCoursesCurrent([...coursesCurrent.sort((a, b) => a.price - b.price)])
        }
        else if (e.target.value === "Từ giá cao đến thấp") {
            setCoursesCurrent([...coursesCurrent.sort((a, b) => b.price - a.price)])
        }
        else setCoursesCurrent([...CoursesData])
    }


    const handleSearch = () => {
        if (isErrPrice[0] || isErrPrice[1])
            toast("Vui lòng nhập đúng giá trị giá", { style: { color: 'red', fontWeight: '500' } })
        else {
            let temp = [...CoursesData]
            temp = temp.filter((item) => item.price >= priceFrom && item.price <= priceTo)

            const categorySelected = category.indexOf(true)
            if (categorySelected > -1) {
                temp = temp.filter((item) => item.category.toLowerCase() === Categories[categorySelected].toLowerCase())
            }

            const levelSelected = level.indexOf(true)
            if (levelSelected > -1) {
                temp = temp.filter((item) => item.level === levelSelected + 1)
            }

            const fieldsSelected = fields.indexOf(true)
            if (fieldsSelected > -1) {
                temp = temp.filter((item) => item.fields.toLowerCase() === Fields[fieldsSelected].toLowerCase())
            }
            setCoursesCurrent(temp)
        }
    }

    // Paging Section
    const itemsPerPage = 6
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offset = currentPage * itemsPerPage;
    const currentData = coursesCurrent.slice(offset, offset + itemsPerPage);

    return (
        <Layout>
            <div className='bg-white'>

                {/* Banner section */}
                <div className='h-[300px] relative'>
                    <img alt='titleIm' src='/images/banner-2.jpg' className='h-full w-full object-cover'></img>
                    <div className='absolute top-0 right-0 left-0 bottom-0 bg-titleTransparent flex flex-col items-center justify-center gap-2'>
                        <h3 className='text-sm text-main'>Danh sách khóa học</h3>
                        <div className='flex text-white gap-2 text-xs items-center'>
                            <Link to='/' className='hover:text-main'>Trang chủ</Link>
                            <AiOutlineRight />
                            {"Khóa học"}
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className='max-w-5xl mx-auto'>
                    <div className='mt-20 px-4 py-2 flex sm:flex-row flex-col'>
                        <div className='md:w-1/4 pr-2 sm:w-1/2 w-full'>
                            <div className='flex justify-start gap-2 items-center'>
                                {
                                    isShowPrice ?
                                        <AiOutlineCaretDown onClick={() => setIsShowPrice(!isShowPrice)} className='sm:hidden' /> :
                                        <AiOutlineCaretRight onClick={() => setIsShowPrice(!isShowPrice)} className='sm:hidden' />
                                }
                                <h2 className='text-black uppercase text-sm font-semibold'>Khoảng giá</h2>
                            </div>

                            <div className={`sm:block ${isShowPrice ? 'block' : 'hidden'}`}>
                                <h4 className='text-text text-xs my-1 font-semibold'>Từ giá</h4>
                                <div className='relative'>
                                    <NumberInput
                                        className='w-full outline-none rounded-md py-1 pl-2 border-2 border-gray-200 placeholder:text-gray-400 placeholder:font-semibold font-semibold text-text'
                                        onChange={handleFromPrice}
                                        value={priceFrom}
                                    />
                                </div>
                                <h4 className='text-text text-xs my-1 font-semibold'>Đến giá</h4>
                                <div className='relative'>
                                    <NumberInput
                                        className='w-full outline-none rounded-md py-1 pl-2 border-2 border-gray-200 placeholder:text-gray-400 placeholder:font-semibold font-semibold text-text'
                                        onChange={handleToPrice}
                                        value={priceTo}
                                    />
                                </div>
                            </div>

                            {
                                isErrPrice[1] &&
                                <div className='text-red-600 flex items-center mt-1 gap-2 text-xs font-semibold'> <BiErrorCircle /> {"Từ giá phải nhỏ hơn đến giá"}</div>
                            }
                            {
                                isErrPrice[0] &&
                                <div className='text-red-600 flex items-center mt-1 gap-2 text-xs font-semibold'> <BiErrorCircle /> {"Không được bỏ trống"}</div>
                            }

                            <div className='flex justify-start gap-2 items-center'>
                                {
                                    isShowCategory ?
                                        <AiOutlineCaretDown onClick={() => setIsShowCategory(!isShowCategory)} className='sm:hidden mt-2' /> :
                                        <AiOutlineCaretRight onClick={() => setIsShowCategory(!isShowCategory)} className='sm:hidden mt-2' />
                                }
                                <h2 className='text-black uppercase text-sm mt-2 font-semibold'>Hình thức</h2>
                            </div>

                            <div className={`sm:block ${isShowCategory ? 'block' : 'hidden'}`}>
                                {
                                    Categories.map((item, index) => (
                                        <CheckBox key={index} name={index} checked={category[index]} onChange={handleOnchangeCategory} title={item} />
                                    ))
                                }
                            </div>

                            <div className='flex justify-start gap-2 items-center'>
                                {
                                    isShowLevel ?
                                        <AiOutlineCaretDown onClick={() => setIsShowLevel(!isShowLevel)} className='sm:hidden mt-2' /> :
                                        <AiOutlineCaretRight onClick={() => setIsShowLevel(!isShowLevel)} className='sm:hidden mt-2' />
                                }
                                <h2 className='text-black uppercase text-sm mt-2 font-semibold'>Trình độ</h2>
                            </div>
                            <div className={`sm:block ${isShowLevel ? 'block' : 'hidden'}`}>
                                <div className='flex h-6 justify-between items-center'>
                                    <CheckBox name="0" checked={level[0]} onChange={handleOnchangeLevel} title="Dễ" />
                                    <img alt='level' src='/images/icon-title-course-1.png' className='h-8'></img>
                                </div>
                                <div className='flex h-6 justify-between items-center'>
                                    <CheckBox name="1" checked={level[1]} onChange={handleOnchangeLevel} title="Trung bình" />
                                    <img alt='level' src='/images/icon-title-course-2.png' className='h-8'></img>

                                </div>
                                <div className='flex h-6 justify-between items-center'>
                                    <CheckBox name="2" checked={level[2]} onChange={handleOnchangeLevel} title="Khó" />
                                    <img alt='level' src='/images/icon-title-course-3.png' className='h-8'></img>

                                </div>
                                <div className='flex h-6 justify-between items-center'>
                                    <CheckBox name="3" checked={level[3]} onChange={handleOnchangeLevel} title="Cực khó" />
                                    <img alt='level' src='/images/icon-title-course-4.png' className='h-8'></img>
                                </div>
                            </div>

                            <div className='flex justify-start gap-2 items-center'>
                                {
                                    isShowFields ?
                                        <AiOutlineCaretDown onClick={() => setIsShowFields(!isShowFields)} className='sm:hidden mt-2' /> :
                                        <AiOutlineCaretRight onClick={() => setIsShowFields(!isShowFields)} className='sm:hidden mt-2' />
                                }
                                <h2 className='text-black uppercase text-sm mt-2 font-semibold'>Lĩnh vực</h2>
                            </div>
                            <div className={`sm:block ${isShowFields ? 'block' : 'hidden'}`}>
                                {
                                    Fields.map((item, index) => (
                                        <CheckBox key={index} name={index} checked={fields[index]} onChange={handleOnchangefields} title={item} />
                                    ))
                                }
                            </div>

                            <button onClick={handleSearch} className='btn-main flex-colo text-sm px-auto w-full mt-3 transitions mb-4'>Tìm kiếm</button>
                        </div>

                        {/* List courses section */}
                        <div className='md:w-3/4 sm:w-1/2 w-full pl-2'>
                            <div className='flex justify-between items-center w-full'>
                                <h2 className='text-black text-sm font-semibold'>{coursesCurrent.length} {" Khóa học"}</h2>
                                <select value={sort} onChange={handleSortChange} className='text-sm text-text border border-gray-300 rounded px-2 py-1 cursor-pointer min-w-[160px] font-semibold'>
                                    <option value="Sắp xếp khóa học">Sắp xếp khóa học</option>
                                    <option value="Từ dễ đến khó">Từ dễ đến khó</option>
                                    <option value="Từ khó đến dễ">Từ khó đến dễ</option>
                                    <option value="Từ giá thấp đến cao">Từ giá thấp đến cao</option>
                                    <option value="Từ giá cao đến thấp">Từ giá cao đến thấp</option>
                                </select>
                            </div>
                            {
                                coursesCurrent[0] ?
                                    <>
                                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-4'>
                                            {
                                                currentData.map((course, index) => (
                                                    <div key={index} className='col-span-1 min-h-[300px] shadow-lg rounded-md bg-white'>
                                                        <Course course={course} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <ReactPaginate
                                            previousLabel={<BsFillCaretLeftFill />}
                                            nextLabel={<BsFillCaretRightFill />}
                                            pageCount={Math.ceil(coursesCurrent.length / itemsPerPage)}
                                            onPageChange={handlePageChange}
                                            containerClassName="flex-rows gap-4 mt-8"
                                            previousLinkClassName={"pagination__link text-main"}
                                            nextLinkClassName={"pagination__link text-main"}
                                            disabledClassName={"hidden"}
                                            activeClassName={"bg-main text-white px-2 rounded-full"}
                                        />
                                    </>
                                    :
                                    <div>
                                        <img alt='empty' src='/images/empty.gif' className='h-full object-cover' />
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
