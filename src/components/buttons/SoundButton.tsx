"use client"
import { useCallback, useEffect, useRef, useState, } from "react";

interface SoundButtonProps {
    onClick?: (isPlayed: boolean) => void;
}

const SoundButton: React.FC<SoundButtonProps> = ({ onClick }) => {
    const [isPlayed, setIsPlayed] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const newIsPlayed = !isPlayed;
        setIsPlayed(newIsPlayed);
        if (onClick) {
            onClick(newIsPlayed);
        }
    };


    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlayed) {
            audioRef.current.play();
            return;
        }

        audioRef.current.pause();
        audioRef.current.currentTime = 0;

    }, [isPlayed]);


    return (
        <>
            <audio ref={audioRef} src="music/bg_mine.mp3" id="sound">
                Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>

            <button
                onClick={handleClick}
                className={isPlayed ? "sound__btn _active" : "sound__btn"}
                id="sound__btn">

                <i className={`fas fa-volume sound__svg ${isPlayed ? "_active" : ""}`}></i>
                <i className={`fas fa-volume-slash sound__svg ${!isPlayed ? "_active" : ""}`}></i>
            </button>
        </>
    );
}

export default SoundButton; 