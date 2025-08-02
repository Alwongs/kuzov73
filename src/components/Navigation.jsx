import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navigation">
            <Link className="navigation__link" to="/about">О нас</Link>
            <Link className="navigation__link" to="/services">Услуги</Link>
            <Link className="navigation__link" to="/feedbacks">Отзывы</Link>
            <Link className="navigation__link" to="/gallery">Галерея</Link>
            <Link className="navigation__link" to="/contacts">Контакты</Link>
        </nav>
    );
}