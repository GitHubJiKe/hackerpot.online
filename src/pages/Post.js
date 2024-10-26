import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useTitle } from "react-use";
import AppHeader from "../components/AppHeader";
import Article from "../components/Article";
import Catalog from "../components/Catalog";
import { articles } from "../articles";
import { useComment } from "../utils";
import "./Post.css";

function useArticle(postId) {
    return articles.find((item) => item.id === postId);
}

function useCatalog(titles) {
    useEffect(() => {
        const mountPoint = document.createElement("div");
        mountPoint.classList.add("catalog");
        document.body.appendChild(mountPoint);
        createRoot(mountPoint).render(<Catalog titles={titles} />);

        return () => {
            document.body.removeChild(mountPoint);
        };
    });
}

export default function Post() {
    const { postId } = useParams();
    const article = useArticle(postId);
    useTitle(article.title);
    const titles = [
        article.title,
        ...(article.chapters || []).map((c) => c.title),
    ];
    useCatalog(titles);
    useComment();

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
