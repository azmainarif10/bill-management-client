import React, { useEffect } from 'react';
import { Link } from 'react-router';

import 'aos/dist/aos.css';
 import AOS from 'aos';

const useLesson = () => [
    { skillId: 1, image: "https://via.placeholder.com/208x288?text=Lesson+1", skillName: "React Basics", price: 50, rating: 4.5 },
    { skillId: 2, image: "https://via.placeholder.com/208x288?text=Lesson+2", skillName: "Tailwind CSS", price: 75, rating: 4.8 },
    { skillId: 3, image: "https://via.placeholder.com/208x288?text=Lesson+3", skillName: "Node.js Server", price: 90, rating: 4.2 },
    { skillId: 4, image: "https://via.placeholder.com/208x288?text=Lesson+4", skillName: "Database Design", price: 60, rating: 4.6 },
];


const LessonList = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true, 
            easing: 'ease-in-out', 
        });
    }, []);

    const lessons = useLesson();

    return (
        <div>
            <div className='lg:px-40 lg:py-20'>
                <div data-aos="fade-up" className='grid grid-cols-1 gap-4 ml-10 lg:ml-0 md:grid-cols-2 lg:gap-y-32 lg:gap-x-8'>
                    {lessons.map((lesson, index) => {
                        const isOddIndex = index % 2 !== 0;
                        const aosEffect = isOddIndex ? "fade-up" : "flip-left";
                        const offsetClass = isOddIndex ? "lg:mt-40" : "";
                        
                        return (
                            <div 
               key={lesson.skillId || index} 
             data-aos={aosEffect}
             className={`lg:h-[30vh] ${offsetClass}`}
                            >
         <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img 
          src={lesson.image} 
         alt={lesson.skillName}
         className="lg:w-52 lg:h-72 rounded-lg shadow-2xl object-cover" 
                                        />
                                        
         <div>
         <h1 className="text-xl font-bold">{lesson.skillName}!</h1>
         <p className="py-2"> Lesson Price : **{lesson.price}$**</p>
        <p className="py-2"> Ratings: **{lesson.rating}**</p>
                                            
        <Link to={`/details/${lesson.skillId}`}>
         <button className="btn bg-violet-400 text-white hover:bg-violet-500">
            View Details
          </button>
             </Link>
                </div>
                </div>
              </div>
            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LessonList;