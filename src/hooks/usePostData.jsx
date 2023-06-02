import axios from "axios";

export function usePostData( url, data ) {
    axios
        .post(url, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}