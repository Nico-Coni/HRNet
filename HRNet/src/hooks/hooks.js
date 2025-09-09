import { useState } from 'react';
import React from 'react';

// Hook personnalisé pour gérer localStorage
export function useLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            // Vérifier si la valeur existe et n'est pas null
            return stored !== null ? JSON.parse(stored) : defaultValue;
        } catch (error) {
            // En cas d'erreur de parsing, retourner la valeur par défaut
            console.warn(`Erreur lors du parsing de localStorage pour la clé "${key}":`, error);
            return defaultValue;
        }
    });

    const setStoredState = (newState) => {
        setState(newState);
        try {
            localStorage.setItem(key, JSON.stringify(newState));
        } catch (error) {
            console.error(`Erreur lors de la sauvegarde dans localStorage pour la clé "${key}":`, error);
        }
    };

    return [state, setStoredState];
}