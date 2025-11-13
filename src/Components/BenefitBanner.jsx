import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const benefitData = [
  { title: "Financial Clarity", summary: "Avoid Late Fees. Real-time overview of obligations ensures on-time payments and saves money.", icon: "💰" },
  { title: "Reliable Record Keeping", summary: "Simplify Auditing & Tax Prep. Consolidate all details and generate quick, verifiable PDF reports.", icon: "📄" },
  { title: "Time & Stress Reduction", summary: "Single Source of Truth. Eliminate checking multiple accounts, reducing cognitive load and saving time.", icon: "⏰" },
  { title: "Easy Update and Delete", summary: " Update/delete features maintain current records, leading to precise financial forecasts.", icon: "🎯" },
  { title: "Cloud Storage", summary: "Access your bills securely from any device, with automatic cloud synchronization and backups.", icon: "☁️" },
  { title: "Smart Reminders", summary: "Get instant notifications for due payments and recurring bills, so you never miss a deadline again.", icon: "🔔" },
  { title: "Download Report", summary: "By clicking the download report button you get the your pay bills   pdf.", icon: "📊" },
  { title: "Secure Authentication", summary: "Keep your data safe with modern authentication systems and encrypted user sessions.", icon: "🔒" },
];

const radius = 290;
const imageCount = benefitData.length;

const tailwindStyles = {
  carousel: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 100px)",
    transformStyle: "preserve-3d",
    perspective: "1200px",
    userSelect: "none",
    cursor: "grab",
    position: "relative",
    zIndex: 1,
  },
  desktopTransform: {
    transform: "rotateX(-10deg) translateY(-40px)",
  },
  smallScreenTransform: {
    transform: "rotateX(-5deg) scale(.6) translateY(-40px)",
  },
  carouselImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-120px 0 0 -120px",
    width: "240px",
    height: "240px",
    transformOrigin: "50% 50%",
    borderRadius: "1rem",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    backgroundColor: "white",
    padding: "1rem",
    backfaceVisibility: "hidden",
  },
};

const BenefitBanner = () => {
  const carouselRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const progressObject = { value: 0 };
    let animationFrameId;

    const animate = () => {
      const images = carouselEl.querySelectorAll(".carousel-image");

      images.forEach((image, index) => {
        const theta = (index / imageCount - progressObject.value) * Math.PI * 2;
        const x = Math.sin(theta) * radius;
        const z = Math.cos(theta) * radius;
        const scale = 1 + (z / radius) * 0.2;

        image.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${(theta * 180) / Math.PI}deg) scale(${scale})`;
        image.style.zIndex = Math.round(z);
        image.style.opacity = z > 0 ? 1 : 0.5; 
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const observer = Observer.create({
      target: carouselEl,
      type: "wheel,pointer",
      onPress: () => (carouselEl.style.cursor = "grabbing"),
      onRelease: () => (carouselEl.style.cursor = "grab"),
      onChange: (self) => {
        gsap.killTweensOf(progressObject);
        const p = self.event.type === "wheel" ? self.deltaY * -0.0005 : self.deltaX * 0.05;
        gsap.to(progressObject, {
          duration: 2,
          ease: "power4.out",
          value: `+=${p}`,
        });
      },
    });

    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 600);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      observer.kill();
      cancelAnimationFrame(animationFrameId);
      gsap.killTweensOf(progressObject);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const carouselStyle = {
    ...tailwindStyles.carousel,
    ...(isSmallScreen ? tailwindStyles.smallScreenTransform : tailwindStyles.desktopTransform),
  };

  return (
    <div className="font-roboto min-h-screen  pt-12">
      <h2 className="text-4xl font-extrabold text-violet-500 text-center mb-5">
        Key Benefits of Bill Management
      </h2>

      <div className="carousel" ref={carouselRef} style={carouselStyle}>
        {benefitData.map((benefit, index) => (
          <div
            key={index}
            className="carousel-image flex flex-col justify-center items-center text-center"
            style={tailwindStyles.carouselImage}
          >
            <div className="flex flex-col justify-center items-center h-full text-gray-800">
              <div className="text-5xl mb-2">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-violet-700 mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitBanner;
