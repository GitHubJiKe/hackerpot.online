import { useLocalStorage, useMount } from "react-use";
import { fetchCity, fetchWeather, getGeo } from "../utils";
import { useEffect, useState, useCallback } from "react";
import "./Weather.css";
import { pick } from "lodash-es";

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
    const [coords, setCoords] = useLocalStorage("coords", null);
    const [weather, setWeather] = useLocalStorage("weather", null);
    const [city, setCity] = useLocalStorage("city", null);
    const [show, setShow] = useState(!!weather);

    const updateWeather = useCallback(async () => {
        const { data: { now, fxLink } } = await fetchWeather(coords);
        if (now) {
            const newWeather = { ...now, link: fxLink };
            setWeather(newWeather);
        }
    }, [coords, setWeather]);

    const updateCity = useCallback(async () => {
        const { data: { location } } = await fetchCity(coords);
        if (location) {
            setCity(location[0]);
            setShow(true);
        }
    }, [coords, setCity]);

    const initializeGeoLocation = async () => {
        try {
            const res = await getGeo();
            if (res) {
                const newCoords = pick(res.coords, ["latitude", "longitude"]);
                setCoords(newCoords);
            }
        } catch (error) {
            setShow(false);
        }
    };

    useMount(() => {
        initializeGeoLocation();
    });

    useEffect(() => {
        if (coords) {
            updateCity();
            updateWeather();
        }
    }, [coords, updateCity, updateWeather]);

    const onRefresh = async () => {
        const icon = document.querySelector(".refreshW");
        icon?.classList.add("rotate");
        await updateCity();
        await updateWeather();
        setTimeout(() => icon?.classList.remove("rotate"), 1000);
    };

    return (
        <>
            {show && weather && (
                <div className="weatherBox">
                    <div className="weatherHeader">
                        <h2>今日天气</h2>
                        <div className="weatherService">天气服务由<a href="https://www.qweather.com">和风天气</a>驱动</div>
                    </div>
                    <div className="currentLocation">当前所在：{city.country}/{city.adm1}/{city.adm2}/{city.name}</div>
                    <div className="weatherIcon">
                        <i className={`qi-${weather.icon} icon`}></i>
                        <div className="weatherInfos">
                            <label className="temp">{weather.temp}</label>
                            <label className="text">{weather.text}</label>
                        </div>
                    </div>
                    <div className="weatherDetails">
                        {showKeys.map(([key, field, unit]) => (
                            <div key={key} className="detailItem">
                                <label className="field">{field}</label>
                                <label className="val" data-unit={unit}>{weather[key]}</label>
                            </div>
                        ))}
                    </div>
                    <span className="material-symbols-outlined refreshW" onClick={onRefresh} title="刷新">refresh</span>
                </div>
            )}
        </>
    );
}
