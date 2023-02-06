import { createContext } from 'react';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';



interface ContextProps {
    budget: SelectedIngredient[];
    totalGrOfCarbs: number;
    totalGrOfFats: number;
    totalGrOfProtein: number;
    totalCalories: number;

    addIngredientToBudget: (ing: SelectedIngredient) => void;
}

export const BudgetContext = createContext({} as ContextProps);