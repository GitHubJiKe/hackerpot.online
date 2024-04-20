import { useMount } from "react-use";
import { fetchCity, fetchWeather, getGeo } from "../utils";
import { useEffect, useState, useCallback } from "react";
import "./Weather.css";
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
    const [coords, setCoords] = useState(null);
    const [w, setW] = useState(null);
    const [c, setC] = useState(null);
    const [show, setShow] = useState(false);

    const requestW = useCallback(async () => {
        const {
            data: { now, fxLink },
        } = await fetchWeather(coords);
        if (now) {
            setW({ ...now, link: fxLink });
        }
    }, [coords]);

    const requestC = useCallback(async () => {
        const {
            data: { location },
        } = await fetchCity(coords);
        if (location) {
            setC(location[0]);
            setShow(true);
        }
    }, [coords]);

    useMount(async () => {
        try {
            const res = await getGeo();
            if (res) {
                setCoords(res.coords);
            }
        } catch (error) {
            setShow(false);
        }
    });

    const request = useCallback(async () => {
        await requestC();
        await requestW();
    }, [requestC, requestW]);

    useEffect(() => {
        if (coords) {
            request();
        }
    }, [coords, request]);

    const onRefresh = async () => {
        const icon = document.querySelector(".refreshW");
        if (icon) {
            icon.classList.add("rotate");
        }
        await request();
        let t = setTimeout(() => {
            if (icon) {
                icon.classList.remove("rotate");
            }
            clearTimeout(t);
        }, 1000);
    };

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
                        ></i>
                        <div className="w-infos">
                            <label className="temp">{w.temp}</label>
                            <label className="text">{w.text}</label>
                        </div>
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
                    <span
                        className="material-symbols-outlined refreshW"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={onRefresh}
                        title="刷新"
                    >
                        refresh
                    </span>
                </div>
            )}
        </>
    );
}
