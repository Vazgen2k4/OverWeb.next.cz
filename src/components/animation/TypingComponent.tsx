import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypingComponentProps {
    className?: string;
    text: string;
    duration: number;
    delay?: number;
}

const TypingComponent = ({ className, text, duration, delay = 0 }: Readonly<TypingComponentProps>) => {
    const [displayedText, setDisplayedText] = useState('');
    const [_, setIsTyping] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let index = -1;
        const textLength = text.length;
        const intervalTime = (duration * 1000) / textLength;

        const startTyping = setTimeout(() => {
            const intervalId = setInterval(() => {
                if (index + 1 === textLength - 1) {
                    clearInterval(intervalId);
                    setIsTyping(false);
                }
                index++;
                setDisplayedText((prev) => prev + text[index]);
            }, intervalTime);

            return () => clearInterval(intervalId);
        }, delay * 1000);

        return () => clearTimeout(startTyping);
    }, [text, isInView]); 

    return (
        <p ref={ref} className={`${className} typing`}>
            {displayedText}
        </p>
    );
};

export default TypingComponent;
