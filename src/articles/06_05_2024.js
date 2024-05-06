import '../widgets/TooltipsLabel'

const card = {
    id: "2024-05-05",
    title: "测试Tooltips Widget",
    time2read: "1 min",
    datetime: "06/05/2024",
    type: "article",
    banner: "https://images.unsplash.com/photo-1558174685-430919a96c8d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chapters: [
        {
            title: "Tooltips Widget",
            content: `这是一些文本，但是其中有一些需要注释，比如这是一个英文单词<tooltips-widget content="你好">Hello</tooltips-widget>，鼠标hover上可以查看中文翻译`,
        },

    ],
};

export default card;
