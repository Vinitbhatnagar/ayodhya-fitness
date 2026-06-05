import useReveal from "../hooks/useReveal";
import "../styles/whyChooseUs.css";

import {
    Dumbbell,
    ShieldCheck,
    Clock3,
    Trophy,
    Target,
} from "lucide-react";

export default function WhyChooseUs() {

    useReveal(".section-heading");
    useReveal(".feature-card");

    const features = [
        {
            icon: <Dumbbell size={42} />,
            title: "Elite Equipment",
            desc: "Train with premium strength and cardio machines designed for performance.",
            className: "large-card",
        },
        {
            icon: <ShieldCheck size={36} />,
            title: "Certified Trainers",
            desc: "Expert guidance focused on safe and effective transformation.",
        },
        {
            icon: <Trophy size={36} />,
            title: "Proven Results",
            desc: "Hundreds of successful fitness journeys and body transformations.",
        },
        {
            icon: <Clock3 size={36} />,
            title: "Extended Gym Hours",
            desc: "Open from 5:30 AM to 10:00 PM, Monday to Saturday, giving you maximum flexibility to train on your schedule.",
        },
        {
            icon: <Target size={36} />,
            title: "Personal Training",
            desc: "Customized training programs built around your body, goals and lifestyle.",
        },
    ];

    return (
        <section id="why" className="why-section">

            <div className="section-heading">
                <span>WHY AYODHYA FITNESS</span>

                <h2>
                    More Than A Gym.
                    <br />
                    A Place To Transform.
                </h2>
            </div>

            <div className="bento-grid">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`feature-card ${item.className || ""}`}
                    >
                        <div className="icon-box">
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}