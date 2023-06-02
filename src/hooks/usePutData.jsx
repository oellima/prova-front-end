import axios from "axios";

export function usePutData( url, data ) {
    axios
        .put(url, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}