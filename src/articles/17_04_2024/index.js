import "../../widgets/CodeBox";
const code = `
function hackerPot () {
    alert('Hello Hackers!')
}
`;
const article = {
    id: "2024-04-17",
    title: "代码分享 Test",
    time2read: "0.5 min",
    datetime: "17/04/2024",
    type: "article",
    chapters: [
        {
            title: "代码示例",
            content: "<p style='color:red;'>主要是看看代码高亮的效果如何</p>",
        },
        {
            title: "simple code",
            content: `<codebox-widget code="${code}"></codebox-widget>`,
        },
    ],
};

export default article;
