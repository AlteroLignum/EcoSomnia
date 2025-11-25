import BrandCarousel from '@/widgets/brand-carousel';
import './CustomerLogos.scss';

const CustomerLogos = () => {
  return (
    <section className="customer-logos">
      <div className="customer-logos__container">
        <BrandCarousel />
      </div>
    </section>
  );
};

export default CustomerLogos;