import "./Article.css";
import defaultBanner from "../assets/banner.jpg";
import { removeAllSpace } from "../utils";

export default function Article({
    title,
    banner = defaultBanner,
    chapters,
    datetime,
    time2read,
}) {
    return (
        <div className="Article">
            <div
                className="banner"
                style={{ backgroundImage: `url(${banner})` }}
            ></div>
            <div className="content">
                <div className="time">
                    <div>
                        <span className="material-symbols-outlined">timer</span>
                        <label className="timevalue">{time2read}</label>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>
                        <label className="timevalue">{datetime}</label>
                    </div>
                </div>
                <h2 style={{ textAlign: "center" }} id={title}>
                    {title}
                </h2>
                <div className={"article-full"}>
                    {chapters.map((item, idx) => {
                        return (
                            <div key={idx}>
                                {item.title && (
                                    <h3 id={item.title}>{item.title}</h3>
                                )}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: removeAllSpace(item.content),
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
