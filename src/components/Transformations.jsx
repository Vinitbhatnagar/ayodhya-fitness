import "../styles/transformations.css";
import CountUp from "react-countup";

import before1 from "../assets/transformations/before1.png";
import after1 from "../assets/transformations/after1.png";

import before2 from "../assets/transformations/before2.png";
import after2 from "../assets/transformations/after2.png";

import before3 from "../assets/transformations/before3.png";
import after3 from "../assets/transformations/after3.png";

const transformations = [
    {
        before: before1,
        after: after1,
        name: "Rahul",
        result: "Lost 18kg",
    },
    {
        before: before2,
        after: after2,
        name: "Priya",
        result: "Lost 12kg",
    },
    {
        before: before3,
        after: after3,
        name: "Arjun",
        result: "Gained 9kg Muscle",
    },
];

export default function Transformations() {
    return (
        <section
            id="transformations"
            className="transformations-section"
        >
            <div className="transformations-header">

                <span>REAL RESULTS</span>

                <h2>
                    Transformations
                    That Speak For Themselves
                </h2>

            </div>

            <div className="stats-grid">

                <div className="stat-box">
                    <h3>
                        <CountUp end={1000} duration={3} />+
                    </h3>
                    <p>Transformations</p>
                </div>

                <div className="stat-box">
                    <h3>
                        <CountUp end={500} duration={3} />+
                    </h3>
                    <p>Active Members</p>
                </div>

                <div className="stat-box">
                    <h3>
                        <CountUp end={10} duration={3} />+
                    </h3>
                    <p>Expert Trainers</p>
                </div>

            </div>

            <div className="transformation-grid">

                {transformations.map((item, index) => (
                    <div
                        className="transformation-card"
                        key={index}
                    >
                        <div className="image-wrapper">

                            <img
                                src={item.before}
                                alt="Before"
                                className="before"
                            />

                            <img
                                src={item.after}
                                alt="After"
                                className="after"
                            />

                        </div>

                        <div className="transformation-info">

                            <h3>{item.name}</h3>

                            <p>{item.result}</p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}