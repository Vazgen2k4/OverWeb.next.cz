import Image from "next/image";
import NavList from "./NavList";

const NavLogo = () => {
    return (
        <div className="nav__logo">
            <a href="./index.html" className="logo">
                <img src="/icons/logo.svg" alt="over_web" />
            </a>
            <h2 data-lang="title" className="nav__logo-title">
                Flutter &amp; Web Developer
            </h2>
        </div>
    )
}


const Nav = () => {
    return (
        <>

            <nav className="nav">
                <div className="nav__content">
                    <div className="nav__content-bg"></div>
                    <NavLogo />
                    <ul className="nav__list">

                        <li className="nav__list-element">
                            <a href="#portfolio" data-lang="portfolio" className="nav__list-link">
                                Портфолио
                            </a>
                        </li>

                        <li className="nav__list-element">
                            <a href="#about" data-lang="about_me" className="nav__list-link">
                                Обо мне
                            </a>
                        </li>

                        <li className="nav__list-element">
                            <a href="#skills" data-lang="skills" className="nav__list-link">
                                Навыки
                            </a>
                        </li>
                        <li className="nav__list-element">
                            <a href="#footer" data-lang="contact" className="nav__list-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    <a href="#!" className="btn">
                        <span data-lang="button_order">
                            заказать
                        </span>
                    </a>
                    <NavList />
                </div>
            </nav>
        </>
    );
}

export default Nav;