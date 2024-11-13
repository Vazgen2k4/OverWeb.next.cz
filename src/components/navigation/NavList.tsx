
type NavLink = {
    title: string;
    link: string;

}

const links: NavLink[] = [
    {
        title: "Portfolio",
        link: "#portfolio",
    },
    {
        title: "About",
        link: "#about",
    },
    {
        title: "Skills",
        link: "#skills",
    },
    {
        title: "Contact",
        link: "#contact",
    },
]

const NavList = () => {
    return (
        <>
            <ul className="nav__list">
                {links.map((link) => (
                    <li key={link.title} className="nav__list-element">
                        <a href={link.link} className="nav__list-link">{link.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavList;