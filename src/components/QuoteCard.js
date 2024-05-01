import { getBgUrl } from "../utils";
import "./QuoteCard.css";

export default function QuoteCard({ children, bgId }) {
    const url = getBgUrl(bgId || Math.floor(Math.random() * 99));

    return (
        <div className="quoteCard" style={{ backgroundImage: `url(${url})` }}>
            <div className="quoteContent"> {children}</div>
        </div>
    );
}
