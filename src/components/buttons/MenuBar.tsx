"use client"
import { useState } from "react";



const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(prevState => {

            const body = document.body;
            if (body) {
                body.classList.toggle("_no__scroll", !prevState);
            }
            return !prevState;
        });
    };

    return (
        <>
            <label className="bars" onClick={handleClick}>
                <span className="burger"></span>
            </label>
        </>
    );
};

export default MenuBar;

