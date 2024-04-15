import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/hackerpot.jpg";
import "./AppHeader.css";

const SUN_CLASS = "light_mode",
    MOON_CLASS = "dark_mode";

export default function AppHeader() {
    const navigate = useNavigate();
    const [modeClass, setModeClass] = useState(SUN_CLASS);
    const redirect = () => navigate("/");
    const toggleMode = () => {
        if (modeClass === MOON_CLASS) {
            setModeClass(SUN_CLASS);
        } else {
            setModeClass(MOON_CLASS);
        }
        document.body.classList.toggle("dark-mode");
    };
    const gotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const commonStyle = {
        color: modeClass === SUN_CLASS ? "#000" : "#fff",
        position: "fixed",
        right: 4,
        cursor: "pointer",
        userSelect: "none",
    };
    return (
        <header className="App-header">
            <div className="App-header-left" onClick={redirect}>
                <img src={logo} alt="logo" width={50} height={50} />
                <label className="App-header-title">Hacker Pot</label>
            </div>
            <div className="App-header-right">
                <span
                    class="material-symbols-outlined"
                    style={{
                        bottom: 72,
                        ...commonStyle,
                    }}
                    onClick={gotoTop}
                >
                    arrow_circle_up
                </span>
                <span
                    className="material-symbols-outlined"
                    onClick={toggleMode}
                    style={{
                        bottom: 24,
                        ...commonStyle,
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
