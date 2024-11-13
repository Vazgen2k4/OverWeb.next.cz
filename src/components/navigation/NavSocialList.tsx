type NavSocialLink = {
    image: string;
    forTo: string;
    path: string;
    label: string;
};

const links: NavSocialLink[] = [
    {
        image: "icons/github.svg",
        forTo: "github",
        path: "https://github.com/Vazgen2k4",
        label: "Github account",
    },
    {
        image: "icons/instagram.svg",
        forTo: "instagram",
        path: "https://www.instagram.com/overlord2k4/",
        label: "Instagram account",
    },
    {
        image: "icons/telegram.svg",
        forTo: "telegram",
        path: "https://t.me/OverWebBlog",
        label: "telegram account",
    },
];



const NavSocialList = () => {
    return (
        <>
            <ul className="nav__social">
                {links.map((link) => (
                    <li key={link.forTo} className="nav__social-element">
                        <a href={link.path} className="nav__social-link" target="_blank">
                            <img src={link.image} alt={link.label} />
                        </a>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default NavSocialList;