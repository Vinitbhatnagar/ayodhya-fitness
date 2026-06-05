import "../styles/trainers.css";

import trainer1 from "../assets/trainers/trainer1.jpg";
import trainer2 from "../assets/trainers/trainer2.png";
import trainer3 from "../assets/trainers/PriteshTrainer.jpeg";
import trainer4 from "../assets/trainers/PriteshTrainer.jpeg";
import Tilt from "react-parallax-tilt";
import useReveal from "../hooks/useReveal";
import "../styles/trainers.css";

const trainers = [
    {
        name: "Rahul Roy",
        role: "Owner - Trainer",
        exp: "7+ Years",
        image: trainer1,
    },
    {
        name: "Bhavya",
        role: "Personal Trainer",
        exp: "5+ Years",
        image: trainer2,
    },
    {
        name: "Pritesh",
        role: "Fat Loss Specialist",
        exp: "13+ Years",
        image: trainer3,
    },
    {
        name: "Kaushalya",
        role: "Transformation Coach",
        exp: "2+ Years",
        image: trainer4,
    },
];

export default function Trainers() {
    useReveal(".trainers-header");
    useReveal(".trainer-card");
    return (
        <section id="trainers" className="trainers-section">

            <div className="section-title">
                <span>MEET OUR TEAM</span>

                <h2>
                    Coaches Who
                    Build Champions
                </h2>
            </div>

            <div className="trainers-grid">

                {trainers.map((trainer, index) => (

                    <Tilt
                        key={index}
                        tiltMaxAngleX={12}
                        tiltMaxAngleY={12}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1500}
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        className="trainer-card"
                    >

                        <div className="trainer-image">

                            <img
                                src={trainer.image}
                                alt={trainer.name}
                            />

                        </div>

                        <div className="trainer-info">

                            <span className="exp-badge">
                                {trainer.exp}
                            </span>

                            <h3>
                                {trainer.name}
                            </h3>

                            <p>
                                {trainer.role}
                            </p>

                        </div>

                    </Tilt>

                ))}

            </div>

        </section>
    );
}