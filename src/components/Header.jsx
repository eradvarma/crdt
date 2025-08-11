import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaBars } from 'react-icons/fa';
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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-dark backdrop-blur-md shadow-lg' : 'bg-primary-dark/50 backdrop-blur-sm'}`}>
            {/* Main Header */}
            <div className="container mx-auto py-4 px-4">
                <div className="flex items-center justify-between"> {/* Changed to justify-between */}
                    {/* Logo on left side */}
                    <div className="flex items-center">
                        <div className="mr-4">
                            <Link to="/">
                                <img
                                    src="./assets/images/crdt-logo.webp"
                                    alt="CRDT Site Logo"
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger menu on right side (mobile only) */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-md hover:bg-primary-dark text-secondary-light"
                        aria-label="Toggle menu"
                    >
                        <FaBars className="text-xl" />
                    </button>

                    {/* Desktop Navigation - Center aligned */}
                    <nav className="hidden md:block">
                        <div className="container mx-auto px-4">
                            <ul className="flex space-x-6">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                        end
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        About
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
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
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
                                            <FaChevronDown className={`text-xs text-white transition-transform ${peopleMenuOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                    <div
                                        className={`absolute left-0 mt-0 w-48 bg-secondary-light shadow-lg rounded-md z-10 ${peopleMenuOpen ? 'block' : 'hidden'} group-hover:block`}
                                        aria-hidden={!peopleMenuOpen}
                                    >
                                        <NavLink
                                            to="/people/faculty"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            Faculty
                                        </NavLink>
                                        <NavLink
                                            to="/people/staff"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            Staff
                                        </NavLink>
                                        <NavLink
                                            to="/people/post-docs"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            Post Docs
                                        </NavLink>
                                        <NavLink
                                            to="/people/doctoral-scholars"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            Doctoral Scholars
                                        </NavLink>
                                        <NavLink
                                            to="/people/alumni"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-sm text-primary-dark ${isActive ? 'bg-secondary-dark/10 font-medium' : 'hover:bg-secondary-dark/10'}`
                                            }
                                            onClick={closeMobileMenu}
                                        >
                                            Alumni
                                        </NavLink>
                                    </div>
                                </li>

                                <li>
                                    <NavLink
                                        to="/academic"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Academic
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/research"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Research
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/events"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Events
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/alumni"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Alumni
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <a
                                        href="http://unnatbharatabhiyan.gov.in"
                                        className="block px-3 py-2 rounded text-sm hover:bg-secondary-dark/30 transition text-secondary-light"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        UBA
                                    </a>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                        }
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-primary-dark`}>
                <div className="container mx-auto px-4 py-2">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <div>
                                <button
                                    onClick={() => setPeopleMenuOpen(!peopleMenuOpen)}
                                    className="flex justify-between text-sm items-center px-3 py-2 rounded hover:bg-secondary-dark/30 transition text-secondary-light w-full"
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
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Faculty
                                        </NavLink>
                                        <NavLink
                                            to="/people/staff"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Staff
                                        </NavLink>
                                        <NavLink
                                            to="/people/post-docs"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Post Docs
                                        </NavLink>
                                        <NavLink
                                            to="/people/doctoral-scholars"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                            }
                                        >
                                            Doctoral Scholars
                                        </NavLink>
                                        <NavLink
                                            to="/people/alumni"
                                            onClick={closeMobileMenu}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
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
                                to="/academic"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Academic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/research"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Research
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/alumni"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
                                }
                            >
                                Alumni
                            </NavLink>
                        </li>
                        {/* <li>
                            <a
                                href="http://unnatbharatabhiyan.gov.in:8080/new-website/"
                                className="block px-3 py-2 rounded text-sm hover:bg-secondary-dark/30 transition text-secondary-light"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                            >
                                UBA
                            </a>
                        </li> */}
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded text-sm transition text-secondary-light ${isActive ? 'bg-secondary-dark/30 font-medium' : 'hover:bg-secondary-dark/30'}`
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