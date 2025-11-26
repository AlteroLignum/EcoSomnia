'use client'
import './Testimonials.scss';
import { useState } from 'react';
import { testimonialsData } from '@/shared/data/testimonials';
import Image from 'next/image';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Group testimonials by type (we'll create 4 categories)
  const testimonialTabs = [
    { name: 'Отельеры', testimonials: testimonialsData.slice(0, 6) },
    { name: 'Сети отелей', testimonials: testimonialsData.slice(6, 12) },
    { name: 'Хостелы', testimonials: testimonialsData.slice(12, 18) },
    { name: 'Апартаменты', testimonials: testimonialsData.slice(18, 24) },
  ];

  const activeTestimonials = testimonialTabs[activeTab].testimonials;

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Лучшие бизнесы работают на EcoSomnia</h2>
        <div className="testimonials__tabs">
          {testimonialTabs.map((tab, index) => (
            <button
              key={index}
              className={`testimonials__tab ${activeTab === index ? 'testimonials__tab--active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="testimonials__grid">
          {activeTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__card">
              <div className="testimonials__avatar">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="testimonials__avatar-img"
                />
              </div>
              <p className="testimonials__quote">"{testimonial.text}"</p>
              <div className="testimonials__author">
                <span className="testimonials__author-name">{testimonial.name}</span>
                <span className="testimonials__author-title">{testimonial.position}, {testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;