"use client"

import { about } from '../../../../messages/en.json';
import { useTranslations } from 'next-intl';
import TypingComponent from '@/components/animation/TypingComponent';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const length = about.description.length;
const duration = 2;
const totalDuration = length * duration * 1000;


const AboutDescrList = () => {
    const t = useTranslations();
    const controls = useAnimation();
    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {

        setTimeout(() => {
            if (ref.current) {

                controls.start({ height: `${ref.current.offsetHeight}px` });
            }
        }, totalDuration);

    }, [controls]);

    return (
        <ul ref={ref} className="about__info-list about__list">

            <motion.div
                className="border"
                initial={{ height: 0 }}
                animate={controls}
                transition={{ duration: .3 }}
            />

            {Array.from({ length }, (_, index) => (
                <li key={index} className="about__list-item">
                    <TypingComponent
                        className='about__item-descr'
                        text={t(`about.description.${index}`)}
                        duration={duration}
                        delay={index * duration} // Задержка для каждого параграфа
                    />
                </li>
            ))}
        </ul>
    );
};

export default AboutDescrList;
