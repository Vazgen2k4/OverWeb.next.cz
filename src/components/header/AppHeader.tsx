"use client"

import FadeInComponent, { AnimationType } from "@/components/animation/FadeInComponent";
import TypingComponent from "../animation/TypingComponent";
import { useTranslations } from "next-intl";
import Link from "next/link";




const AppHeader = () => {
    const t = useTranslations();

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <FadeInComponent>
                            <h1 className="header__title" data-lang="title" data-aos="fade-down" data-aos-duration="1500">
                                Flutter &amp; Web Developer
                            </h1>
                        </FadeInComponent>

                        <TypingComponent
                            className="header__descr"
                            text={t('intro')}
                            duration={2} />

                        <Link href="#contact" className="btn">
                            <span>
                                {t('buttons.contact')}
                            </span>
                        </Link>

                        <i className="fas fa-arrow-down header__icon-scroll"></i>
                    </div>

                </div>
            </header>

        </>
    )
}


export default AppHeader;