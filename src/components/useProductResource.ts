import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductResource = (id: string) => {
    const [resource, setResource] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setResource(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [id]);

    if (error) {
        throw error;
    }

    if (!resource) {
        throw new Promise(() => {}); // This will trigger the fallback in Suspense
    }

    return resource;
};

export default useProductResource;