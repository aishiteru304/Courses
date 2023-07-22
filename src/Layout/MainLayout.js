import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className='mt-20 min-h-[500px]'>
                {children}
            </div>
            <Footer />
        </>
    )
}
