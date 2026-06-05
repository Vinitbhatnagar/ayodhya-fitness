import "../styles/personalTraining.css";
import {
    Dumbbell,
    Target,
    HeartPulse,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";
import PriteshTrainer from "../assets/trainers/PriteshTrainer.jpeg"

export default function PersonalTraining() {
    const benefits = [
        {
            icon: <Target />,
            title: "Customized Workouts",
        },
        {
            icon: <TrendingUp />,
            title: "Faster Results",
        },
        {
            icon: <HeartPulse />,
            title: "Improved Fitness",
        },
        {
            icon: <Dumbbell />,
            title: "Strength & Muscle Gain",
        },
        {
            icon: <ShieldCheck />,
            title: "Proper Form Guidance",
        },
    ];

    return (
        <section
            id="personal-training"
            className="pt-section"
        >
            <div className="pt-container">

                <div className="pt-image">

                    <img
                        src={PriteshTrainer}
                        alt="Personal Training"
                    />

                    <div className="pt-floating-card">
                        <h3>1-on-1 Coaching</h3>
                        <p>
                            Dedicated guidance
                            tailored to your goals.
                        </p>
                    </div>

                </div>

                <div className="pt-content">

                    <span>
                        PERSONAL TRAINING
                    </span>

                    <h2>
                        Achieve More
                        With Expert Coaching
                    </h2>

                    <p>
                        Whether your goal is fat loss,
                        muscle gain, strength building,
                        or overall fitness, our trainers
                        create a personalized roadmap
                        designed specifically for you.
                    </p>

                    <div className="benefits-grid">

                        {benefits.map(
                            (item, index) => (
                                <div
                                    className="benefit-card"
                                    key={index}
                                >
                                    {item.icon}

                                    <h4>
                                        {item.title}
                                    </h4>
                                </div>
                            )
                        )}

                    </div>

                    <button className="pt-btn">
                        Explore PT Plans
                    </button>

                </div>

            </div>
        </section>
    );
}