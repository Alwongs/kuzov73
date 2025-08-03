import { useState } from "react";
import Navigation from './Navigation';

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuHandler = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const closeMenuHandler = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <header className="menu__header">
                    <button className="menu__close-btn" onClick={toggleMenuHandler}>
                        Закрыть
                    </button>  
                </header>

                <Navigation clickAction={closeMenuHandler} />
            </div>


            <button className="top-panel-menu-btn" onClick={toggleMenuHandler}>
                Menu
            </button>                   
        </>
    )    
}