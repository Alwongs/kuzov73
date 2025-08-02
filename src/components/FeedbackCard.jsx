export default function FeedbackCard({ data }) {
    return (
        <li className="feedback-card">
            <h2 className="feedback-card__title">{ data.name }</h2>
            <p className="feedback-card__description">
                { data.description }
            </p>
        </li>
    );
}