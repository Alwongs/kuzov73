export default function GalleryCard({ imgPath }) {
    return (
        <li className="gallery-card">
            <div className="gallery-card__image-cover">
                <img src={imgPath} alt="Изображение" />
            </div>
        </li>
    );
}