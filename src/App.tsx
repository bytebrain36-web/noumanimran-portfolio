import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useEasterEggs } from './hooks/useEasterEggs';
import { useCommandPalette } from './hooks/useCommandPalette';
import type { ProjectItem } from './types/portfolio';

// Core UI Components
import { BootSequence } from './components/BootSequence';
import { CustomCursor } from './components/CustomCursor';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { DigitalCvModal } from './components/DigitalCvModal';
import { EasterEggModal } from './components/EasterEggModal';

// Portfolio Sections
import { HeroSection } from './sections/HeroSection';
import { SystemPanel } from './sections/SystemPanel';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { AchievementsSection } from './sections/AchievementsSection';
import { LearningSection } from './sections/LearningSection';
import { VisionSection } from './sections/VisionSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './sections/ContactSection';

// Icons
import { Terminal } from 'lucide-react';

export function App() {
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  const { theme, toggleTheme } = useTheme();
  const { isOverrideActive, setIsOverrideActive, isKonamiActive } = useEasterEggs();
  const { isOpen: isPaletteOpen, openPalette, closePalette, togglePalette } = useCommandPalette();

  const isDark = theme === 'dark';

  return (
    <div className={`relative min-h-screen ${isKonamiActive ? 'animate-pulse' : ''}`}>
      {/* 1. Initial Quick Bootloader */}
      {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}

      {/* 2. Custom Glowing Pointer for Desktop */}
      <CustomCursor />

      {/* 3. Interactive Starry Constellation & Ambient Mesh */}
      <CyberBackground />

      {/* 4. Glassmorphic Navigation Header */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        onOpenPalette={openPalette}
        onToggleTheme={toggleTheme}
        isDarkTheme={isDark}
      />

      {/* 5. Main Content Wrapper */}
      <main className="relative z-10 space-y-8">
        <HeroSection onOpenCv={() => setIsCvOpen(true)} />
        <SystemPanel />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <JourneySection />
        <AchievementsSection />
        <LearningSection />
        <VisionSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Floating Command Center Quick Button (Bottom Right) */}
      <button
        onClick={togglePalette}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-black/80 hover:bg-black text-cyber-green border border-cyber-green/40 shadow-cyber-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Open Command Center (Ctrl+K)"
        aria-label="Open Command Center"
      >
        <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="sr-only">Command Center</span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyber-green animate-ping" />
      </button>

      {/* 8. Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <DigitalCvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={closePalette}
        onOpenCv={() => setIsCvOpen(true)}
        onToggleTheme={toggleTheme}
        isDarkTheme={isDark}
        onTriggerOverride={() => setIsOverrideActive(true)}
      />

      <EasterEggModal
        isOpen={isOverrideActive}
        onClose={() => setIsOverrideActive(false)}
      />

      {/* Konami Flash Toast */}
      {isKonamiActive && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-cyber-green text-black font-mono font-bold text-xs shadow-cyber-lg animate-bounce">
          ⚡ KONAMI PROTOCOL ENGAGED // OVERCLOCK MODE
        </div>
      )}
    </div>
  );
}

export default App;
