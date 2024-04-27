import "./Tools.css";
import { NavLink } from "react-router-dom";
const tools = [{ path: "/quote", name: "Quote" }];

export default function Tools() {
    return (
        <div className="toolsContainer">
            {tools.map((item, idx) => (
                <NavLink key={idx} to={item.path}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    );
}
