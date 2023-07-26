import {useState, useEffect } from "react";
import axios from "axios";

function useFetch(url){
    const [error, SetError] = useState(null);
    const [loading, SetLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData= async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            SetLoading(false);
        } catch (err) {
            SetError(err.message)
            SetLoading(false);
        }
    };
  

    return{error, loading, data};
}

export default useFetch;