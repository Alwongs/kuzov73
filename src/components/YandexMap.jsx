export default function YandexMap () {

    return (
        <div className="yandex-map-component">
            <a
                className="yandex-map-component__top-link"
                href="https://yandex.ru/maps/195/ulyanovsk/?utm_medium=mapframe&utm_source=maps"
            >
                Ульяновск
            </a>

            <a
                className="yandex-map-component__bottom-link"
                href="https://yandex.ru/maps/195/ulyanovsk/?l=sat&ll=48.576570%2C54.360645&mode=whatshere&utm_campaign=desktop&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=48.576495%2C54.360546&whatshere%5Bzoom%5D=19&z=19"
            >
                Яндекс Карты
            </a>

            <iframe
                className="yandex-map-component__frame"
                src="https://yandex.ru/map-widget/v1/?l=sat&ll=48.576570%2C54.360645&mode=whatshere&utm_campaign=desktop&utm_medium=search&utm_source=maps&whatshere%5Bpoint%5D=48.576495%2C54.360546&whatshere%5Bzoom%5D=19&z=19"
                frameBorder={1}
                allowFullScreen={true}
            ></iframe>
        </div>  
    )
}

