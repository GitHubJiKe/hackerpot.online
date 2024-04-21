import "./App.css";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import Porfilo from "../components/Porfilo";
import { Link } from "react-router-dom";

import articles from "../articles";
import Weather from "../components/Weather";
import { useTitle } from "react-use";
const filterFun = (item) => {
    if (window.location.origin.includes("localhost")) {
        return true;
    } else {
        return !item.title.toLowerCase().includes("test");
    }
};
function App() {
    useTitle("骇客地锅");
    return (
        <div className="App">
            <AppHeader />
            <AppContent>
                <div className="widgets">
                    <Weather />
                </div>
                <div style={{ flex: 4, textAlign: "center" }}>
                    {articles.filter(filterFun).map((item, idx) => {
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

export default App;
