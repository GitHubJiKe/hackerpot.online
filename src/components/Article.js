import "./Article.css";
import defaultBanner from "../assets/banner.jpg";
import { mdParse, removeAllSpace } from "../utils";
import MindMap from "./MindMap";

const Banner = ({ banner }) => (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
);

const TimeInfo = ({ icon, label }) => (
    <div>
        <span className="material-symbols-outlined">{icon}</span>
        <label className="timevalue">{label}</label>
    </div>
);

const Chapter = ({ title, content, format }) => {
    let finalContent = removeAllSpace(content);
    if (format === "md") {
        finalContent = mdParse(content);
    }
    return (
        <div>
            {title && <h3 id={title}>{title}</h3>}
            <div dangerouslySetInnerHTML={{ __html: finalContent }}></div>
        </div>
    );
};

export default function Article({
    title,
    banner = defaultBanner,
    chapters,
    datetime,
    time2read,
    type,
    nodes,
    edges,
}) {
    const isMindMap = type === "mindmap";

    const mindMap = <MindMap nodes={nodes} edges={edges} />;

    console.log(isMindMap, nodes, edges);
    return (
        <div className="Article">
            <Banner banner={banner} />
            <div className="content">
                <div className="time">
                    <TimeInfo icon="timer" label={time2read} />
                    <TimeInfo icon="calendar_month" label={datetime} />
                </div>
                <h1 style={{ textAlign: "center" }} id={title}>
                    {title}
                </h1>
                <div className="article-full">
                    {isMindMap && mindMap}
                    {chapters &&
                        chapters.length &&
                        chapters.map((item, idx) => (
                            <Chapter
                                key={idx}
                                title={item.title}
                                content={item.content}
                                format={item.format}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
