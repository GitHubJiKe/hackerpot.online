import axios from "axios";

export async function getGeo() {
    if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                },
                (error) => {
                    reject(error);
                },
            );
        });
    }

    throw new Error("your browser not support geo feature");
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
