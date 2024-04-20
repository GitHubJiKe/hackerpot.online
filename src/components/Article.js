/**
 *
 * @param {*} param0
 * @returns
 *
 * {
 *      title:string;
 *      content:htmlString
 * }
 */

import { useEffect, useState } from "react";
import "./Article.css";
import defaultBanner from "../assets/banner.jpg";

export default function Article({
    title,
    banner = defaultBanner,
    chapters,
    datetime,
    time2read,
}) {
    // const [articleClass, setArticleClass] = useState("article");
    // const [qrcodeShow, setQrcodeShow] = useState(false);
    // const readmore = () => {
    //     if (articleClass === "article") {
    //         setArticleClass("article-full");
    //         setQrcodeShow(true);
    //     } else {
    //         setArticleClass("article");
    //         setQrcodeShow(false);
    //     }
    // };

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
                <h2 style={{ textAlign: "center" }}>{title}</h2>
                <article className={"article-full"}>
                    {chapters.map((item, idx) => {
                        return (
                            <div key={idx}>
                                {item.title && <h3>{item.title}</h3>}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </article>
                {/* <div className="readMoreBtn">
                    <div className="button" onClick={readmore}>
                        {articleClass === "article" ? (
                            <span className="material-symbols-outlined">
                                keyboard_double_arrow_down
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                keyboard_double_arrow_up
                            </span>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
