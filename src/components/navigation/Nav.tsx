import NavSocialList from "./NavSocialList";
import NavList from "./NavList";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NavLogo = () => {
    return (
        <div className="nav__logo">
            <Link href="/" target="_blank"  className="logo">
                <img src="/icons/logo.svg" alt="over_web" />
            </Link>
            <h2 data-lang="title" className="nav__logo-title">
                Flutter &amp; Web Developer
            </h2>
        </div>
    )
}


const Nav = () => {
    
    const t = useTranslations();
    
    return (
        <>

            <nav className="nav">
                <div className="nav__content">
                    <div className="nav__content-bg"></div>
                    <NavLogo />
                    <NavList />
                    <button type="button" className="btn">
                        <span data-lang="button_order">
                            {t('buttons.order')}
                        </span>
                    </button>
                    <NavSocialList />
                </div>
            </nav>
        </>
    );
}

export default Nav;