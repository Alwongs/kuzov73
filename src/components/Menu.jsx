import { useState } from "react";
import Navigation from './Navigation';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarHandler = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <header className="menu__header">
                    <button className="menu__close-btn" onClick={sidebarHandler}>
                        Закрыть
                    </button>  
                </header>


                <Navigation />
            </div>


            <button className="top-panel-menu-btn" onClick={sidebarHandler}>
                Menu
            </button>                   
        </>
    )    
}