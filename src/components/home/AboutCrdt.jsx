// const crdtImg = "https://placehold.co/300"
import React, { useEffect, useState, useRef } from "react";
import crdtImg from "/assets/images/aboutCRDT.png"; // Replace with your actual image

// CountUp Hook
const useCountUp = (end, startCounting, duration = 500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return; // Only start if visible

        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [end, duration, startCounting]);

    return count;
};

const AboutCRDT = () => {
    const [startCounting, setStartCounting] = useState(false);
    const statsRef = useRef(null);

    // Observe when stats section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect(); // Only trigger once
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animated numbers
    const phds = useCountUp(119, startCounting);
    const value = useCountUp(250, startCounting);
    const pubs = useCountUp(700, startCounting);
    const patents = useCountUp(17, startCounting);
    const startups = useCountUp(4, startCounting);
    const projects = useCountUp(49, startCounting);

    return (
        <section className="bg-accent-primary py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text */}
                    <div data-aos="fade-up" data-aos-duration="800">
                        <h2 className="text-2xl font-bold text-primary-dark">
                            About CRDT
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            CRDT, IIT Delhi, established in 1979, advances sustainable rural development through research, training, and technology transfer. With impactful innovations in energy, housing, agriculture, water, and governance, it partners with communities, policymakers, and grassroots groups. Over 40+ years, CRDT has created transformative solutions, skilled practitioners, and pioneering programmes shaping inclusive, climate-resilient rural futures.
                        </p>
                        <button className="mt-5 hover:bg-primary-dark bg-primary-dark/80 text-white py-2 px-5 rounded shadow">
                            Know More &raquo; About Us
                        </button>
                    </div>

                    {/* Image */}
                    <div data-aos="fade-up" data-aos-duration="800">
                        <img
                            src={crdtImg}
                            alt="CRDT Team"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-12" ref={statsRef}>
                    <h3
                        className="text-left text-xl font-bold text-primary-dark mb-8"
                        data-aos="fade-up"
                    >
                        CRDT at a Glance (2016–2025)
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                {phds}
                            </p>
                            <p className="text-gray-600">PhDs Awarded</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                ₹{value} Cr+
                            </p>
                            <p className="text-gray-600">Project Value</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="300">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                {pubs}+
                            </p>
                            <p className="text-gray-600">Publications</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="400">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                {patents}
                            </p>
                            <p className="text-gray-600">Patents</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="500">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                {startups}
                            </p>
                            <p className="text-gray-600">Startups</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="600">
                            <p className="text-3xl font-semibold text-primary-dark/70">
                                {projects}
                            </p>
                            <p className="text-gray-600">
                                FITT & IRD Projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCRDT;
