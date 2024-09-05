"use client";

import Glider from "glider-js";
import "glider-js/glider.min.css";
import { useEffect, useRef } from "react";

export default function Banner() {
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
      }, 5000); // Autoplay interval in milliseconds
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
    gliderRef.current?.addEventListener("mouseover", handleMouseOver);
    gliderRef.current?.addEventListener("mouseout", handleMouseOut);
    gliderRef.current?.addEventListener("click", handleInteraction);

    // Cleanup event listeners and interval on unmount
    return () => {
      clearInterval(intervalRef.current);
      gliderRef.current?.removeEventListener("mouseover", handleMouseOver);
      gliderRef.current?.removeEventListener("mouseout", handleMouseOut);
      gliderRef.current?.removeEventListener("click", handleInteraction);
    };
  }, []);

  const listOfTestimonies = [
    {
      heading: "Innovative Web Development",
      comment:
        "Transform your online presence with our custom web development solutions. At Anikus LLC, we create responsive, user-friendly websites that are tailored to your business needs. Our expert team delivers high-performance, secure, and scalable websites that help you stand out and drive growth.",
    },
    {
      heading: "AI Chatbots for 24/7 Support",
      comment:
        "Enhance your customer experience with our AI-powered chatbots. Designed to provide instant, round-the-clock support, our chatbots handle inquiries efficiently, offer personalized interactions, and keep your business connected with customers at all times.",
    },
    {
      heading: "Comprehensive Cybersecurity",
      comment:
        "Protect your digital assets with our robust cybersecurity services. We offer comprehensive solutions, including threat detection, vulnerability assessments, and real-time monitoring, ensuring your business remains secure in an ever-evolving digital landscape.",
    },
  ];

  return (
    <div>
      <div className="glider-contain">
        <div ref={gliderRef} className="glider">
          {listOfTestimonies.map((testimony, index) => (
            <div key={index} className="text-center p-4">
              <p className="font-bold font-mukta text-3xl ">
                {testimony.heading}
              </p>
              <div className="border-2 border-green lg:mx-60 md:mx-40 sm:mx-5"></div>
              <p className="mb-2 text-lg pt-5">{testimony.comment}</p>
            </div>
          ))}
        </div>

        <div id="dots" className="glider-dots"></div>
      </div>
    </div>
  );
}
