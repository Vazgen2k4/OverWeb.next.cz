import { useTranslations } from 'next-intl';
import Section from "@/components/section/Section"


const portfolioList = [
    {
        link: "https://vazgen2k4.github.io/Amind/",
        title: "Amind",
        img_url: "images/portfolio/amid-card.png",
        description: "some descr 1"
    },
    {
        link: "https://vazgen2k4.github.io/IndeVets/",
        title: "Pets",
        img_url: "images/portfolio/indevets-card.png",
        description: "some descr 2"
    },
    {
        link: "https://vazgen2k4.github.io/OJJO/",
        title: "Online shop",
        img_url: "images/portfolio/ojjo-card.png",
        description: "some descr 3"
    },
    {
        link: "https://vazgen2k4.github.io/OpenShop-by-Vazgen/",
        title: "Tehno store",
        img_url: "images/portfolio/openshop-card.png",
        description: "some descr 4"
    },
    {
        link: "https://vazgen2k4.github.io/VueCinema/",
        title: "Vue Cinema Films",
        img_url: "images/portfolio/vuecinema-card.png",
        description: "some descr"
    },
]

const PortfolioSection = () => {
    const t = useTranslations();


    return (
        <>
            <Section sectionId="portfolio" title={t('portfolio.title')}>
                <div className="portfolio__grid">
                    {portfolioList.map((item) => (
                        <div key={item.title} className="portfolio__card-content" >
                            <div className="portfolio__card-body">
                                <a href="#!" className="portfolio__card-link">
                                    <img className="portfolio__card-img" src={item.img_url} alt={item.title} />
                                </a>

                            </div>
                            <a target="_blank" href={item.link} className="btn">
                                <span data-lang="button_more" ></span>
                            </a>
                        </div>

                    ))
                    }
                </div>
            </Section>
        </>
    )
}


export default PortfolioSection;