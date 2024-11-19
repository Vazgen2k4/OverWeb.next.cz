interface SkillsItem {
    title: string;
    descr: string;
    icon?: string;
    link?: string;
}

const SkillsItem = ({ item }: { item: SkillsItem }) => {
    return (
        <>
            <div className="skills__grid-item skills__item">
                <div className="skills__item-box">

                    <h3 className="skills__item-title">{item.title}</h3>
                    <p className="skills__item-descr">
                        {item.descr}
                    </p>
                </div>
            </div>

        </>
    )
}

export default SkillsItem;