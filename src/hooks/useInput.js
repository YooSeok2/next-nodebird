import { useState, useCallback } from 'react';

const useInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((e) => {
        const target = e.target;
        setValue(target.value);
    }, []);

    return [value, handler];
};

export default useInput;