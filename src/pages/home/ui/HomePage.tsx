import Hero from '@/widgets/hero/Hero';
import WhatWeDo from '@/widgets/what-we-do/WhatWeDo';
import StatsCarousel from '@/widgets/stats-carousel/StatsCarousel';
import FeatureBlocks from '@/widgets/feature-blocks/FeatureBlocks';
import Testimonials from '@/widgets/testimonials/Testimonials';
import CustomerSupport from '@/widgets/customer-support/CustomerSupport';
import Guides from '@/widgets/guides/Guides';
import GetStarted from '@/features/get-started/GetStarted';
import Footer from '@/widgets/footer/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <StatsCarousel />
      <FeatureBlocks />
      <Testimonials />
      <CustomerSupport />
      <Guides />
      <GetStarted />
      <Footer />
    </>
  );
};

export default HomePage;