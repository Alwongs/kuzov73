import GalleryCard from "../components/GalleryCard";
import { gallery, galleryImageDirPath } from "../js/data/gallery";

export default function GallerySection({ background }) {
    return (
        <section className={`section ${background}`}>

            <div className="container">
                <h1 className="page__title">Фотоальбом</h1>

                <ul className="gallery-list">
                    {gallery?.map((item) => (
                        <GalleryCard
                            key={item.id}
                            imgPath={`${galleryImageDirPath}/photo-${item.id}.jpg` }
                        />
                    ))}
                </ul>
            </div>

        </section>
    );
}