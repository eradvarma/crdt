import React from "react";
import directorImg from "/assets/images/pro-vivek-kumar.webp"; // Replace with actual director image

const DirectorMessage = () => {
    return (
        <section className="bg-accent-primary py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image */}
                    <div data-aos="fade-in" data-aos-duration="800">
                        <img
                            src={directorImg}
                            alt="Director's Vision"
                            className="rounded-lg shadow-lg w-full"
                        />
                        <h2 className="bg-[#f8efe0] text-normal mt-2 py-2 rounded text-center">Prof. Vivek Kumar <span className="font-semibold text-gray-600">(Head - CRDT)</span></h2>
                    </div>

                    {/* Right: Content */}
                    <div data-aos="fade-in" data-aos-duration="800">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                            Director’s Vision for Sustainable Rural Development
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            For over four decades, CRDT at IIT Delhi has been transforming rural lives through a unique blend of
                            community-driven action and cutting-edge science. By merging traditional wisdom with modern technology,
                            we design solutions that are sustainable, inclusive, and rooted in local culture—enhancing livelihoods,
                            conserving resources, and fostering social resilience.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                            Our mission: to build a future where rural communities thrive with dignity, prosperity, and environmental harmony.
                        </p>
                        <button className="mt-6 hover:bg-primary-dark bg-primary-dark/80 text-white py-2 px-6 rounded shadow">
                            Read More &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
