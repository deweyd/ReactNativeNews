// useApi.js
import { useState, useEffect } from 'react';

const useApi = (category) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const apiKey = 'b5aad46d746a496dab733e8a5ff34279';
         //const apiKey = '68ca435ac55e4373ae063f08fdcd9333'
        //const apiKey = '945b2b699c7c4d78b5f3df83767a9a54'
        //const apiKey = '8e63aa14a5fd4b398227eb1f1bacddef'
        const apiKey = 'c43cab50aaf74a36bdbadb2f4c72b7fe';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=1&pageSize=3&apiKey=${apiKey}`;


        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return { news, loading, error };
};

export default useApi;