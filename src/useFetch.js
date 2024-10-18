import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortConst = new AbortController();
        setTimeout(() => {
            fetch(url, {signal : abortConst.signal})
            .then(res => {
                if(res.ok === false){
                    throw Error('could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err !== 'AbortError'){
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 1000);   
        
        return () => abortConst.abort();
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;