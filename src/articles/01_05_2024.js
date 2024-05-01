const chapter1 = `
# H1
## H2
### H3
#### H4
##### H5
###### H6
`;
const chapter2 = `
段落1

段落2

段落3
`;

const chapter3 = `
**加粗**
**加粗**
**加粗**
**加粗**
`;
const chapter4 = `
> 这是引用
> 这是引用
> 这是引用
`;
const chapter5 = `
1. 这是1
2. 这是2
3. 这是3
4. 这是4
`;
const chapter6 = `
- 这是1 
- 这是2 
- 这是3 
- 这是4
`;
const card = {
    id: "2024-05-01",
    title: "五一快乐！支持编写Markdown啦😁",
    time2read: "3 min",
    datetime: "01/05/2024",
    type: "article",
    banner: "https://images.unsplash.com/photo-1558174685-430919a96c8d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chapters: [
        {
            title: "Markdown语法教程",
            content: `<iframe src="https://markdown.com.cn/" type="website"></iframe>`, //https://markdown.com.cn/
        },
        {
            title: "markdown-it 标题",
            content: chapter1,
            format: "md",
        },
        {
            title: "markdown-it 段落",
            content: chapter2,
            format: "md",
        },
        {
            title: "markdown-it 加粗",
            content: chapter3,
            format: "md",
        },
        {
            title: "markdown-it 引用",
            content: chapter4,
            format: "md",
        },
        {
            title: "markdown-it 有序列表",
            content: chapter5,
            format: "md",
        },
        {
            title: "markdown-it 无序列表",
            content: chapter6,
            format: "md",
        },
        {
            title: "markdown-it 分割线",
            content: "***",
            format: "md",
        },
        {
            title: "markdown-it 链接",
            content: "[link](https://www.baidu.com)",
            format: "md",
        },
        {
            title: "markdown-it 图片",
            content:
                "![pic](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg)",
            format: "md",
        },
    ],
};

export default card;
