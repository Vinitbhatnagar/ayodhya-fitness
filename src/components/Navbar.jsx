import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/images/image.png";
import "../styles/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <>
            <header
                className={`navbar ${scrolled ? "navbar-scrolled" : ""
                    }`}
            >
                <div className="nav-logo">
                    <img
                        src={logo}
                        alt="Ayodhya Fitness"
                    />
                </div>

                <nav className="desktop-nav">
                    <Link
                        to="why"
                        smooth
                        duration={1000}
                    >
                        Why Us
                    </Link>

                    <Link
                        to="trainers"
                        smooth
                        duration={1000}
                    >
                        Trainers
                    </Link>

                    <Link
                        to="facilities"
                        smooth
                        duration={1000}
                    >
                        Facilities
                    </Link>

                    <Link
                        to="pricing"
                        smooth
                        duration={1000}
                    >
                        Pricing
                    </Link>

                    <Link
                        to="contact"
                        smooth
                        duration={1000}
                    >
                        Contact
                    </Link>
                </nav>

                <button className="join-btn">
                    Join Now
                </button>

                <button
                    className="menu-btn"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </header>

            <div
                className={`mobile-menu ${menuOpen ? "mobile-active" : ""
                    }`}
            >
                <Link
                    to="why"
                    smooth
                    duration={1000}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >
                    Why Us
                </Link>

                <Link
                    to="trainers"
                    smooth
                    duration={1000}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >
                    Trainers
                </Link>

                <Link
                    to="facilities"
                    smooth
                    duration={1000}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >
                    Facilities
                </Link>

                <Link
                    to="pricing"
                    smooth
                    duration={1000}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >
                    Pricing
                </Link>

                <Link
                    to="contact"
                    smooth
                    duration={1000}
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >
                    Contact
                </Link>

                <button className="mobile-join">
                    Join Now
                </button>
            </div>
        </>
    );
}