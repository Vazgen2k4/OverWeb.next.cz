"use client"
import { useLocale, useTranslations } from 'next-intl';
import Section from "@/components/section/Section"
import Link from 'next/link';
import FadeInComponent, { AnimationType } from '../../animation/FadeInComponent';
import PortfolioItem, { PortfolioItemData } from './PortfolioItem';





const portfolioList: PortfolioItemData[] = [
    {
        id: "amind",
        link: "https://vazgen2k4.github.io/Amind/",
        title: "Amind",
        img_url: "images/portfolio/amid-card.png",
        description: "some descr 1"
    },
    {
        id: "indevets",
        link: "https://vazgen2k4.github.io/IndeVets/",
        title: "Pets",
        img_url: "images/portfolio/indevets-card.png",
        description: "some descr 2"
    },
    {
        id: "ojjo",
        link: "https://vazgen2k4.github.io/OJJO/",
        title: "Online shop",
        img_url: "images/portfolio/ojjo-card.png",
        description: "some descr 3"
    },
    {
        id: "openshop",
        link: "https://vazgen2k4.github.io/OpenShop-by-Vazgen/",
        title: "Tehno store",
        img_url: "images/portfolio/openshop-card.png",
        description: "some descr 4"
    },
    {
        id: "vuecinema",
        link: "https://vazgen2k4.github.io/VueCinema/",
        title: "Vue Cinema Films",
        img_url: "images/portfolio/vuecinema-card.png",
        description: "some descr"
    },
]

const getAnimationType = (index: number) => {
    const column = (index + 1) % 3;
    switch (column) {
        case 1:
            return AnimationType.BottomRightToTopLeft;
        case 2:
            return AnimationType.BottomToTop;
        case 0:
            return AnimationType.BottomLeftToTopRight;
        default:
            return AnimationType.TopToBottom;
    }
};


const PortfolioSection = () => {
    const t = useTranslations();

    return (
        <>
            <Section sectionId="portfolio" title={t('portfolio.title')}>
                <div className="portfolio__grid">
                    {
                        portfolioList.map((item: PortfolioItemData, index) => (
                            <FadeInComponent
                                className="portfolio__card"
                                key={item.title}
                                animationType={getAnimationType(index)}>
                                <PortfolioItem item={item} />
                            </FadeInComponent>
                        ))
                    }
                </div>
            </Section>
        </>
    )

}


export default PortfolioSection;