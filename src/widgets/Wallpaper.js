import { createRoot } from "react-dom/client";
import download from "./download.svg";
import { downloadImageByUrlAndName } from "../utils";

function Wallpaper({ images }) {
    const onDownload = (item, idx) => {
        downloadImageByUrlAndName(item, "wallpaper_" + idx + ".png");
    };

    return (
        <div className="wallpapers">
            {images.map((item, idx) => (
                <div key={idx} className="img" style={{ position: "relative" }}>
                    <img
                        src={item}
                        alt={`wallpaper_${idx}`}
                        width={"100%"}
                        style={{ borderRadius: "1rem" }}
                    />
                    <img
                        src={download}
                        alt="download"
                        className="download"
                        onClick={() => onDownload(item, idx)}
                    />
                </div>
            ))}
        </div>
    );
}

class WallpaperWidget extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement("div");
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = `
        .wallpapers {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 0.5rem;
        }
   
        .download {
            width:2rem !important;
            height:2rem;
            position:absolute;
            cursor:pointer;
            right: 0.5rem;
            top: 0.5rem;
        }
        `;

        shadow.appendChild(style);
        shadow.appendChild(mountPoint);
        const images = this.getAttribute("images").split(",");
        createRoot(mountPoint).render(<Wallpaper images={images} />);
    }
}

customElements.define("wallpaper-widget", WallpaperWidget);
