import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Benefits from '../src/components/Benefits';
import AboutPreview from '../src/components/AboutPreview';
import Testimonials from '../src/components/Testimonials';
import CTA from '../src/components/CTA';

export const metadata = {
  title: 'Košenje i održavanje zelenih površina | Trava',
  description: 'Profesionalno košenje trave, održavanje dvorišta, parkova i vrtova. Brza, pouzdana i kvalitetna usluga za privatne i poslovne klijente.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
  
 <AboutPreview />
      
     
      <Testimonials />
      <div className=''>
  <CTA />
      </div>
    
    </>
  );
}
