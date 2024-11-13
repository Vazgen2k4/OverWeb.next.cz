import Image from "next/image";
import NavSocialList from "./NavSocialList";
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
                    <NavList />
                    <a href="#!" className="btn">
                        <span data-lang="button_order">
                            заказать
                        </span>
                    </a>
                    <NavSocialList />
                </div>
            </nav>
        </>
    );
}

export default Nav;