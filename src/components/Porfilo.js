import "./Porfilo.css";
import qrcode from "../assets/qrcode.jpg";
import avatar from "../assets/avatar.jpg";

const linkStyle = { height: "2rem", lineHeight: "2rem" };
const flexContainerStyle = { display: "flex", gap: "1rem" };

const ProfileLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer" style={linkStyle}>
        {children}
    </a>
);

const ProfileImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="avatar" />
);

export default function Porfilo() {
    return (
        <div className="porfilo">
            <div style={flexContainerStyle}>
                <div className="flex-clo">
                    <ProfileImage src={avatar} alt="avatar" />
                    <ProfileLink href="https://github.com/GitHubJiKe">Peter Yuan</ProfileLink>
                </div>
                <div className="flex-clo">
                    <ProfileImage src={qrcode} alt="公众号" />
                    <ProfileLink href="https://mp.weixin.qq.com/s?__biz=MzIxODg0MTA1NA==&mid=2247484179&idx=1&sn=bc48f4ce94d762ebb78276438cdbf02f&chksm=97e529a2a092a0b4f6bb5e445134a934e3eca664f85328d88f6fdb3fdea2d0f2a874ba781f6a&token=2094414084&lang=zh_CN#rd">微信公众号</ProfileLink>
                </div>
            </div>

            <div className="outlinks" style={linkStyle}>
                <ProfileLink href="mailto:ypf9319@gamil.com">ypf9319@gamil.com</ProfileLink>
                <ProfileLink href="https://twitter.com/ypf9319">推特</ProfileLink>
                <ProfileLink href="https://www.zhihu.com/people/ji-ke-yuan">知乎</ProfileLink>
            </div>
        </div>
    );
}
