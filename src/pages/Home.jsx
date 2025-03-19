import HeroSection from '../components/HeroSection';
import EmpowerBusiness from '../components/EmpowerBusiness';
import AIHabitScreening from '../components/AIHabitScreening';
import Sustainability from '../components/Sustainability';
import CommunityPrograms from '../components/CommunityPrograms';
import Who_We_Are from '../components/Who_We_Are';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div> 
      <HeroSection />
      <EmpowerBusiness />
      <AIHabitScreening />
      <Sustainability />
      <CommunityPrograms />
      <Who_We_Are />
      <ContactSection />
    </div>
  );
}

export default Home;
