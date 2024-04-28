import axios from "axios";
import fileSaver from "file-saver";
import { useEffect } from 'react'


export const getGeo = () =>
    new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
            reject(new Error("Your browser does not support geolocation."));
            return;
        }

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });


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
    if (!navigator.clipboard) {
        return false;
    }
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        return false;
    }
}




export function useComment() {
    useEffect(() => {
        const commentId = '#comment';
        const existingScript = document.body.querySelector(commentId);

        if (existingScript) return;

        const scriptAttributes = {
            id: 'comment',
            src: 'https://utteranc.es/client.js',
            crossOrigin: 'anonymous',
            repo: 'GitHubJiKe/hackerpot-comments',
            'issue-term': 'pathname',
            theme: 'preferred-color-scheme',
            async: 'true',
        };

        const script = document.createElement('script');
        Object.entries(scriptAttributes).forEach(([key, value]) => script.setAttribute(key, value));
        document.body.appendChild(script);

        return () => {
            script.remove();
            const commentBox = document.body.querySelector('.utterances');
            commentBox?.remove();
        };
    }, []);
}
