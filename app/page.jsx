"use client"
import { useEffect } from 'react';


import Hero from '@/components/Hero';


import Contact from '@/components/Contact';

import Footer from '@/components/Footer';



import Stats from '@/components/Stats';



import LoanApplication from '@/components/LoanApplication';


const Home = () => {
  // implement locomotive scroll
  useEffect(()=> {
    const loadLocomotiveScroll = async ()=> {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return(     
  <>
    {/* <Header /> */}
    <Hero />
    {/* <AboutUs /> */}
    {/* <FixedMenu /> */}
    <Stats />
    <LoanApplication />
    {/* <ConsultantProfile /> */}
    {/* <SoftwareShowcase/> */}
    {/* <Associates /> */}
    {/* <ServicesPage /> */}
    {/* <Services /> */}
    {/* <About /> */}
    {/* <Sectors /> */}
    {/* <MainContacts /> */}
    {/* <Journey /> */}
    {/* <Work /> */}
    {/* <ClientsList /> */}
    {/* <Testimonial /> */}
    <Contact />
    <Footer />
    {/*temporary div */}
    {/* <div className="h-[3000px]"></div> */}
    </>
  );
};

export default Home