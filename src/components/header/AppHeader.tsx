"use client"

import FadeInComponent, { AnimationType } from "@/components/animation/FadeInComponent";


const AppHeader = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <FadeInComponent >
                            <h1 className="header__title" data-lang="title" data-aos="fade-down" data-aos-duration="1500">
                                Flutter &amp; Web Developer
                            </h1>
                        </FadeInComponent>


                        <FadeInComponent animationType={AnimationType.BottomToTop}>
                            <p className="header__descr" data-tuping-text data-lang="intro_text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </FadeInComponent>

                        <a href="#!" className="btn">
                            <span data-lang="contact">
                                Контакты
                            </span>
                        </a>

                        <i className="fas fa-arrow-down header__icon-scroll"></i>
                    </div>

                </div>
            </header>

        </>
    )
}


export default AppHeader;