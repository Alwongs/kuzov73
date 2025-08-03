import NavigationLink from "../components/NavigationLink";
import { navigationData } from "../js/data/navigation";

export default function Navigation({clickAction}) {
    return (
        <nav className="navigation">

            {navigationData?.map((item) => (
                <NavigationLink
                    key={item.id}
                    data={item}
                    clickAction={clickAction}
                />
            ))}
        </nav>
    );
}