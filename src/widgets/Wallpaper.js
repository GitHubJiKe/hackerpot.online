import React from "react";
import { createRoot } from "react-dom/client";
import downloadIcon from "./download.svg";
import { downloadImageByUrlAndName } from "../utils";

const DownloadButton = ({ onClick }) => (
    <img
        src={downloadIcon}
        alt="download"
        className="download"
        onClick={onClick}
        style={{
            width: "2rem",
            height: "2rem",
            position: "absolute",
            cursor: "pointer",
            right: "0.5rem",
            top: "0.5rem",
        }}
    />
);

const WallpaperImage = ({ src, alt, onDownload }) => (
    <div className="img" style={{ position: "relative" }}>
        <img src={src} alt={alt} width={"100%"} style={{ borderRadius: "1rem" }} />
        <DownloadButton onClick={onDownload} />
    </div>
);

const Wallpapers = ({ images }) => (
    <div className="wallpapers">
        {images.map((item, idx) => (
            <WallpaperImage
                key={idx}
                src={item}
                alt={`wallpaper_${idx}`}
                onDownload={() => downloadImageByUrlAndName(item, `wallpaper_${idx}.png`)}
            />
        ))}
    </div>
);

class WallpaperWidget extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement("div");
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = `
            .wallpapers {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 0.5rem;
            }
            @media screen and (max-width: 500px) {
                .wallpapers {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(mountPoint);
        const images = this.getAttribute("images").split(",");
        createRoot(mountPoint).render(<Wallpapers images={images} />);
    }
}

customElements.define("wallpaper-widget", WallpaperWidget);
