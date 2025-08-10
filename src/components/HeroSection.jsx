import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                // poster="/images/video-poster.jpg"
                >
                    {/* Multiple sources for better browser compatibility */}
                    <source src="https://ik.imagekit.io/erakash/CRDT/final%20video%204-VEED.mp4" type="video/mp4" />
                    {/* <source src="/videos/banner-video.webm" type="video/webm" /> */}
                    {/* Fallback content */}
                    {/* <img
                        src="/images/fallback-image.jpg"
                        alt="Hero section background"
                        className="w-full h-full object-cover"
                    /> */}
                    Your browser does not support the video tag.
                </video>
                {/* Video overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                        Transforming Rural Development Through Technology
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
                        Join us in our mission to empower rural communities
                    </p>

                    <div className="animate-fade-in-up animation-delay-200">
                        <Link
                            to="/about"
                            className="inline-block bg-primary-light hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;