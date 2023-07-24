import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Courses from './Pages/Courses'
import Mentor from './Pages/Mentor'
import NotFound from './Pages/NotFound'

import Aos from 'aos'
import "aos"
import "aos/dist/aos.css"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Toaster } from 'react-hot-toast';


function App() {

  Aos.init()

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
