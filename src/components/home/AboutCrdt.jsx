import React, { useEffect, useState, useRef } from "react";
import crdtImg from "/assets/images/aboutCRDT.png";

const AboutCRDT = () => {
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

                {/* Glance section with 7 images */}
                <div className="mt-12">
                    <h2
                        className="text-left text-xl font-bold text-primary-dark mb-8"
                        data-aos="fade-up"
                    >
                        CRDT at a Glance
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
                        {['PhDGlance', 'IRDGlance', 'FITTGlance', 'PatentGlance', 'PublicationsGlance', 'StartUpsGlance', 'ProjectValueGlance'].map((item, i) => (
                            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                                <img
                                    src={`./assets/images/glance/${item}.webp`}
                                    alt={`CRDT Glance ${item}`}
                                    className="w-full h-auto rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCRDT;