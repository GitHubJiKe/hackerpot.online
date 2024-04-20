import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/hackerpot.jpg";
import "./AppHeader.css";
import { useMount } from "react-use";

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

    useMount(() => {
        new window["QRCode"](
            document.getElementById("qrcode"),
            // eslint-disable-next-line no-restricted-globals
            location.href,
            {
                width: 50,
                height: 50,
            },
        );
    });
    const showQrCode = () => {
        document.getElementById("qrcode").classList.toggle("hide-qrcode");
    };
    const commonStyle = {
        color: modeClass === SUN_CLASS ? "#000" : "#fff",
        position: "fixed",
        right: "0.5rem",
        cursor: "pointer",
        userSelect: "none",
        zIndex: 999,
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
                    style={{
                        bottom: "50%",
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
                        bottom: "45%",
                        ...commonStyle,
                    }}
                >
                    {modeClass}
                </span>
                <div
                    style={{
                        bottom: "55%",
                        ...commonStyle,
                    }}
                >
                    <span
                        className="material-symbols-outlined"
                        onClick={showQrCode}
                        style={{ position: "relative" }}
                    >
                        qr_code_2
                        <div className="qrcode hide-qrcode" id="qrcode"></div>
                    </span>
                </div>
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
