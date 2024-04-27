import "./Catalog.css";

export default function Catalog({ titles }) {
    return (
        <>
            {titles.map((title, idx) => {
                if (idx === 0) {
                    return (
                        <a key={idx} href={`#${title}`}>
                            {title}
                        </a>
                    );
                } else {
                    return (
                        <a
                            key={idx}
                            href={`#${title}`}
                            style={{ paddingLeft: "1rem" }}
                        >
                            {title}
                        </a>
                    );
                }
            })}
        </>
    );
}
