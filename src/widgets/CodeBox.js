import copyIcon from "./copy.svg";
import { codeToHtml } from "shiki";

class CodeBoxWidget extends HTMLElement {
    constructor() {
        super();
        this.initShadowDOM();
        this.loadExternalResources();
        this.setStyle();
        this.renderCodeBox();
    }

    initShadowDOM() {
        this.shadow = this.attachShadow({ mode: "open" });
    }

    loadExternalResources() {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js";
        this.shadow.appendChild(script);
    }

    setStyle() {
        const style = document.createElement("style");
        style.textContent = `
            pre{
                border-radius:1rem;
            }
            code{
                font-family: monospace, sans-serif;
                font-size: 0.8rem;
                letter-spacing:0;
                padding:2rem 1.2rem;
                overflow:auto;
                display:block;
            }
            img{
                cursor:pointer;
                position:absolute;
                right:0.5rem;
                top:0.5rem;
            }
            #lang{
                position:absolute;
                left:0.5rem;
                top:0.5rem;
                color:#fff;
            }
        `;
        this.shadow.appendChild(style);
    }

    renderCodeBox() {
        const code = document.createElement("div");
        code.style.position = "relative";
        const codeContent = this.getAttribute("code");
        const lang = this.getAttribute("lang") || "javascript";
        codeToHtml(codeContent, {
            theme: "tokyo-night",
            lang: lang,
        }).then((html) => {
            code.innerHTML = html;
            this.addCopyFunctionality(code, lang);
            this.shadow.appendChild(code);
        });
    }

    addCopyFunctionality(code, lang) {
        const copy = document.createElement("img");
        const codeEle = code.querySelector("code");
        codeEle.id = "codeBox";
        const langLabel = this.createLangLabel(lang);
        copy.src = copyIcon;
        copy.classList.add("copyBtn");
        copy.title = "复制";
        code.appendChild(copy);
        code.appendChild(langLabel);
        this.setupClipboard(copy, codeEle);
    }

    createLangLabel(lang) {
        const langLabel = document.createElement("span");
        langLabel.textContent = lang;
        langLabel.style.fontSize = "0.8rem";
        langLabel.id = "lang";
        return langLabel;
    }

    setupClipboard(copyButton, targetElement) {
        // eslint-disable-next-line no-undef
        const clipboard = new ClipboardJS(copyButton, { target: () => targetElement });
        clipboard.on("success", () => alert("复制成功"));
        clipboard.on("error", () => alert("复制失败"));
    }
}

customElements.define("codebox-widget", CodeBoxWidget);
