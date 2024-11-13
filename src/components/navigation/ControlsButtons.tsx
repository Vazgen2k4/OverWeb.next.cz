import SoundButton from "@/components/buttons/SoundButton";
import MenuBar from "@/components/buttons/MenuBar";


type Language = {
    image: string;
    lang: string;
    label: string;
}




const ControllsButton = () => {



    return (
        <>

            <MenuBar />

            <div className="control__buttons">
                <ul className="langs__list">
                    <li className="langs__list-item">
                        <a data-lang-btn="ru" href="#!" className="langs__list-btn">
                            <img src="./images/lang/ru.png" alt="russian" />
                        </a>
                    </li>
                    <li className="langs__list-item">
                        <a data-lang-btn="cz" href="#!" className="langs__list-btn">
                            <img src="./images/lang/cz.png" alt="russian" />
                        </a>
                    </li>
                    <li className="langs__list-item">
                        <a data-lang-btn="en" href="#!" className="langs__list-btn" >
                            <img src="./images/lang/en.png" alt="russian" />
                        </a>
                    </li>
                </ul>


                <SoundButton />


            </div>


        </>
    );
};

export default ControllsButton;