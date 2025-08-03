import { Link } from 'react-router-dom';

export default function NavigationLink({data, clickAction}) {

    return (
        <Link
            className="navigation__link"
            to={data.url}
            onClick={clickAction}
        >
            { data.title }
        </Link>
    );
}