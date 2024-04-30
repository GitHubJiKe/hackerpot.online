import { getBgUrl } from "../utils";
import "./QuoteCard.css";

export default function QuoteCard({ children }) {
    const url = getBgUrl(Math.floor(Math.random() * 99));

    console.log(url);
    return (
        <div className="quoteCard" style={{ backgroundImage: `url(${url})` }}>
            <div className="quoteContent"> {children}</div>
        </div>
    );
}
