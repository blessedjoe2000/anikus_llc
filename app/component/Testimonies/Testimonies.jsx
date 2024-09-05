"use client";

import Glider from "glider-js";
import "glider-js/glider.min.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import testimony1 from "/public/images/web.jpg";
import testimony2 from "/public/images/ai-chatbot.jpg";
import testimony3 from "/public/images/cybersecurity.jpg";
import testimony4 from "/public/images/web.jpg";
import testimony5 from "/public/images/ai-chatbot.jpg";

export default function Testimonies() {
  const gliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const glider = new Glider(gliderRef.current, {
      slidesToShow: 1,
      dots: "#dots",
      draggable: true,
      rewind: true,
    });

    // Function to start or reset autoplay
    const startAutoplay = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (glider) {
          // Check if the current slide is the last one
          if (glider.page === glider.slides.length - 1) {
            glider.scrollItem(0); // Restart from the first slide
          } else {
            glider.scrollItem(glider.page + 1); // Move to the next slide
          }
        }
      }, 3000); // Autoplay interval in milliseconds
    };

    // Start autoplay on mount
    startAutoplay();

    // Reset autoplay on click
    const handleInteraction = () => {
      startAutoplay(); // Reset the autoplay interval on click
    };

    // Pause autoplay on mouseover
    const handleMouseOver = () => {
      clearInterval(intervalRef.current);
    };

    // Resume autoplay on mouseout
    const handleMouseOut = () => {
      startAutoplay();
    };

    // Add event listeners
    gliderRef.current.addEventListener("mouseover", handleMouseOver);
    gliderRef.current.addEventListener("mouseout", handleMouseOut);
    gliderRef.current.addEventListener("click", handleInteraction);

    // Cleanup event listeners and interval on unmount
    return () => {
      clearInterval(intervalRef.current);
      gliderRef.current.removeEventListener("mouseover", handleMouseOver);
      gliderRef.current.removeEventListener("mouseout", handleMouseOut);
      gliderRef.current.removeEventListener("click", handleInteraction);
    };
  }, []);

  const listOfTestimonies = [
    {
      name: "Jacob Paul",
      comment:
        "Working with Anikus LLC was a game-changer for our business. Their AI chatbot improved our customer service significantly, and we saw results almost immediately.",
      image: testimony1,
    },
    {
      name: "Bridget Smith",
      comment:
        "Anikus LLC transformed our outdated website into a modern, user-friendly platform. Their team's expertise and commitment to quality are unmatched. Highly recommended!",
      image: testimony2,
    },
    {
      name: "Takue Spike",
      comment:
        "The cybersecurity services from Anikus LLC have given us peace of mind. They tailored their approach to fit our needs perfectly and exceeded our expectations",
      image: testimony3,
    },
    {
      name: "Emily Gustavo",
      comment:
        "Anikus LLC's web development services are top-notch! They delivered a stunning website that not only looks great but also performs flawlessly.",
      image: testimony4,
    },
    {
      name: "Conor Magee",
      comment:
        "From start to finish, Anikus LLC was professional, efficient, and attentive to our needs. Their digital solutions have taken our business to the next level.",
      image: testimony5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="glider-contain">
        <div ref={gliderRef} className="glider">
          {listOfTestimonies.map((testimony, index) => (
            <div key={index} className="text-center p-4">
              <p className="mb-2">{testimony.comment}</p>
              <Image
                src={testimony.image}
                alt={testimony.name}
                width={200}
                height={100}
                className="rounded-full mx-auto mb-2"
              />
              <p className="font-bold">{testimony.name}</p>
            </div>
          ))}
        </div>

        <div id="dots" className="glider-dots"></div>
      </div>
    </div>
  );
}
