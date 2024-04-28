import "./Catalog.css";

export default function Catalog({ titles }) {
    return (
        <>
            {titles.map((title, idx) => (
                <a
                    key={idx}
                    href={`#${title}`}
                    style={{ paddingLeft: idx === 0 ? "0" : "1rem" }}
                >
                    {title}
                </a>
            ))}
        </>
    );
}
