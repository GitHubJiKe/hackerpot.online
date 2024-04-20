import banner from "./banner.jpg";
import buddha from "./buddha.jpeg";
import stone from "./stone.jpeg";
import david from "./david.jpeg";
import greenman from "./greenman.jpeg";
import "../../widgets/Wallpaper";

const article = {
    id: "2024-04-15",
    title: "壁纸分享 Test",
    time2read: "1 min",
    datetime: "15/04/2024",
    type: "wallpaper",
    banner: banner,
    chapters: [
        {
            title: "",
            content: `
            <wallpaper-widget images="${[
                buddha,
                stone,
                david,
                greenman,
            ]}"></wallpaper-widget>
            <p style="text-align:center">望喜之!</p>
            `,
        },
    ],
};

export default article;
