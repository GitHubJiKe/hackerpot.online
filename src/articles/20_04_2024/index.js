import wp1 from "./1.jpeg";
import wp2 from "./2.jpg";
import wp3 from "./3.jpg";
import wp4 from "./4.jpg";
const article = {
    id: "2024-04-20",
    title: "每周分享",
    time2read: "3 min",
    datetime: "20/04/2024",
    type: "article",
    banner: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chapters: [
        {
            title: "本周分享",
            content: `
            <blockquote>本周分享2个非常有价值的开发利器。</blockquote>
            `,
        },
        {
            title: "1、 UI Colors",
            content: `<a href="https://uicolors.app/create" target="_blank">uicolors</a> 
                    <ul>
                    <li>UI Colors Create 是一个用于生成自定义颜色调色板的在线工具</li>
                    <li>可以通过输入十六进制代码或调整 HSL 值来创建自定义颜色调色板</li>
                    </ul>
                    <iframe src="https://uicolors.app/create"></iframe>
            `,
        },
        {
            title: "2、 LeaferJS",
            content: `<a href="https://www.leaferjs.com/" target="_blank">LeaferJS</a> Leafer UI 是一套简洁、开放、现代化的 UI 绘图语言标准，提供跨平台、轻量化、高性能的运行时，可结合 AI 绘图、生成界面。它提供了常用的 UI 绘图组件，并为跨平台开发提供了统一、丰富的交互事件，如拖拽、旋转、缩放手势等。Leafer UI 致力于让不同的软件之间能够沟通、协作、共享绘图数据，让数字化产品开发可以更快、更简单。Leafer UI 还期待出现这样的开源技术：可以实时多人在线存储、读取单个百万级图形数据的文件存储格式，以及可以实时多人在线传输大量图形数据的通信系统。
            <iframe src="https://www.leaferjs.com"></iframe>
            `,
        },
        {
            title: "摘抄",
            content: `<blockquote>力求正确很重要，为什么？因为我们公司现在特别大，从微观的角度看，不可避免会存在很多低效的地方。如果没有力求正确，很多事情很可能就是将错就错，大家沿着错误的路径一直走下去。而且组织壮大以后，也会形成一种巨大的惯性。这种惯性也很可怕，当你发现身边所有人都这么干的时候，很多时候你也就不思考了。</blockquote>`,
        },
        {
            title: "壁纸欣赏",
            content: `
            <blockquote>可爱捏！！！</blockquote>
            <div class="wallpapers">
            <img src="${wp1}" width="100%" alt="1" />
            <img src="${wp2}" width="100%" alt="2" />
            <img src="${wp3}" width="100%" alt="3" />
            <img src="${wp4}" width="100%" alt="4" />
            </div>
            <h4 style="text-align:center">望喜之</h4>
            `,
        },
    ],
};

export default article;
