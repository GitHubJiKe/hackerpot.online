import axios from "axios";
import fileSaver from "file-saver";

export async function getGeo() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                },
                (error) => {
                    reject(error);
                },
            );
        } else {
            reject(new Error("your browser not support geo feature"));
        }
    });
}

function getLocationStr({ latitude, longitude }) {
    return `${longitude.toString().replace(/-/g, "")},${latitude}`;
}

export async function fetchCity(location) {
    return axios.get(
        `https://geoapi.qweather.com/v2/city/lookup?location=${getLocationStr(
            location,
        )}&key=655296ba470044fc9c926b2b808721c9`,
    );
}

export async function fetchWeather(location) {
    return axios.get(
        `https://devapi.qweather.com/v7/weather/now?location=${getLocationStr(
            location,
        )}&key=655296ba470044fc9c926b2b808721c9&lang=zh-hans&unit=m`,
    );
}

export function downloadImageByUrlAndName(url, name) {
    fileSaver.saveAs(url, name);
}

export function removeAllSpace(content) {
    return content.replace(/(?<=>)\s+|\s+(?=<)/g, "").trim();
}

export async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return Promise.resolve(true);
    } catch (err) {
        return Promise.resolve(false);
    }
}
