import "./App.css";
import { Link } from "react-router-dom";
import { useTitle } from "react-use";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import Weather from "../components/Weather";
import { articles } from "../articles";

const isLocalhost = () => window.location.origin.includes("localhost");
const shouldDisplayArticle = (item) => isLocalhost() || !item.title.toLowerCase().includes("test");

export default function App() {
    useTitle("骇客地锅");

    return (
        <div className="App">
            <AppHeader />
            <AppContent>
                <div className="widgets">
                    <Weather />
                </div>
                <div style={{ flex: 4, textAlign: "center" }}>
                    {articles.filter(shouldDisplayArticle).map((item, idx) => {
                        return (
                            <div key={idx} className="linkcard">
                                <Link to={`/post/${item.id}`}>
                                    <label
                                        style={{
                                            fontSize: "1.2rem",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item.title} —— {item.datetime}
                                    </label>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </AppContent>
        </div>
    );
}