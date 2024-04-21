import { copyText } from "../utils";
import copyIcon from "./copy.svg";
import { codeToHtml } from "shiki";

class CodeBoxWidget extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-dark.min.css";
        shadow.appendChild(link);

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
        shadow.appendChild(style);

        const code = document.createElement("div");
        code.style.position = "relative";
        const codeContent = this.getAttribute("code");
        const lang = this.getAttribute("lang");
        const _lang = lang || "javascript";
        codeToHtml(codeContent, {
            theme: "tokyo-night",
            lang: _lang,
            decorations: [
                {
                    start: { line: 1, character: 0 },
                    end: { line: 1, character: 11 },
                    properties: { class: "highlighted-word" },
                },
            ],
        }).then((html) => {
            code.innerHTML = html;

            const copy = document.createElement("img");
            const lang = document.createElement("span");
            lang.textContent = _lang;
            lang.id = "lang";
            copy.src = copyIcon;
            copy.title = "复制";
            copy.addEventListener("click", async () => {
                if (await copyText(codeContent)) {
                    alert("复制成功");
                } else {
                    alert("复制失败");
                }
            });
            code.appendChild(copy);
            code.appendChild(lang);
            shadow.appendChild(code);
        });
    }
}

customElements.define("codebox-widget", CodeBoxWidget);
