import axios from "axios";

const headers = {
    'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
};

/*export function get<T>(url: string) {
    return axios.get<T>(url, {
        headers
    });
}*/

export function get<T>(url: string) {
    return fetch(url, {
        mode: "no-cors",
        headers
    })
    .then(value => value.json())
    .then(value => {return value as T;});
}