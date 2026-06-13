import "../styles/hero.css";
import { Link } from "react-scroll";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import heroVideo from "../assets/videos/hero.mp4";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const heroRef = useRef(null);
    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.from(".hero-tag", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            })

                .from(".hero h1", {
                    opacity: 0,
                    y: 100,
                    duration: 1.2,
                    ease: "power4.out",
                }, "-=0.3")

                .from(".hero p", {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                }, "-=0.8")

                .from(".hero-buttons", {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                }, "-=0.5")

                .from(".hero-stat", {
                    opacity: 0,
                    y: 50,
                    stagger: 0.15,
                    duration: 0.7,
                }, "-=0.4");

        }, heroRef);

        return () => ctx.revert();

    }, []);
    return (
        <section id="home" className="hero">

            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src={heroVideo}
                    type="video/mp4"
                />
            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-tag">
                    AYODHYA FITNESS • SINCE 2020
                </span>

                <h1>
                    BUILD YOUR
                    <span> BEST BODY</span>
                </h1>

                <p>
                    Premium fitness facility with
                    elite trainers, modern equipment,
                    personal coaching and a community
                    built around transformation.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="pricing"
                        smooth
                        duration={1000}
                    >
                        <button className="join-btn">
                            Join Now
                            <ArrowRight size={18} />
                        </button>
                    </Link>

                </div>

                <div className="hero-stats">

                    <div className="hero-stat">
                        <h3>1000+</h3>
                        <span>Transformations</span>
                    </div>

                    <div className="hero-stat">
                        <h3>5+</h3>
                        <span>Expert Trainers</span>
                    </div>

                </div>

            </div>

            <div className="scroll-down">
                SCROLL
            </div>

        </section>
    );
}