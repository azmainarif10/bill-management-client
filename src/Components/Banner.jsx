import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Droplet, Clock, Monitor } from 'lucide-react'; // Using Lucide icons for visual interest
// --- Real-World Utility Bill Data ---

// --- Real-World Utility Bill Data ---
const SLIDES_DATA = [
    {
        id: 1,
        heading: "PAY SECURELY 🔒",
        message: "Instant payment for Electricity & Gas bills. Your transactions are 256-bit encrypted.",
        bgClass: "bg-gradient-to-b from-blue-300 to-pink-200",
        image: "https://images.unsplash.com/photo-1627960783319-4566c3c43147?auto=format&fit=crop&q=80&w=600&h=400&crop=entropy",
        Icon: Zap // Electricity icon
    },
    {
        id: 2,
        heading: "VIEW HISTORY 📈",
        message: "Track your monthly Water usage and payment history. Download PDF reports anytime.",
        bgClass: "bg-gradient-to-r from-violet-400 to-white",
        image: "https://images.unsplash.com/photo-1590402494056-34812a1f11e6?auto=format&fit=crop&q=80&w=600&h=400&crop=entropy",
        Icon: Droplet // Water icon
    },
    {
        id: 3,
        heading: "NEVER MISS 🔔",
        message: "Get timely reminders for Internet and other bills. Say goodbye to late fees forever.",
        bgClass: "bg-gradient-to-r from-pink-500 to-red-600",
        image: "https://images.unsplash.com/photo-1616885376041-866324204d80?auto=format&fit=crop&q=80&w=600&h=400&crop=entropy",
        Icon: Clock // Reminder icon
    },
];

const SimpleUtilityBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
        }, 5000); // Change slide every 5 seconds

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
                
                {/* Background Image and Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{ backgroundImage: `url(${currentSlide.image})` }}
                >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center p-8 text-white">
                    
                    {/* Text Section */}
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

                    {/* Icon/Visual Placeholder */}
                    <div className="hidden md:block text-white">
                        <currentSlide.Icon className="w-24 h-24 lg:w-32 lg:h-32 opacity-80" />
                    </div>
                </div>

                {/* Navigation Arrows */}
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

                {/* Indicator Dots */}
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