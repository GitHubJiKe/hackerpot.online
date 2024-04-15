import AppHeader from "../components/AppHeader";
import Article from "../components/Article";
import banner from "../assets/banner.jpg";
import articles from "../articles";
import { useParams } from "react-router-dom";
import "./Post.css";
import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.min.css";
// import "highlight.js/styles/atom-one-light.min.css";
export default function Post() {
    const { postId } = useParams();
    const article = articles.find((item) => item.id === postId);

    useEffect(() => {
        // Then register the languages you need
        hljs.registerLanguage("javascript", javascript);
        hljs.highlightAll();
    }, []);

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
