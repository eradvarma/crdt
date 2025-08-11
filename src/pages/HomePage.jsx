import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutCrdt from '../components/home/AboutCrdt'
import VisionMission from '../components/home/VisionMission'
import DirectorMessage from '../components/home/DirectorMessage'

const HomePage = () => {
    return (
        <div className=''>
            <HeroSection />
            <AboutCrdt />
            <VisionMission />
            <DirectorMessage />
        </div>
    )
}

export default HomePage