import Section from "@/components/section/Section";


const AdminSkillsSection = () => {
    return (
        <>
            <Section sectionId="skills">
                <form action="" className="add__skills">

                    <div className="area">
                        <span>
                            Название
                        </span>
                        <input name="skill" type="text" placeholder="Skill" />
                    </div>

                    <div className="area _ru">
                        <span>Описание (RU)</span>
                        <textarea placeholder="Описание" name="descr-ru" />
                    </div>
                    <div className="area">
                        <span>Popis (CZ)</span>
                        <textarea placeholder="Popis" name="descr-cs" />
                    </div>
                    <div className="area">
                        <span>Description (EN)</span>
                        <textarea placeholder="Description" name="descr-en" />
                    </div>
                    <button className="btn" type="submit">
                        <span>Add Skill</span>
                    </button>
                </form>
            </Section>
        </>
    )
}

export default AdminSkillsSection;