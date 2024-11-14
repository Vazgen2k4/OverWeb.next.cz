import { ReactNode } from "react";

import React, { useState, useEffect } from 'react';

interface TypingComponentProps {
    className: string;
    text: string;
    animationDuration: number;
}

const TypingComponent = ({ className, text, animationDuration }: Readonly<TypingComponentProps>) => {
    const [displayedText, setDisplayedText] = useState('');
    const [_, setIsTyping] = useState(true);

    useEffect(() => {
        let index = 0;
        const textLength = text.length;
        const intervalTime = (animationDuration * 1000) / textLength;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;


            if (index === textLength - 1) {
                clearInterval(intervalId);
                setIsTyping(false);
            }

        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <p className={`${className} typing`} style={{ '--symbols': text.length } as React.CSSProperties}>
            {displayedText}
        </p>
    );
};

export default TypingComponent;
