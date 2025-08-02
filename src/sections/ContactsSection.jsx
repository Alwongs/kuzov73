import YandexMap from "../components/YandexMap";

export default function ContactsSection() {
    return (
        <section className="section section-dark-blue">

            <div className="container container-flex-column">
                <h1 className="contact-info__title">Контакты</h1>

                <div className="contact-info__content">
                    <p>📍 г. Ульяновск, ул. Созидателей 31Б</p>
                    <p>📞 +7 (927) 270-73-05</p>
                </div>     

                <YandexMap />
            </div>

        </section>
    );
}