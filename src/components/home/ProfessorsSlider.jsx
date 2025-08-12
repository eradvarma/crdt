import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderCard from './SliderCard';

const ProfessorsSlider = () => {
    // Sample professor data
    const professors = [
        {
            id: 1,
            name: "Prof. John Doe",
            designation: "Director, CRDT",
            department: "Department of Rural Development",
            image: "/assets/images/professors/prof1.jpg"
        },
        {
            id: 2,
            name: "Prof. Jane Smith",
            designation: "Senior Professor",
            department: "Agricultural Technology",
            image: "/assets/images/professors/prof2.jpg"
        },
        // Add more professors as needed
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">
                    Our Professors
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-10"
                >
                    {professors.map((professor) => (
                        <SwiperSlide key={professor.id}>
                            <SliderCard professor={professor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProfessorsSlider;