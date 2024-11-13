
interface SectionProps {
    sectionId: string;
    children: React.ReactNode;
    title: string;
    descr?: string;
}


const Section: React.FC<SectionProps> = ({ sectionId, title, children, descr }) => {
    return (
        <>
            <section className={`section ${sectionId}`} id={sectionId}>
                <div className="container">
                    <div className={`${sectionId}__content`}>
                        <div className="studio__content-text">
                            <h2 className="section__title" data-lang="title">{title}</h2>
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