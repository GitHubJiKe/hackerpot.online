import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
class TooltipsWidget extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
        <style>
            .tooltipsContainer {
                border-bottom: 0.2rem dotted var(--quote-border-color);
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--quote-border-color);
            }
        </style>
        <label class="tooltipsContainer" id="tooltipsContainer">
            <slot></slot>
        </label>
        `
    }
    connectedCallback() {
        const content = this.getAttribute("content");
        const placement = this.getAttribute('placement') || 'top';
        const target = this.shadowRoot.querySelector('#tooltipsContainer')
        tippy(target, {
            placement,
            content
        });
    }
}

customElements.define("tooltips-widget", TooltipsWidget);
