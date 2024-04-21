import wp1 from "./1.png";
import wp2 from "./2.png";
import wp3 from "./3.png";
import wp4 from "./4.png";
import wp5 from "./5.png";
import wp6 from "./6.png";
import wp7 from "./7.png";
import wp8 from "./8.png";

import "../../widgets/Wallpaper";
import "../../widgets/CodeBox";

const title = "Shiki 式 —— 语法高亮器";
const codeContent = `interface IUser {
    name:string;
    age:number;
}

const user:IUser = {
    name:'Hacker Pot',
    age:32
}

function logUser(user:IUser){
    console.log(user.name + ' is ' + user.age + 'years old.')
}

logUser(user); // Hacker Pot is 32 years old.
`;
const URL = "https://shiki.tmrs.site/";
const banner =
    "https://images.unsplash.com/photo-1501769752-a59efa2298ce?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const article = {
    id: "2024-04-21",
    title,
    time2read: "3 min",
    datetime: "21/04/2024",
    type: "article",
    banner,
    chapters: [
        {
            title,
            content: ` <blockquote>美观而强大的代码高亮器</blockquote>`,
        },
        {
            title: "效果展示",
            content: `
            <p>在我的站内使用的就是这款超级漂亮的语法高亮工具，</p>
            <p>最开始选择的是老牌的Highlight.js，</p>
            <p>虽然也能实现效果，但是存在一些问题，</p>
            <p>后来就切换了这款新星代！下面给大家看一下效果吧！</p>
            <p>这里我选用的主题是： Tokyo Night</p>
            <codebox-widget code="${codeContent}" lang="ts"></codebox-widget>
            `,
        },
        {
            content: `<iframe src="${URL}" type="website"></iframe>`,
        },
        {
            title: "壁纸分享",
            content: `<wallpaper-widget images="${[
                wp1,
                wp2,
                wp3,
                wp4,
                wp5,
                wp6,
                wp7,
                wp8,
            ]}"></wallpaper-widget>
            <h4 style="text-align:center;">望喜之</h4>
            `,
        },
    ],
};

export default article;
