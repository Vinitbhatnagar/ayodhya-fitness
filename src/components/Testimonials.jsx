import "../styles/testimonials.css";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Rahul",
        review:
            "The trainers are extremely supportive and the environment keeps me motivated every day.",
    },
    {
        name: "Priya",
        review:
            "Lost 12kg in 6 months. Best fitness decision I have ever made.",
    },
    {
        name: "Aman",
        review:
            "Excellent equipment, flexible timings and amazing personal training.",
    },
    {
        name: "Neha",
        review:
            "The community here feels like family. Highly recommended.",
    },
    {
        name: "Arjun",
        review:
            "Professional coaching and noticeable results within weeks.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials-section"
        >
            <div className="testimonial-header">

                <span>MEMBER REVIEWS</span>

                <h2>
                    Trusted By Hundreds
                    Of Fitness Enthusiasts
                </h2>

                <div className="rating-box">
                    <Star fill="#d88b52" stroke="#d88b52" />
                    <Star fill="#d88b52" stroke="#d88b52" />
                    <Star fill="#d88b52" stroke="#d88b52" />
                    <Star fill="#d88b52" stroke="#d88b52" />
                    <Star fill="#d88b52" stroke="#d88b52" />

                    <span>4.9/5 Rating</span>
                </div>

            </div>

            <div className="reviews-track">

                {[...reviews, ...reviews].map(
                    (item, index) => (
                        <div
                            key={index}
                            className="review-card"
                        >
                            <h3>{item.name}</h3>

                            <p>{item.review}</p>
                        </div>
                    )
                )}

            </div>
        </section>
    );
}