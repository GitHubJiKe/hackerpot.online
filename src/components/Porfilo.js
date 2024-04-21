import "./Porfilo.css";
import qrcode from "../assets/qrcode.jpg";
import avatar from "../assets/avatar.jpg";

const linkStyle = { height: "2rem", lineHeight: "2rem" };

export default function Porfilo() {
    return (
        <div className="porfilo">
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                }}
            >
                <div className="flex-clo">
                    <img alt="avatar" src={avatar} className="avatar" />
                    <a
                        href="https://github.com/GitHubJiKe"
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                    >
                        Peter Yuan
                    </a>
                </div>
                <div className="flex-clo">
                    <img src={qrcode} alt="公众号" className="avatar" />
                    <a
                        href="https://mp.weixin.qq.com/s?__biz=MzIxODg0MTA1NA==&mid=2247484179&idx=1&sn=bc48f4ce94d762ebb78276438cdbf02f&chksm=97e529a2a092a0b4f6bb5e445134a934e3eca664f85328d88f6fdb3fdea2d0f2a874ba781f6a&token=2094414084&lang=zh_CN#rd"
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                    >
                        微信公众号
                    </a>
                </div>
            </div>

            <div className="outlinks" style={linkStyle}>
                <a href="mailto:ypf9319@gamil.com">ypf9319@gamil.com</a>
                <a
                    href="https://twitter.com/ypf9319"
                    target="_blank"
                    rel="noreferrer"
                >
                    推特
                </a>
                <a
                    href="https://www.zhihu.com/people/ji-ke-yuan"
                    target="_blank"
                    rel="noreferrer"
                >
                    知乎
                </a>
            </div>
        </div>
    );
}
