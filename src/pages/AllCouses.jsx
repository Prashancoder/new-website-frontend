import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ai from '../assets/SearchAi.png';
import { useSelector } from 'react-redux';

function AllCourses() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  const { courseData } = useSelector(state => state.course);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let courseCopy = courseData.slice();
    if (category.length > 0) {
      courseCopy = courseCopy.filter(item => category.includes(item.category));
    }
    setFilterCourses(courseCopy);
  };

  useEffect(() => {
    setFilterCourses(courseData);
  }, [courseData]);

  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
    <div className="flex min-h-screen bg-[#F8F7F3]">
      {/* TOP NAV */}
      <Nav />

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarVisible(prev => !prev)}
        className="fixed top-20 left-4 z-50 bg-white text-[#3B2F2F] px-4 py-2 rounded-xl shadow-md md:hidden border border-[#D4AF37]"
      >
        {isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        w-[260px] h-screen overflow-y-auto
        bg-white border-r border-[#E8E2D4]
        fixed top-0 left-0 py-[130px] px-6 shadow-xl
        rounded-r-3xl
        transition-transform duration-300
        ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}
        md:block md:translate-x-0
        `}
      >
        <h2 className="text-xl font-bold flex items-center gap-2 justify-center text-[#3B2F2F] mb-6">
          <FaArrowLeftLong
            className="text-[#3B2F2F] cursor-pointer hover:text-[#D4AF37]"
            onClick={() => navigate("/")}
          />
          Filter by Category
        </h2>

        {/* Filter Box */}
        <form
          className="space-y-4 bg-[#FAF8F3] border border-[#D4AF37] p-5 rounded-2xl shadow"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Search with AI Button */}

          {/* Category Filters */}
          {['Permanent Makeup', 'Cosmotology', 'Denstiry', 'Others'].map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer text-[#3B2F2F] hover:text-[#D4AF37] transition"
            >
              <input
                type="checkbox"
                className="accent-[#D4AF37] w-4 h-4 rounded-md"
                value={cat}
                onChange={toggleCategory}
              />
              {cat}
            </label>
          ))}
        </form>
      </aside>

      {/* Main Courses Section */}
      <main
        className="w-full transition-all duration-300 py-[130px] 
        md:pl-[300px] flex flex-wrap gap-8 px-6 justify-center md:justify-start"
      >
        {filterCourses?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl border border-[#E8E2D4] p-4 hover:shadow-xl transition-all duration-300"
          >
            <Card
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              category={item.category}
              id={item._id}
              reviews={item.reviews}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default AllCourses;
