import { useState } from 'react';
import React from 'react';

// Hook personnalisé pour gérer localStorage
export function useLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    });

    const setStoredState = (newState) => {
        setState(newState);
        localStorage.setItem(key, JSON.stringify(newState));
    };

    return [state, setStoredState];
}