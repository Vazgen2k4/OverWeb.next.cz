import { useTranslations } from "next-intl"
import Section from "../Section"




const SkillsSection = () => {
    const t = useTranslations()
    
    return (
        <>
            <Section sectionId="skills">

                <div className="skills__grid">
                    
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">CSS3</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">JavaScript</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">SASS(SCSS)</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">LESS</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">PHP(7/8)</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">WordPress</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">Bootstrap (4/5)</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">Swiper js</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">Node.js</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">Dart&Flutter</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                    <div className="skills__grid-item skills__item">
                        <div className="skills__item-box">

                            <h3 className="skills__item-title">S.O.L.I.D.</h3>
                            <p className="skills__item-descr">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eaque!
                            </p>
                        </div>
                    </div>
                   
                </div>
            </Section>

        </>
    )
}


export default SkillsSection;