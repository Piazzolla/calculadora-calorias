import { createContext } from 'react';
import { Ingredient } from '../../interfaces/Ingredient';

interface ContextProps {
    plate: Ingredient[];

    addIngredientToPlate: (ing: Ingredient) => void;
}

export const PlateContext = createContext({} as ContextProps);