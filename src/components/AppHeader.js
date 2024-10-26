import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/hackerpot.jpg";
import "./AppHeader.css";
import { useMount, useToggle } from "react-use";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import TopMenu from "./TopMenu";
import { ThemeContext } from "../routes";

const SUN_CLASS = "light_mode",
    MOON_CLASS = "dark_mode";

export default function AppHeader() {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const isLight = theme === "light";
    const [opened, setOpen] = useToggle(false);

    const redirect = () => navigate("/");

    const toggleMode = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.body.classList.toggle("dark-mode");
    };

    const gotoTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    useMount(() => {
        new window["QRCode"](
            document.getElementById("qrcode"),
            window.location.href,
            {
                width: 50,
                height: 50,
            },
        );
    });

    const showQrCode = () =>
        document.getElementById("qrcode").classList.toggle("hide-qrcode");

    const commonStyle = {
        color: isLight ? "#000" : "#fff",
        position: "fixed",
        right: "0.5rem",
        cursor: "pointer",
        userSelect: "none",
        zIndex: 999,
    };

    const HeaderIcon = ({ action, icon, bottom }) => (
        <span
            className="material-symbols-outlined"
            onClick={action}
            style={{ bottom: `${bottom}%`, ...commonStyle }}
        >
            {icon}
        </span>
    );

    return (
        <header className="App-header">
            <div className="App-header-left" onClick={redirect}>
                <img src={logo} alt="logo" width={50} height={50} />
                <label className="App-header-title">Hacker Pot</label>
            </div>
            <div className="App-header-right">
                <HeaderIcon
                    action={gotoTop}
                    icon="arrow_circle_up"
                    bottom="50"
                />
                <HeaderIcon
                    action={toggleMode}
                    icon={isLight ? MOON_CLASS : SUN_CLASS}
                    bottom="45"
                />
                <div
                    style={{ bottom: "55%", ...commonStyle }}
                    className="qrcode-box"
                >
                    <HeaderIcon
                        action={showQrCode}
                        icon="qr_code_2"
                        bottom="55"
                    />
                    <div className="qrcode hide-qrcode" id="qrcode"></div>
                </div>
                <span
                    className="material-symbols-outlined"
                    style={{ color: "#fff", cursor: "pointer" }}
                    onClick={setOpen}
                >
                    menu
                </span>
                <Drawer open={opened} onClose={setOpen} direction="top">
                    <TopMenu />
                </Drawer>
            </div>
        </header>
    );
}
