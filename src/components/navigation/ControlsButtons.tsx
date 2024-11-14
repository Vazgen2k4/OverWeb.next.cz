"use client"

import SoundButton from "@/components/buttons/SoundButton";
import MenuBar from "@/components/buttons/MenuBar";
import FadeInComponent, { AnimationType } from "../animation/FadeInComponent";
import LanguageButton, { LanguageButtonData } from "../buttons/LanguageButton";



type Language = {
    image: string;
    lang: string;
    label: string;
}

const LanguageButtonList: LanguageButtonData[] = [
    {
        image: "./images/lang/en.png",
        lang: "en",
        label: "English",
    },
    {
        image: "./images/lang/cz.png",
        lang: "cs",
        label: "Czech",
    },
    {
        image: "./images/lang/ru.png",
        lang: "ru",
        label: "Russian",
    }

]




const ControllsButton = () => {



    return (
        <div>

            <MenuBar />



            <FadeInComponent className="control__buttons" duration={.3} animationType={AnimationType.BottomRightToTopLeft}>
                <ul className="langs__list">
                    {LanguageButtonList.map((data) => (
                        <LanguageButton key={data.lang} data={data} />
                    ))}
                </ul>


                <SoundButton />
            </FadeInComponent>





        </div>
    );
};

export default ControllsButton;