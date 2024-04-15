import "./App.css";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import Porfilo from "../components/Porfilo";

import { articles } from "../mock";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <AppHeader />
            <AppContent>
                <Porfilo avatar={avatar} />
                <div style={{ flex: 4, textAlign: "center" }}>
                    {articles.map((item, idx) => {
                        return (
                            <Link to={`/post/${item.id}`} key={idx}>
                                <label style={{ fontSize: "1.4rem" }}>
                                    {item.title}
                                </label>
                            </Link>
                        );
                    })}
                </div>
            </AppContent>
        </div>
    );
}

export default App;
