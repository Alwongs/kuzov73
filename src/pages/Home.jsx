import AboutSection from "../sections/AboutSection";
import ContactsSection from "../sections/ContactsSection";
import FeedbackSection from "../sections/FeedbackSection";
import GallerySection from "../sections/GallerySection";
import MainBannerSection from "../sections/MainBannerSection";
import ServicesSection from "../sections/ServicesSection";

export default function Home() {

    return (
        <div className="page">
            
            <MainBannerSection />

            <AboutSection />

            <ServicesSection background="section-grey" />

            <FeedbackSection />

            <GallerySection background="section-grey" />

            <ContactsSection />
           
        </div>
    );
}