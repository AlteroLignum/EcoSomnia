import Header from '@/widgets/header';
import Hero from '@/widgets/hero';
import CustomerLogos from '@/widgets/customer-logos';
import WhatWeDo from '@/widgets/what-we-do';
import StatsCarousel from '@/widgets/stats-carousel';
import FeatureBlocks from '@/widgets/feature-blocks';
import Testimonials from '@/widgets/testimonials';
import CustomerSupport from '@/widgets/customer-support';
import Guides from '@/widgets/guides';
import GetStarted from '@/features/get-started';
import Footer from '@/widgets/footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CustomerLogos />
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