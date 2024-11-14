"use client"

import { motion } from 'framer-motion';
import React from 'react';

enum AnimationType {
    TopToBottom = 'topToBottom',
    BottomToTop = 'bottomToTop',
    LeftToRight = 'leftToRight',
    RightToLeft = 'rightToLeft',
    TopLeftToBottomRight = 'topLeftToBottomRight',
    BottomLeftToTopRight = 'bottomLeftToTopRight',
    TopRightToBottomLeft = 'topRightToBottomLeft',
    BottomRightToTopLeft = 'bottomRightToTopLeft',
}

export { AnimationType };

const animationConfig: Record<AnimationType, { initial: any, animate: any }> = {
    [AnimationType.TopToBottom]: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
    [AnimationType.BottomToTop]: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    [AnimationType.LeftToRight]: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    [AnimationType.RightToLeft]: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    [AnimationType.TopLeftToBottomRight]: { initial: { opacity: 0, x: -50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 } },
    [AnimationType.BottomLeftToTopRight]: { initial: { opacity: 0, x: -50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 } },
    [AnimationType.TopRightToBottomLeft]: { initial: { opacity: 0, x: 50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 } },
    [AnimationType.BottomRightToTopLeft]: { initial: { opacity: 0, x: 50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 } },
};

interface FadeInComponentProps {
    animationType?: AnimationType;
    duration?: number;
    children: React.ReactNode;
    className?: string;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({
    animationType = AnimationType.TopToBottom,
    duration = 0.6,
    children,
    className,
}) => {
    const { initial, animate } = animationConfig[animationType];

    return (
        <motion.div
            className={className}
            initial={initial}
            animate={animate}
            transition={{ duration, ease: 'linear' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInComponent;
