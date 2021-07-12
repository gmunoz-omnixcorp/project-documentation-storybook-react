import { useEffect, useState } from "react"
import axios from "axios";

export const useFetch = (url = '') => {

    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {

        setState({
            data: null,
            loading: true
        });
        let result = axios.get(url);
        result.then(resp => resp)
            .then(data => {
                console.log(data)
                setState({
                    loading: false,
                    data: data.data.results
                });
            });
    }, [url]);

    return state;
}