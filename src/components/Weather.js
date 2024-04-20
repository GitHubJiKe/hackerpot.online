import { useMount } from "react-use";
import { fetchCity, fetchWeather, getGeo } from "../utils";
import { useState } from "react";
import "./Weather.css";
// import "qweather-icons";
const city = {
    name: "鱼台",
    id: "101120704",
    lat: "34.99771",
    lon: "116.65002",
    adm2: "济宁",
    adm1: "山东省",
    country: "中国",
    tz: "Asia/Shanghai",
    utcOffset: "+08:00",
    isDst: "0",
    type: "city",
    rank: "33",
    fxLink: "https://www.qweather.com/weather/yutai-101120704.html",
};
const weather = {
    obsTime: "2024-04-20T09:48+08:00", // 数据观测时间
    temp: "16", // 温度，默认单位：摄氏度
    icon: "101", // icon
    text: "多云", // 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
    feelsLike: "14", //  体感温度，默认单位：摄氏度
    wind360: "274", //  风向360角度
    windDir: "西风", //  风向
    windScale: "3", // 风力等级
    windSpeed: "13", // 风速
    humidity: "65", //相对湿度
    precip: "0.0", // 当前小时累计降水量，默认单位：毫米
    pressure: "1004", // 大气压强，默认单位：百帕
    vis: "8", // 能见度，默认单位：公里
    cloud: "91", // 云量，百分比数值。可能为空
    dew: "9", // 露点温度。可能为空
};
const showKeys = [
    ["feelsLike", "体感温度", "℃"],
    ["windDir", "风力等级"],
    ["windSpeed", "风速"],
    ["humidity", "相对湿度"],
    ["precip", "累计降水量/h", "mm"],
    ["pressure", "大气压强", "百帕"],
    ["vis", "能见度", "公里"],
    ["cloud", "云量", "%"],
];
export default function Weather() {
    const [w, setW] = useState(null);
    const [c, setC] = useState(null);
    const [show, setShow] = useState(false);
    useMount(async () => {
        try {
            const res = await getGeo();

            if (res) {
                const {
                    data: { location },
                } = await fetchCity(res.coords);
                if (location) {
                    setC(location[0]);
                    setShow(true);
                }
                const {
                    data: { now, fxLink },
                } = await fetchWeather(res.coords);
                if (now) {
                    setW({ ...now, link: fxLink });
                }
            }
        } catch (error) {
            setShow(false);
        }
    });
    return (
        <>
            {show && w && (
                <div className="weatherBox">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h2>今日天气</h2>
                        <div style={{ fontSize: "0.8rem", color: "#555050" }}>
                            天气服务由
                            <a href="https://www.qweather.com">和风天气</a>
                            驱动
                        </div>
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                        当前所在：{c.country}/{c.adm1}/{c.adm2}/{c.name}
                    </div>
                    <div className="w-icon">
                        <i
                            className={`qi-${w.icon} icon`}
                            style={{ fontSize: "6rem" }}
                            data-text={w.text}
                        ></i>
                        <label className="temp">{w.temp}</label>
                    </div>
                    <div className="infos">
                        {showKeys.map((item) => {
                            const [key, field, unit] = item;
                            return (
                                <div key={key} className="item">
                                    <label className="field"> {field}</label>
                                    <label className="val" data-unit={unit}>
                                        {w[key]}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
