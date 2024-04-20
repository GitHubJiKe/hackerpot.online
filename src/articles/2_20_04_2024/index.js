import wp1 from "./1.png";
import wp2 from "./2.png";
import wp3 from "./3.png";
import wp4 from "./4.png";
import wp5 from "./5.png";
import "../../widgets/Wallpaper";
import "../../widgets/CodeBox";

const code = `
// 定义React组件
function MyComponent() {
    return (<div className='mycomponent'>My Component</div>);
}

// 实现web component
class MyComponentElement extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const mountPoint = document.createElement('div');
        
        const style = document.createElement('style');
        style.textContent = '.mycomponent { color:red }'
        
        shadow.appendChild(style);
        shadow.appendChild(mountPoint);

        createRoot(mountPoint).render(<MyComponent/>);
    } 
}

// 定义web component
customElements.define('my-component-element', MyComponentElement);
`;
const article = {
    id: "2024-04-20_2",
    title: "在React中使用Web Component",
    time2read: "2 min",
    datetime: "20/04/2024",
    type: "article",
    banner: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chapters: [
        {
            title: "在React中使用Web Component",
            content: `<codebox-widget code="${code}" lang="jsx"></codebox-widget>`,
        },
        {
            title: "壁纸欣赏",
            content: `
            <blockquote>治愈系</blockquote>
            <wallpaper-widget images="${[
                wp1,
                wp2,
                wp3,
                wp4,
                wp5,
            ]}"></wallpaper-widget>
            <h4 style="text-align:center">望喜之</h4>
            `,
        },
    ],
};

export default article;
