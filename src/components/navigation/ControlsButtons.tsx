
type Language = {
    image: string;
    lang: string;
    label: string;
} 

const ControllsButton = () => {
    return (
        <>
            <audio src="music/bg_mine.mp3" id="sound">
                Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>
            <label className="bars">
                <span className="burger"></span>
            </label>

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


                <a href="#!" className="sound__btn" id="sound__btn">
                    <svg className="sound__svg" xmlns="http://www.w3.org/2000/svg" height="48" view-box="0 -960 960 960"
                        width="48">
                        <path className="sound__svg-path"
                            d="M780-481q0-94-52.5-169T590-759q-12-5-17-16t0-22q5-12 17.5-16.5t25.5.5q101 41 162.5 131T840-481q0 111-61.5 201T616-149q-13 5-25.5.5T573-165q-5-11 0-22t17-16q85-34 137.5-109T780-481ZM280-360H150q-13 0-21.5-8.5T120-390v-180q0-13 8.5-21.5T150-600h130l149-149q14-14 32.5-6.5T480-728v496q0 20-18.5 27.5T429-211L280-360Zm380-120q0 52-26 94t-73 64q-8 4-14.5-1t-6.5-13v-289q0-8 6.5-13t14.5-1q47 22 73 65t26 94ZM420-648 307-540H180v120h127l113 109v-337ZM298-480Z" />
                    </svg>
                </a>


            </div>


        </>
    );
};

export default ControllsButton;