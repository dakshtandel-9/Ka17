import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import PricingSection from './PricingSection'
import ReviewSection from './ReviewSection'

function HomePage() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PricingSection />
            <ReviewSection />
        </div>
    );
}

export default HomePage;