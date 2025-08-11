import React from 'react';

const VisionMission = () => {
    return (
        <section className="relative min-h-screen overflow-hidden py-16 px-4 flex items-center">
            {/* Parallax Background */}
            <div
                className="fixed inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: "url('./assets/images/home-vision-mission.webp')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-white px-4">
                {/* Vision Card */}
                <div
                    className="bg-primary-light/90 p-4 md:p-6 rounded-lg shadow-xl overflow-y-auto max-h-[80vh]"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-light border-b-2 border-secondary-light pb-2">
                        VISION
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        To empower rural communities with appropriate technological frameworks by harnessing the power of scientific and technological advancements through participatory approaches. CRDT IIT Delhi envisions building resilient and sustainable rural ecosystems by integrating cutting-edge innovation with traditional knowledge and local wisdom.
                    </p>
                </div>

                {/* Mission Card */}
                <div
                    className="bg-highlight-second p-4 md:p-6 rounded-lg shadow-xl overflow-y-auto max-h-[80vh]"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-light border-b-2 border-secondary-light pb-2">
                        MISSION
                    </h2>
                    <ul className="space-y-3 text-base md:text-lg">
                        {[
                            "Identify strengths of rural communities and use participatory approaches to develop innovative S&T solutions to improve livelihood opportunities and quality of life in rural areas.",
                            "Strengthen synergy between traditional knowledge practices and modern knowledge for holistic rural development.",
                            "Develop a pool of sensitised and trained manpower by imparting teaching, training and skilling on diverse topics related to various aspects of rural development.",
                            "Create multi-dimensional impact by partnering with grassroot organisations, academic & research institutes, policy think tanks and government bodies."
                        ].map((item, i) => (
                            <li key={i} className="flex" data-aos="fade-right" data-aos-delay={(i + 1) * 100}>
                                <span className="text-secondary-light mr-2 mt-1">•</span>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
