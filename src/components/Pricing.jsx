import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/pricing.css";

const plans = {
    basic: {
        title: "Basic Membership",
        subtitle: "General Gym Access",

        prices: [
            ["1 Month", "₹1500"],
            ["3 Months", "₹3500"],
            ["6 Months", "₹5000"],
            ["12 Months", "₹9000"],
        ],
    },

    personal: {
        title: "Personal Training",
        subtitle: "One-on-One Coaching",

        prices: [
            ["1 Month", "₹6000"],
            ["2 Months", "₹11000"],
            ["3 Months", "₹16000"],
            ["6 Months", "₹27000"],
        ],
    },

    master: {
        title: "Master Plan",
        subtitle: "PT + General Membership",

        prices: [
            [
                "1 Month",
                "₹3500 (20 Days PT + 10 Days General)",
            ],

            [
                "2 Months",
                "₹6500 (40 Days PT + 20 Days General)",
            ],

            [
                "3 Months",
                "₹10000 (60 Days PT + 30 Days General)",
            ],
        ],
    },
};

export default function Pricing() {
    const [active, setActive] =
        useState("personal");

    return (
        <section
            id="pricing"
            className="pricing-section"
        >
            <div className="pricing-heading">

                <span>MEMBERSHIPS</span>

                <h2>
                    BUILT FOR
                    <br />
                    EVERY GOAL
                </h2>

                <p>
                    Choose a membership that
                    fits your fitness journey.
                </p>

            </div>

            <div className="trust-bar">

                <div className="trust-item">
                    <h3>1000+</h3>
                    <p>Transformations</p>
                </div>

                <div className="trust-item">
                    <h3>500+</h3>
                    <p>Active Members</p>
                </div>

                <div className="trust-item">
                    <h3>4.9★</h3>
                    <p>Member Rating</p>
                </div>

            </div>

            <div className="plan-selector">

                <button
                    className={
                        active === "basic"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActive("basic")
                    }
                >
                    Basic
                </button>

                <button
                    className={`popular ${active === "personal"
                            ? "active"
                            : ""
                        }`}
                    onClick={() =>
                        setActive("personal")
                    }
                >
                    Personal ⭐
                </button>

                <button
                    className={
                        active === "master"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActive("master")
                    }
                >
                    Master
                </button>

            </div>

            <AnimatePresence mode="wait">

                <motion.div
                    key={active}
                    className="pricing-showcase"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -40,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                >

                    <h3>
                        {plans[active].title}
                    </h3>

                    <span className="plan-subtitle">
                        {plans[active].subtitle}
                    </span>

                    <div className="pricing-list">

                        {plans[
                            active
                        ].prices.map(
                            (item, index) => (
                                <div
                                    className="price-row"
                                    key={index}
                                >
                                    <p>{item[0]}</p>

                                    <h4>{item[1]}</h4>
                                </div>
                            )
                        )}

                    </div>

                </motion.div>

            </AnimatePresence>
        </section>
    );
}