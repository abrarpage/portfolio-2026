import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import MarqueeSection from '@/components/MarqueeSection'
import ProjectsSection from '@/components/ProjectsSection'
import WorkExperience from '@/components/WorkExperience'
import Skills from './TechStack'
import React from 'react'

export default function Index() {
    return (
        <main
            style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}
        >
            <HeroSection />
            <MarqueeSection />
            <Skills/>
            <AboutSection />
            <WorkExperience />
            <ProjectsSection />
        </main>
    )
}
