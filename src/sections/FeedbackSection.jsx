import FeedbackCard from "../components/FeedbackCard";
import { feedbacks } from "../js/data/feedbacks";

export default function FeedbackSection() {
    return (
        <section className="section">

            <div className="container">
                <h1 className="page__title">Отзывы</h1>

                <ul className="feedbacks-list">
                    {feedbacks?.map((item) => (
                        <FeedbackCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </ul>
            </div>

        </section>
    );
}