import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import SliderCard from './SliderCard';


const ProfessorsSlider = () => {
    const professors = [
        {
            id: 1,
            name: "Virendra Kumar Vijay",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
        {
            id: 2,
            name: "V.M. Chariar",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
        {
            id: 3,
            name: "Anushree Malik",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
        {
            id: 4,
            name: "Jatindra K. Sahu",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
        {
            id: 5,
            name: "Priyanka Kaushal",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
        {
            id: 6,
            name: "Hariprasad",
            designation: "Professor",
            department: "Department of Rural Development",
            image: "https://placehold.co/250"
        },
    ];
    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">
                    Our Faculty
                </h2>

                <Swiper
                    modules={[Autoplay, Mousewheel, FreeMode]}
                    spaceBetween={30}
                    slidesPerView={'auto'} // Makes slides fit naturally
                    // loop={true}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                        momentumRatio: 0.5,
                        momentumBounce: true
                    }}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                        invert: false
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                    className="!overflow-visible cursor-grab active:cursor-grabbing"
                    grabCursor={true}
                >
                    {professors.map((professor) => (
                        <SwiperSlide key={professor.id} className="!w-auto">
                            <SliderCard professor={professor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Optional: Add these styles to your global CSS */}
            <style jsx global>{`
                .swiper-slide {
                    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
                }
                .swiper-wrapper {
                    align-items: center;
                }
            `}</style>
        </section>
    );
};

export default ProfessorsSlider;