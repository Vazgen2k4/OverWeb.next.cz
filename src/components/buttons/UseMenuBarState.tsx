"use client"
import { useState, useCallback } from "react";

const useMenuBarState = (initialState: boolean = false) => {
    const [isActive, setIsActive] = useState(initialState);

    // Функция для переключения состояния
    const toggleState = useCallback(() => {
        setIsActive((prevState) => !prevState);
    }, []);

    // Функция для сброса состояния
    const resetState = useCallback(() => {
        setIsActive(false);
    }, []);

    return {
        isActive,
        toggleState,
        resetState,
    };
};


export default useMenuBarState;