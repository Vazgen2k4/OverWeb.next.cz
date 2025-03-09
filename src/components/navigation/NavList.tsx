import { useTranslations } from "next-intl";
import Link from "next/link";

type NavLink = {
    title: string;
    link: string;

}

const links: NavLink[] = [
    {
        title: "portfolio.lable",
        link: "#portfolio",
    },
    {
        title: "about.lable",
        link: "#about",
    },
    {
        title: "skills.lable",
        link: "#skills",
    },
    {
        title: "services.lable",
        link: "#services",
    },
    {
        title: "contact.lable",
        link: "#contact",
    },
]

const NavList = () => {

    const t = useTranslations();

    return (
        <>
            <ul className="nav__list">
                {links.map((link) => (
                    <li key={link.title} className="nav__list-element">
                        <Link href={link.link} className="nav__list-link">{t(link.title)}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavList;