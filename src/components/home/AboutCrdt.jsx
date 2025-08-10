const crdtImg = "https://placehold.co/300"
import React, { useEffect, useState, useRef } from "react";
// import crdtImg from "./crdt-image.png"; // Replace with your actual image

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
            { threshold: 0.3 } // 30% of element visible
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
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text */}
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                            About CRDT
                        </h2>
                        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            Since 1878, CRDT has combined cutting-edge science with grassroots
                            wisdom to solve problems of rural India – from biogas to biomass,
                            housing to healthcare.
                        </p>
                        <button className="mt-5 bg-primary-dark hover:bg-primary-light text-white py-2 px-5 rounded shadow">
                            Know More &rarr; About Us
                        </button>
                    </div>

                    {/* Image */}
                    <div className="animate-fade-in-up">
                        <img
                            src={crdtImg}
                            alt="CRDT Team"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-12" ref={statsRef}>
                    <h3 className="text-left text-xl font-bold text-primary-dark dark:text-primary-light mb-8">
                        CRDT at a Glance (2016–2025)
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                {phds}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">PhDs Awarded</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                ₹{value} Cr+
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">Project Value</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                {pubs}+
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">Publications</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                {patents}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">Patents</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                {startups}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">Startups</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary-dark dark:text-primary-light">
                                {projects}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
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
