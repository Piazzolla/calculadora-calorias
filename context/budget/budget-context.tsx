import { createContext } from 'react';
import { SelectedIngredient } from '../../interfaces/selected-ingredients';



interface ContextProps {
    budget: SelectedIngredient[];
    totalGrOfCarbs: number;
    totalGrOfFats: number;
    totalGrOfProtein: number;
    totalCalories: number;

    addIngredientToBudget: (ing: SelectedIngredient) => void;
    saveBudgetToDB: () => void;
}

export const BudgetContext = createContext({} as ContextProps);