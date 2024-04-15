import "./App.css";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import Porfilo from "../components/Porfilo";
import { Link } from "react-router-dom";

import avatar from "../assets/avatar.jpg";
import articles from "../articles";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <AppContent>
                <Porfilo avatar={avatar} />
                <div style={{ flex: 4, textAlign: "center" }}>
                    {articles.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                style={{ margin: "1rem 0", textAlign: "left" }}
                            >
                                <Link to={`/post/${item.id}`}>
                                    <label style={{ fontSize: "1.4rem" }}>
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
