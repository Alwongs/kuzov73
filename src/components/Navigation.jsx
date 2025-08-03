import NavigationLink from "../components/NavigationLink";
import { navigationData } from "../js/data/navigation";

export default function Navigation({clickAction}) {
    return (
        <nav className="navigation">

            <NavigationLink
                title="Главная"
                url="/"
                clickAction={clickAction}
            />            

            {navigationData?.map((item) => (
                <NavigationLink
                    key={item.id}
                    title={item.title}
                    url={item.url}
                    clickAction={clickAction}
                />
            ))}
        </nav>
    );
}