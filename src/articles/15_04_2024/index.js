import banner from "./banner.jpg";
import buddha from "./buddha.jpeg";
import stone from "./stone.jpeg";
import david from "./david.jpeg";
import greenman from "./greenman.jpeg";
const article = {
    id: "2024-04-15",
    title: "壁纸分享",
    time2read: "1 min",
    datetime: "15/04/2024",
    type: "wallpaper",
    banner: banner,
    chapters: [
        {
            title: "",
            content: `
            <h3>佛祖</h3>
            <img src="${buddha}" width="100%" alt="佛祖" />
            <h3>鹅卵石</h3>
            <img src="${stone}" width="100%" alt="鹅卵石" />
            <h3>贝克汉姆</h3>
            <img src="${david}" width="100%" alt="贝克汉姆" />
            <h3>浩克（绿巨人）</h3>
            <img src="${greenman}" width="100%" alt="浩克（绿巨人）" />
            <p style="text-align:center">望喜之!</p>
            `,
        },
    ],
};

export default article;
