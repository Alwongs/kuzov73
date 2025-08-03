import { Link } from 'react-router-dom';

export default function NavigationLink({title, url, clickAction}) {

    return (
        <Link
            className="navigation__link"
            to={url}
            onClick={clickAction}
        >
            { title }
        </Link>
    );
}