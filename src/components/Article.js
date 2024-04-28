import "./Article.css";
import defaultBanner from "../assets/banner.jpg";
import { removeAllSpace } from "../utils";

const Banner = ({ banner }) => (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
);

const TimeInfo = ({ icon, label }) => (
    <div>
        <span className="material-symbols-outlined">{icon}</span>
        <label className="timevalue">{label}</label>
    </div>
);

const Chapter = ({ title, content }) => (
    <div>
        {title && <h3 id={title}>{title}</h3>}
        <div dangerouslySetInnerHTML={{ __html: removeAllSpace(content) }}></div>
    </div>
);

export default function Article({ title, banner = defaultBanner, chapters, datetime, time2read }) {
    return (
        <div className="Article">
            <Banner banner={banner} />
            <div className="content">
                <div className="time">
                    <TimeInfo icon="timer" label={time2read} />
                    <TimeInfo icon="calendar_month" label={datetime} />
                </div>
                <h2 style={{ textAlign: "center" }} id={title}>
                    {title}
                </h2>
                <div className="article-full">
                    {chapters.map((item, idx) => (
                        <Chapter key={idx} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
        </div>
    );
}
