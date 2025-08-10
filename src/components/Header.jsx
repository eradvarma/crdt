import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaChevronDown, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [peopleMenuOpen, setPeopleMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handlePeopleMenu = () => {
        if (isMobile) {
            setPeopleMenuOpen(!peopleMenuOpen);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setPeopleMenuOpen(false);
    };

    return (
        <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-light/90 backdrop-blur-md shadow-lg' : 'bg-primary-light/70 backdrop-blur-sm'}`}>
            {/* Top Contact Bar */}
            <div className="bg-secondary-dark text-secondary-light py-2 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="flex items-center">
                            <FaPhone className="mr-2" />
                            <span>(91) 011-2659 1121</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <a href="mailto:hodrdat@admin.iitd.ac.in" className="hover:text-primary-light transition">
                                hodrdat@admin.iitd.ac.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto py-4 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Logo and Institute Name */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="mr-4">
                            <Link to="/">
                                <img
                                    src="https://home.iitd.ac.in/images/logo-iit.png"
                                    alt="IIT Delhi Logo"
                                    className="h-16 w-auto"
                                />
                            </Link>
                        </div>
                        <div>
                            <h4 className="text-sm md:text-base font-semibold text-secondary-light">
                                <a
                                    href="http://www.iitd.ac.in/"
                                    className="hover:text-secondary-light/80 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Indian Institute of Technology Delhi
                                </a>
                            </h4>
                            <h2 className="text-lg md:text-xl font-bold mt-1 text-secondary-light">
                                <a
                                    href="http://crdt.iitd.ac.in/index.html"
                                    className="hover:text-secondary-light/80 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Centre for Rural Development and Technology (CRDT)
                                </a>
                            </h2>
                        </div>
                    </div>

                    {/* Navigation Toggle for Mobile */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-md hover:bg-primary-dark text-secondary-light"
                        aria-label="Toggle menu"
                    >
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="bg-primary-dark py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li
                            className="relative group"
                            onMouseEnter={() => !isMobile && setPeopleMenuOpen(true)}
                            onMouseLeave={() => !isMobile && setPeopleMenuOpen(false)}
                        >
                            <div className="flex items-center">
                                <NavLink
                                    to="/people"
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                    }
                                >
                                    People
                                </NavLink>
                                <button
                                    className="px-1 focus:outline-none"
                                    onClick={() => isMobile && setPeopleMenuOpen(!peopleMenuOpen)}
                                    aria-expanded={peopleMenuOpen}
                                    aria-label="Toggle people menu"
                                >
                                    <FaChevronDown className={`text-xs transition-transform ${peopleMenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                            <div
                                className={`absolute left-0 mt-0 w-48 bg-secondary-light shadow-lg rounded-md z-10 ${peopleMenuOpen ? 'block' : 'hidden'} group-hover:block`}
                                aria-hidden={!peopleMenuOpen}
                            >
                                <NavLink
                                    to="/people/faculty"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Faculty
                                </NavLink>
                                <NavLink
                                    to="/people/staff"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Staff
                                </NavLink>
                                <NavLink
                                    to="/people/post-docs"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Post Docs
                                </NavLink>
                                <NavLink
                                    to="/people/doctoral-scholars"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Doctoral Scholars
                                </NavLink>
                                <NavLink
                                    to="/people/alumni"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Alumni
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/thematic-areas"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Thematic Areas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/news-events"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                News & Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/programs-courses"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Programs & Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="http://unnatbharatabhiyan.gov.in:8080/new-website/"
                                className="block px-3 py-2 rounded hover:bg-secondary-dark/30 transition text-secondary-light"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                UBA
                            </a>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-primary-dark`}
            >
                <div className="container mx-auto px-4 py-2">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <div>
                                <button
                                    onClick={() => setPeopleMenuOpen(!peopleMenuOpen)}
                                    className="flex justify-between items-center px-3 py-2 rounded hover:bg-secondary-dark/30 transition text-secondary-light w-full"
                                    aria-expanded={peopleMenuOpen}
                                    aria-label="Toggle people menu"
                                >
                                    <span>People</span>
                                    <FaChevronDown className={`transition-transform ${peopleMenuOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {peopleMenuOpen && (
                                    <div className="pl-4 mt-1 space-y-1">
                                        <NavLink
                                            to="/people/faculty"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Faculty
                                        </NavLink>
                                        <NavLink
                                            to="/people/staff"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Staff
                                        </NavLink>
                                        <NavLink
                                            to="/people/post-docs"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Post Docs
                                        </NavLink>
                                        <NavLink
                                            to="/people/doctoral-scholars"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Doctoral Scholars
                                        </NavLink>
                                        <NavLink
                                            to="/people/alumni"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Alumni
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/thematic-areas"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Thematic Areas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/news-events"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                News & Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/programs-courses"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Programs & Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="http://unnatbharatabhiyan.gov.in:8080/new-website/"
                                className="block px-3 py-2 rounded hover:bg-secondary-dark/30 transition text-secondary-light"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                            >
                                UBA
                            </a>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;