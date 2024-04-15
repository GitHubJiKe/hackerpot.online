import { useNavigate } from "react-router-dom";
import logo from "../assets/hackerpot.jpg";
import "./AppHeader.css";
import { useState } from "react";

const SUN_CLASS = "light_mode",
    MOON_CLASS = "dark_mode";

export default function AppHeader() {
    const navigate = useNavigate();
    const [modeClass, setModeClass] = useState(SUN_CLASS);
    const redirect = () => {
        navigate("/");
    };
    return (
        <header className="App-header">
            <div className="App-header-left" onClick={redirect}>
                <img src={logo} alt="logo" width={50} height={50} />
                <label className="App-header-title">Hacker Pot</label>
            </div>
            <div className="App-header-right">
                <span
                    className="material-symbols-outlined"
                    onClick={() => {
                        if (modeClass === SUN_CLASS) {
                            setModeClass(MOON_CLASS);
                        } else {
                            setModeClass(SUN_CLASS);
                        }
                        document.body.classList.toggle("dark-mode");
                    }}
                    style={{
                        color: modeClass === SUN_CLASS ? "#000" : "#fff",
                        position: "fixed",
                        bottom: 12,
                        right: 12,
                        cursor: "pointer",
                    }}
                >
                    {modeClass}
                </span>
                <a
                    href="https://github.com/GitHubJiKe/hackerpot.online"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </div>
        </header>
    );
}
