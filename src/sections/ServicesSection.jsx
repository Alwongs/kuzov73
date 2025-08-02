import ServiceCard from "../components/ServiceCard";
import { services } from "../js/data/services";

export default function ServicesSection({ background = "" }) {
    return (
        <section className={`section ${background}`}>
            <div className="container">
                <h1 className="page__title">Услуги</h1>

                <ul className="services-list">
                    {services?.map((item) => (
                        <ServiceCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}