import React, { useCallback } from 'react';
import bgImg from "../../assets/bg-testimonials.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      _id: "1",
      name: "Alex Wong",
      comments:
        "We Hired John to build a partition wall and door in our garage. He did a fantastic job, was very friendly and had good attention to detail. I wouldn't hesitate to use him again or recommend him to others!",
    },
    {
      _id: "2",
      name: "Raju Tamang",
      comments:
        "Absolutely thrilled with the cabinet work done in our kitchen. The craftsmanship was top-notch, and the team was punctual and professional throughout. Highly recommend their services!",
    },
    {
      _id: "3",
      name: "Bishnu Yadav",
      comments:
        "Had my living room shelving units custom built, and the result exceeded my expectations. Great communication, clean finish, and very reasonable pricing. Will definitely call them again for future projects!",
    },
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div
      className="testimonials-section"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>Client <span>Reviews</span></h2>

      <div className="embla" ref={emblaRef} style={{ width: "80%", overflow: "hidden" }}>
        <div className="embla-container" style={{ display: "flex" }}>
          {testimonials.map((testimonial) => (
            <div className="embla-slide" key={testimonial._id}>
              <p className='test-comments'>"{testimonial.comments}"</p>
              <div className='test-first-alphabet'>{testimonial.name.charAt(0)}</div>
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <button className='arrow-left-btn'  onClick={scrollPrev}> <ArrowLeft /></button>
      <button className='arrow-right-btn' onClick={scrollNext}> <ArrowRight /></button>
    </div>
  );
};

export default Testimonials;
