export default function ServiceCard({ data }) {
    return (
        <li className="about-paragraph">

            <p className="about-paragraph__description">
                { data.description }
            </p>
        </li>
    );
}