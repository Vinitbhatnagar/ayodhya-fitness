import "../styles/transformations.css";
import { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

import before1 from "../assets/transformations/before1.png";
import before2 from "../assets/transformations/before2.png";
import before3 from "../assets/transformations/before3.png";

gsap.registerPlugin(ScrollTrigger);


const transformations = [
    {
        image: before1,
        name: "Rahul",
        result: "18 KG LOST",
        time: "6 Months",
        plan: "Personal Training",
        text:
            "Strength training + nutrition guidance created a complete body transformation."
    },

    {
        image: before2,
        name: "Priya",
        result: "12 KG LOST",
        time: "4 Months",
        plan: "Fat Loss Program",
        text:
            "Consistency, coaching and structured workouts changed everything."
    },

    {
        image: before3,
        name: "Arjun",
        result: "MUSCLE GAIN",
        time: "8 Months",
        plan: "Lean Bulk",
        text:
            "Built strength with progressive training and expert guidance."
    }
];



export default function Transformations() {

    const [active, setActive] = useState(null);



    useLayoutEffect(() => {


        gsap.from(".flip-card", {

            scrollTrigger: {
                trigger: ".transformations-grid",
                start: "top 80%"
            },

            y: 100,
            opacity: 0,
            stagger: .2,
            duration: 1,
            ease: "power4.out"

        });


    }, []);



    return (

        <section
            id="transformations"
            className="transformations-section"
        >


            <div className="transformations-header">

                <span>
                    REAL TRANSFORMATIONS
                </span>

                <h2>
                    Bodies Changed.
                    Lives Upgraded.
                </h2>


            </div>




            <div className="transformation-stats">


                <div>
                    <h3>
                        <CountUp end={1000} duration={3} />+
                    </h3>

                    <p>
                        Transformations
                    </p>

                </div>



                <div>
                    <h3>
                        <CountUp end={500} duration={3} />+
                    </h3>

                    <p>
                        Members
                    </p>

                </div>



                <div>
                    <h3>
                        <CountUp end={10} duration={3} />+
                    </h3>

                    <p>
                        Trainers
                    </p>

                </div>


            </div>





            <div className="transformations-grid">


                {
                    transformations.map((item, index) => (


                        <div
                            key={index}

                            className={
                                `flip-card ${active === index ? "active" : ""
                                }`
                            }

                            onClick={() =>
                                setActive(
                                    active === index ? null : index
                                )
                            }

                        >



                            <div className="flip-inner">



                                {/* FRONT */}

                                <div className="flip-front">


                                    <img
                                        src={item.image}
                                        alt=""
                                    />


                                    <div className="front-overlay">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <span>
                                            Tap To Reveal
                                        </span>

                                    </div>


                                </div>





                                {/* BACK */}

                                <div className="flip-back">


                                    <h2>
                                        {item.result}
                                    </h2>


                                    <h3>
                                        {item.name}
                                    </h3>


                                    <div className="details">

                                        <p>
                                            🔥 {item.time}
                                        </p>

                                        <p>
                                            🏋️ {item.plan}
                                        </p>

                                    </div>


                                    <p>
                                        {item.text}
                                    </p>


                                </div>




                            </div>


                        </div>


                    ))
                }


            </div>


        </section>

    )

}