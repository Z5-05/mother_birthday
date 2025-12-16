import BackgroundAnimations from './components/BackgroundAnimations';
import IntroSection from './components/IntroSection';
import HeroSection from './components/HeroSection';
import PersonalVideoSection from './components/PersonalVideoSection';
import QuizSection from './components/QuizSection';
import SonsMessageSection from './components/SonsMessageSection';

function App() {
  return (
    <div className="relative">
      {/* Background animations visible throughout the entire page */}
      <BackgroundAnimations />
      
      {/* All sections */}
      <IntroSection />
      <HeroSection />
      <QuizSection />
      <SonsMessageSection />
      <PersonalVideoSection />
    </div>
  );
}

export default App;

