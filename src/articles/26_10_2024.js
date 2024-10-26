const card = {
    id: "2024-05-26",
    type: "mindmap",
    time2read: "1 min",
    datetime: "26/05/2024",
    nodes: [
        {
            id: "1",
            position: { x: 0, y: 0 },
            data: {
                content: "主题1",
                level: 0,
                startId: "start-1",
                endId: "end-1",
            },
            type: "mindNode",
        },
        {
            id: "2",
            position: { x: 200, y: -100 },
            data: {
                content: "主题2",
                level: 1,
                startId: "start-2",
                endId: "end-2",
            },
            type: "mindNode",
        },
        {
            id: "3",
            position: { x: 200, y: 100 },
            data: {
                content: "主题3",
                level: 1,
                startId: "start-3",
                // endId: "end-2",
            },
            type: "mindNode",
        },
        {
            id: "4",
            position: { x: 400, y: -200 },
            data: {
                content: "主题4",
                level: 2,
                startId: "start-4",
                // endId: "end-2",
            },
            type: "mindNode",
        },
        {
            id: "5",
            position: { x: 400, y: 0 },
            data: {
                content: "主题5",
                level: 2,
                startId: "start-5",
                // endId: "end-2",
            },
            type: "mindNode",
        },
    ],
    edges: [
        {
            id: "e1",
            source: "1",
            target: "2",
            targetHandle: "start-2",
            sourceHandle: "end-1",
        },
        {
            id: "e2",
            source: "1",
            target: "3",
            targetHandle: "start-3",
            sourceHandle: "end-1",
        },
        {
            id: "e3",
            source: "2",
            target: "4",
            targetHandle: "start-4",
            sourceHandle: "end-2",
        },
        {
            id: "e4",
            source: "2",
            target: "5",
            targetHandle: "start-5",
            sourceHandle: "end-2",
        },
    ],
    banner: "https://images.unsplash.com/photo-1508841323067-7975ba355549?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "MindMap By ReactFlow",
    chapters: [
        {
            title: "如何使用React Flow",
            content: `
            具体详情，还是参考文档吧，链接如下: <a href="https://reactflow.dev/" target="_blank">ReactFlow</a>
            <br>
            <br>
            <iframe src="https://reactflow.dev/"/>
            `,
        },
    ],
};

export default card;
