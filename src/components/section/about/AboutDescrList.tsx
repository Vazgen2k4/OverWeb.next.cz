"use client"

import { about } from '../../../../messages/en.json';
import { useTranslations } from 'next-intl';
import TypingComponent from '@/components/animation/TypingComponent';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const length = about.description.length;
const duration = 2;
const totalDuration = (length) * duration;


const AboutDescrList = () => {
    const t = useTranslations();
    const ref = useRef<HTMLUListElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <ul ref={ref} className="about__info-list about__list">

            <motion.div
                className="border"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: totalDuration, ease: 'linear' }}

            />

            {Array.from({ length }, (_, index) => (
                <li key={index} className="about__list-item">
                    <TypingComponent
                        className='about__item-descr'
                        text={t(`about.description.${index}`)}
                        duration={duration}
                        delay={index * duration}
                    />
                </li>
            ))}
        </ul>
    );
};

export default AboutDescrList;
