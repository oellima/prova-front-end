import axios from "axios";

export function useDeleteData(url) {
    axios.delete(url)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}