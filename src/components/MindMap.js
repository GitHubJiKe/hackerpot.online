import React, { useContext } from "react";
import {
    ReactFlow,
    Background,
    BackgroundVariant,
    Controls,
    Handle,
    Position,
} from "@xyflow/react";
import { themes } from "./MindMapThemes";
import "@xyflow/react/dist/style.css";
import "./MindMap.css";
import { ThemeContext } from "../routes";

function MindNode({ data }) {
    const { content, level, startId, endId } = data;
    const { theme } = useContext(ThemeContext);

    const isDark = theme === "dark";

    const style = !isDark
        ? {
              borderColor: themes.theme1[level],
              backgroundColor: "#fff",
              color: "#000",
          }
        : {
              borderColor: themes.theme1[level],
              backgroundColor: themes.theme1[level],
              color: "#fff",
          };

    return (
        <div
            key={theme}
            className={`mindNode ${isDark ? "mindNode-dark" : ""}`}
            style={style}
        >
            {level !== 0 && startId && (
                <Handle type="target" position={Position.Left} id={startId} />
            )}
            <div style={{ fontSize: 16, fontWeight: 500 }}>{content}</div>
            {endId && (
                <Handle type="source" position={Position.Right} id={endId} />
            )}
        </div>
    );
}

const nodeTypes = { mindNode: MindNode };

export default function MindMap({ nodes, edges }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className="mindMap"
            style={{
                borderColor: theme === "light" ? "#000" : "#fff",
            }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background color="#000" variant={BackgroundVariant.Dots} />
                <Controls />
            </ReactFlow>
        </div>
    );
}
