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
            font-family: monospace, sans-serif;
            border-radius:1rem;
            padding:0.6rem 1.2rem;
            font-size: 0.8rem;
            letter-spacing:0;
        }
        img{
            cursor:pointer;
            float:right;
            position:relative;
            right:0.5rem;
            top:0.5rem;
        }
        `;
        shadow.appendChild(style);

        const code = document.createElement("div");
        const codeContent = this.getAttribute("code");
        const lang = this.getAttribute("lang");
        codeToHtml(codeContent, {
            theme: "material-theme-darker",
            lang: lang || "javascript",
            decorations: [
                {
                    // line 和 character 都是从 0 开始索引的
                    start: { line: 1, character: 0 },
                    end: { line: 1, character: 11 },
                    properties: { class: "highlighted-word" },
                },
            ],
        }).then((html) => {
            code.innerHTML = html;

            const copy = document.createElement("img");
            copy.src = copyIcon;
            copy.title = "复制";
            copy.addEventListener("click", async () => {
                if (await copyText(codeContent)) {
                    alert("复制成功");
                } else {
                    alert("复制失败");
                }
            });
            shadow.appendChild(copy);
            shadow.appendChild(code);
        });
    }
}

customElements.define("codebox-widget", CodeBoxWidget);
