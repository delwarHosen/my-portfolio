import { useState } from 'react';
import './navbar.css'

const Navbar = () => {

    const [Toggale, setMenu] = useState(false)

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className="md:pl-0 pl-5 text-[22px] nav_logo">Delwar Hosen</a>

                <div className={Toggale ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active_link">
                                <i className='uil uil-estate nav__icon'></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='uil uil-user nav__icon'></i>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='uil uil-file-alt nav__icon'></i>
                                Skill
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className='uil uil-briefcase-alt nav__icon'></i>
                                Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='uil uil-scenery nav__icon'></i>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className='uil uil-message nav__icon'></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => setMenu(!Toggale)}></i>
                </div>
                <div className='nav__toggle' onClick={() => setMenu(!Toggale)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>

        </header>
    );
};

export default Navbar;