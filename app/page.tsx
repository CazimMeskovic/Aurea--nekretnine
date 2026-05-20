import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Benefits from '../src/components/Benefits';
import AboutPreview from '../src/components/AboutPreview';
import Testimonials from '../src/components/Testimonials';
import CTA from '../src/components/CTA';
import SekcijaTri from '@/components/SekcijaTri';
import SekcijaCetiri from '@/components/SekcijaCetiri';
import SekcijaPet from '@/components/SekcijaPet';
import Kontakt from '@/components/Kontakt';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Prodaja i najam nekretnina Gradiška | AUTRA Nekretnine',
  description:
    'Brzo, pouzdano i kvalitetno posredovanje pri kupovini, prodaji i najmu stanova, kuća i poslovnih prostora u Gradišci. Kontaktirajte nas za ponudu!',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services /> 
     
       <SekcijaTri />
       <SekcijaCetiri />
       <SekcijaPet />
       <Kontakt />
{/*  <AboutPreview /> */}
      
     
      {/* <Testimonials /> */}
   {/*    <div className=''>
  <CTA />
      </div> */}
    
    </>
  );
}
