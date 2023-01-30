import { createContext } from 'react';
import { Ingredient } from '../../interfaces/Ingredient';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';



interface ContextProps {
    plate: SelectedIngredient[];
    totalGrOfCarbs: number;
    totalGrOfFats: number;
    totalGrOfProtein: number;
    totalCalories: number;

    addIngredientToPlate: (ing: SelectedIngredient) => void;
}

export const PlateContext = createContext({} as ContextProps);