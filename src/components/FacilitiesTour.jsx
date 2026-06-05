import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/facilitiesExperience.css";

import facility1 from "../assets/facilities/facility1.jpg";
import facility2 from "../assets/facilities/facility2.jpg";
import facility3 from "../assets/facilities/facility3.jpg";
import facility4 from "../assets/facilities/facility4.jpg";
import facility5 from "../assets/facilities/facility5.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function FacilitiesExperience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const totalScroll =
      track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      image: facility1,
      title: "Free Weights Zone",
    },
    {
      image: facility2,
      title: "Cardio Arena",
    },
    {
      image: facility3,
      title: "Functional Training",
    },
    {
      image: facility4,
      title: "Personal Training",
    },
    {
      image: facility5,
      title: "Recovery Area",
    },
  ];

  return (
    <section
      id="facilities"
      className="facilities-wrapper"
      ref={sectionRef}
    >
      <div
        className="facilities-track"
        ref={trackRef}
      >
        {slides.map((slide, index) => (
          <div
            className="facility-slide"
            key={index}
          >
            <img
              src={slide.image}
              alt={slide.title}
            />

            <div className="facility-dark"></div>

            <div className="facility-content">

              <span>
                AYODHYA FITNESS
              </span>

              <h2>
                {slide.title}
              </h2>

              <p>
                Premium equipment,
                professional atmosphere,
                and a space built
                for results.
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}