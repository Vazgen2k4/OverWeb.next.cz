import { useTranslations } from "next-intl";
import Section from "../Section";
import Link from "next/link";
import AboutDescrList from "./AboutDescrList";
// import { log } from "console";
const _link = "https://github.com/Vazgen2k4";



const AboutSection = () => {
    const t = useTranslations();

    return (
        <>
            <Section sectionId="about" title={t('about.title')}>
                <div className="about__body">
                    <div className="about__info">
                        <h3 className="about__info-title" data-lang="name">
                            {t('about.name')}
                        </h3>
                        <AboutDescrList />
                    </div>
                    <Link href={_link} target="_blank" className="about__images">
                        <img className="about__img" src="/images/about/photo2.png" alt="about vazgen programmer" />
                    </Link>
                </div>

            </Section>
        </>
    )

}


export default AboutSection;