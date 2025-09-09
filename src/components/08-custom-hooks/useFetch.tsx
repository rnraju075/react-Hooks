import React, { useEffect, useState } from 'react'

const useFetch = ( url:string ) => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        
        const FetchDataa = async () => {
            setisLoading(false)
            try {
                const fetching = await fetch(url);
                const response = await fetching.json()
                const data1 = await response.data;
                setdata(data1)
            } catch (error) {
                setisError(true);
            } finally {
                setisError(false);
                setisLoading(false);
            }
        }
        FetchDataa()
    }, [url])


return {data,isLoading,isError}
}

export default useFetch