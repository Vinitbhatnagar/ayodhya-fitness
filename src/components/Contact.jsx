import "../styles/contact.css";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        gender: "",
        plan: "",
        pt: "No",
        trial: "No",
        trialDate: ""
    });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const sendWhatsApp = (e) => {

        e.preventDefault();


        const message = `
🔥 AYODHYA FITNESS ENQUIRY

👤 Name:
${form.name}

📞 Phone:
${form.phone}

⚧ Gender:
${form.gender}

💪 Recommended Plan:
${form.plan}

🏋️ Personal Training:
${form.pt}

🔥 Trial:
${form.trial}

📅 Trial Date:
${form.trialDate || "Not selected"}

-------------------
Sent from Website
`;


        const url =
            `https://wa.me/919624428116?text=${encodeURIComponent(message)}`;


        window.open(url, "_blank");

    };



    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-heading">

                <span>
                    JOIN AYODHYA FITNESS
                </span>


                <h2>
                    Start Your
                    Transformation
                </h2>


            </div>



            <form
                className="contact-form"
                onSubmit={sendWhatsApp}
            >


                <input
                    name="name"
                    placeholder="Your Name"
                    required
                    onChange={handleChange}
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                />

                <select
                    name="gender"
                    onChange={handleChange}
                    required
                >

                    <option value="">
                        Select Gender
                    </option>

                    <option>
                        Male
                    </option>

                    <option>
                        Female
                    </option>

                </select>




                <select
                    name="plan"
                    onChange={handleChange}
                    required
                >

                    <option value="">
                        Recommended Plan
                    </option>

                    <option>
                        General
                    </option>

                    <option>
                        Personal Training
                    </option>

                    <option>
                        Master Plan
                    </option>

                </select>



                <div className="radio-box">

                    <label>
                        PT?
                    </label>


                    <select
                        name="pt"
                        onChange={handleChange}
                    >

                        <option>
                            Yes
                        </option>

                        <option>
                            No
                        </option>

                    </select>

                </div>




                <div className="radio-box">

                    <label>
                        Trial?
                    </label>


                    <select
                        name="trial"
                        onChange={handleChange}
                    >

                        <option>
                            Yes
                        </option>

                        <option>
                            No
                        </option>

                    </select>

                </div>




                <input
                    type="date"
                    name="trialDate"
                    onChange={handleChange}
                />



                <button
                    className="contact-btn"
                    type="submit"
                >

                    Send Enquiry

                    <Send size={18} />

                </button>


            </form>


        </section>

    );

}