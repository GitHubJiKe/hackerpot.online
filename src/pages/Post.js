import AppHeader from "../components/AppHeader";
import Article from "../components/Article";
import articles from "../articles";
import { useParams } from "react-router-dom";
import "./Post.css";

export default function Post() {
    const { postId } = useParams();
    const article = articles.find((item) => item.id === postId);

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
