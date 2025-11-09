import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Droplet, Clock, Monitor } from 'lucide-react';

const SLIDES_DATA = [
    {
       
         id: 1,
        heading: "VIEW HISTORY 📈",
        message: "Track your monthly Water usage and payment history. Download PDF reports anytime.",
        bgClass: "bg-gradient-to-r from-violet-400 to-white",
        image: "https://i.ibb.co.com/gL0d7nCL/caaef320a9bdd557317bc49d8d90bec8.webp",
        Icon: Droplet 
    },
    {
         id: 2,
        heading: "PAY SECURELY ",
        message: "Instant payment for Electricity & Gas bills. Your transactions are 256-bit encrypted.",
        bgClass: "bg-gradient-to-b from-blue-300 to-pink-200",
        image: "https://i.ibb.co.com/9mtCj4z4/Feature-Image-8.jpg",
        Icon: Zap
        
       
    },
    {
        id: 3,
        heading: "NEVER MISS 🔔",
        message: "Get timely reminders for Internet and other bills. Say goodbye to late fees forever.",
        bgClass: "bg-gradient-to-r from-pink-500 to-red-600",
        image: "https://i.ibb.co.com/tTg4PkZw/3d-vector-payment-not-accepted-600nw-2354902423.webp",
        Icon: Clock 
    },
];

const SimpleUtilityBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
    };

    const currentSlide = SLIDES_DATA[currentIndex];

    return (
        <div className="max-w-7xl mx-auto mt-8 mb-12 p-4">
            <div className={`relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${currentSlide.bgClass}`}>
                
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{ backgroundImage: `url('${currentSlide.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center p-8 text-white">
                    
                    <div className="max-w-xl text-center md:text-left mb-6 md:mb-0 md:mr-10">
                        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-4 drop-shadow-md">
                            {currentSlide.heading}
                        </h1>
                        <p className="text-lg sm:text-xl mb-6 font-light">
                            {currentSlide.message}
                        </p>
                        <button className="bg-violet-400 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-violet-500 transition duration-300 transform hover:scale-[1.02]">
                            Start Managing Bills
                        </button>
                    </div>

                    <div className="hidden md:block text-white">
                        <currentSlide.Icon className="w-24 h-24 lg:w-32 lg:h-32 opacity-80" />
                    </div>
                </div>

                <button
                    onClick={goToPrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition z-20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition z-20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {SLIDES_DATA.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimpleUtilityBanner;