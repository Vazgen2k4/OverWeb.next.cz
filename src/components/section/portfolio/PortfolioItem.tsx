import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface PortfolioItemData {
    id: string;
    link: string;
    title: string;
    img_url: string;
    description: string;
}

export type { PortfolioItemData };
function PortfolioItem({ item }: { item: PortfolioItemData }) {
    const t = useTranslations();
    const locale = useLocale();


    return (
        <>
            <div className="portfolio__card-content">
                <div className="portfolio__card-body">

                    <Link href={`/${locale}/portfolio/${item.id}`} className="portfolio__card-link">
                        <img className="portfolio__card-img" src={item.img_url} alt={item.title} />
                    </Link>
                    <h3 className="portfolio__card-title" data-lang="title">{item.title}</h3>
                </div>
                <Link target="_blank" href={item.link} className="btn">
                    <span>
                        {t("buttons.more")}
                    </span>
                </Link>
            </div></>
    );
}

export default PortfolioItem;
