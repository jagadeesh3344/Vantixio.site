import React from 'react';
import { ModalProvider } from '../contexts/ModalContext';
import { ScrollProvider } from '../contexts/ScrollContext';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';
import { ExperienceCanvas } from '../three/scenes/ExperienceCanvas';
import { Header } from '../components/navigation/Header';
import { FullScreenMenu } from '../components/navigation/FullScreenMenu';
import { ScrollIndicator } from '../components/progress/ScrollIndicator';
import { ProjectEnquiryModal } from '../components/forms/ProjectEnquiryModal';
import { ScheduleCallModal } from '../components/forms/ScheduleCallModal';

/* Exactly 10 Sequential Cinematic Scenes */
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { PhilosophySection } from '../sections/PhilosophySection/PhilosophySection';
import { ServicesSection } from '../sections/ServicesSection/ServicesSection';
import { ProductsSection } from '../sections/ProductsSection/ProductsSection';
import { ProcessSection } from '../sections/ProcessSection/ProcessSection';
import { EngineeringSection } from '../sections/EngineeringSection/EngineeringSection';
import { CreativeSection } from '../sections/CreativeSection/CreativeSection';
import { IndustriesSection } from '../sections/IndustriesSection/IndustriesSection';
import { AboutSection } from '../sections/AboutSection/AboutSection';
import { NextChapterSection } from '../sections/NextChapterSection/NextChapterSection';

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <ScrollProvider>
        <SmoothScrollProvider>
          {/* Main Container in Arctic Blue / Glacier Silver theme */}
          <div className="relative text-[#F4F7FC] selection:bg-[#A1B6CF]/30 selection:text-[#F4F7FC] min-h-screen">
            {/* Master Three.js WebGL Experience Canvas (Fixed Background) */}
            <ExperienceCanvas />

            {/* Persistent Fixed UI Chrome */}
            <Header />
            <ScrollIndicator />

            {/* Continuous 10-Scene Narrative Flow */}
            <main className="relative z-10 flex flex-col">
              {/* Scene 01: The Beginning */}
              <HeroSection />

              {/* Scene 02: Our Philosophy */}
              <PhilosophySection />

              {/* Scene 03: What We Do */}
              <ServicesSection />

              {/* Scene 04: What We Build */}
              <ProductsSection />

              {/* Scene 05: Our Approach */}
              <ProcessSection />

              {/* Scene 06: Engineering Intelligence */}
              <EngineeringSection />

              {/* Scene 07: Creative Studio */}
              <CreativeSection />

              {/* Scene 08: A World of Possibilities */}
              <IndustriesSection />

              {/* Scene 09: About Vantixio */}
              <AboutSection />

              {/* Scene 10: The Next Chapter & Master Footer */}
              <NextChapterSection />
            </main>

            {/* Global Overlays & Modals */}
            <FullScreenMenu />
            <ProjectEnquiryModal />
            <ScheduleCallModal />
          </div>
        </SmoothScrollProvider>
      </ScrollProvider>
    </ModalProvider>
  );
};

export default App;
