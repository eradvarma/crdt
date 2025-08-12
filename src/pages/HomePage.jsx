import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutCrdt from '../components/home/AboutCrdt'
import VisionMission from '../components/home/VisionMission'
import DirectorMessage from '../components/home/DirectorMessage'
import ProfessorsSlider from '../components/home/ProfessorsSlider'

const HomePage = () => {
    return (
        <div className=''>
            <HeroSection />
            <AboutCrdt />
            <VisionMission />
            <DirectorMessage />
            {/* <ProfessorsSlider /> */}
        </div>
    )
}

export default HomePage