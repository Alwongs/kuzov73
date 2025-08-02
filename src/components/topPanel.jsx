import { Link } from 'react-router-dom';
import Menu from "./Menu";

export default function TopPanel () {

    return (
        <div className="top-panel">

            <Link className="home-link" to="/">Главная</Link>
            <Menu />   

        </div>
    )
}