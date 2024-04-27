import AppHeader from "../components/AppHeader";
import Article from "../components/Article";
import Catalog from "../components/Catalog";
import { articles } from "../articles";
import { useParams } from "react-router-dom";
import "./Post.css";
import { useMount, useTitle } from "react-use";
import { createRoot } from "react-dom/client";

function useAnchors(titles) {
    useMount(() => {
        if (document.body.querySelector(".catalog")) {
            return;
        }
        const mountPoint = document.createElement("div");
        mountPoint.classList.add("catalog");
        createRoot(mountPoint).render(<Catalog titles={titles} />);
        document.body.appendChild(mountPoint);
    });
}

export default function Post() {
    const { postId } = useParams();
    const article = articles.find((item) => item.id === postId);
    useTitle(article.title);
    const titles = article.chapters.map((c) => c.title);
    titles.unshift(article.title);
    useAnchors(titles);
    return (
        <div className="Post">
            <AppHeader />
            <main
                style={{
                    padding: 12,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Article {...article} />
            </main>
        </div>
    );
}
