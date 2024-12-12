import { useTranslations } from "next-intl";

interface SectionProps {
    sectionId: string;
    children: React.ReactNode;
    descr?: string;
}


const Section: React.FC<SectionProps> = ({ sectionId, children, descr }) => {
    const t = useTranslations()
    
    return (
        <>
            <section className={`section ${sectionId}`} id={sectionId}>
                <div className="container">
                    <div className={`${sectionId}__content`}>
                        <div className="studio__content-text">
                            <h2 className="section__title">{t(`${sectionId}.title`)}</h2>
                            {
                                descr &&
                                <p className="studio__content-deskr">
                                    {descr}
                                </p>
                            }
                        </div>

                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Section;