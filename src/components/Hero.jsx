import "../styles/hero.css";
import heroVideo from "../assets/videos/hero.mp4";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
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

                    <button className="join-btn">
                        Join Now
                        <ArrowRight size={18} />
                    </button>

                    <button className="tour-btn">
                        <PlayCircle size={18} />
                        Gym Tour
                    </button>

                </div>

                <div className="hero-stats">

                    <div className="hero-stat">
                        <h3>500+</h3>
                        <span>Members</span>
                    </div>

                    <div className="hero-stat">
                        <h3>1000+</h3>
                        <span>Transformations</span>
                    </div>

                    <div className="hero-stat">
                        <h3>10+</h3>
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