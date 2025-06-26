import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({loop:false}, [Autoplay()]);


  const testimonials = [
    {
      "_id": "1",
      "name": "Bishnu",
      "comments": "WOWWWWWWWWWWWWWWWW",
    },
    {
      "_id": "2",
      "name": "Manshi",
      "comments": "NICEEEEEEEE",
    },
    {
      "_id": "3",
      "name": "ZYX",
      "comments": "GOODDDDDDDDDDD",
    },
  ]
  return (
    <div>
      
    </div>
  )
}

export default Testimonials
