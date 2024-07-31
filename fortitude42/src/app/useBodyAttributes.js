import { useEffect } from 'react';

const useBodyAttributes = (attributes) => {
    useEffect(() => {
        const body = document.body;
        
        // Set attributes
        for (const key in attributes) {
            body.setAttribute(key, attributes[key]);
        }

        // Remove attributes when component unmounts
        return () => {
            for (const key in attributes) {
                body.removeAttribute(key);
            }
        };
    }, [attributes]);
};

export default useBodyAttributes;