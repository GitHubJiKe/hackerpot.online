import "./Porfilo.css";

export default function Porfilo({ avatar }) {
    return (
        <div className="porfilo" style={{ flex: 2 }}>
            <img alt="avatar" src={avatar} className="avatar" />
            <label>Peter Yuan</label>
            <a href="mailto:ypf9319@gamil.com">ypf9319@gamil.com</a>
        </div>
    );
}
