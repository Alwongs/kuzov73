export default function ServiceCard({ data }) {

    return (
        <li className="service-card">
            <div className="service-card__image-cover">
                <img
                    src={data.imagePath}
                    alt="Изображение"
                    loading="lazy"
                />
            </div>
            <h2 className="service-card__title">{ data.title }</h2>
            <p className="service-card__description">
                { data.description }
            </p>
        </li>
    );
}