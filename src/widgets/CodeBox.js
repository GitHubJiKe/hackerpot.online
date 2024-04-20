import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.min.css";
import { removeAllSpace, copyText } from "../utils";
// import "highlight.js/styles/atom-one-light.min.css";
import copyIcon from "./copy.svg";

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

        const code = document.createElement("code");
        const codeContent = removeAllSpace(this.getAttribute("code"));
        code.textContent = codeContent;

        const pre = document.createElement("pre");
        pre.appendChild(code);
        const copy = document.createElement("img");
        copy.src = copyIcon;
        copy.addEventListener("click", async () => {
            if (await copyText(codeContent)) {
                alert("复制成功");
            } else {
                alert("复制失败");
            }
        });
        shadow.appendChild(copy);
        shadow.appendChild(pre);
    }

    connectedCallback() {
        hljs.registerLanguage("javascript", javascript);
        hljs.highlightElement(this.shadowRoot.querySelector("pre"));
    }
}

customElements.define("codebox-widget", CodeBoxWidget);
