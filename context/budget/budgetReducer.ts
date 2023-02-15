import { SelectedIngredient } from 'interfaces/SelectedIngredient';
import { BudgetState } from '.';

type BudgetActionType =
   | { type: '[Budget] - addIngredient', payload: {selectedIngredient:SelectedIngredient, carbs: number, fats: number, prots: number, cals: number} }


export const budgetReducer = (state: BudgetState, action: BudgetActionType): BudgetState => {




   switch (action.type) {
      case '[Budget] - addIngredient':
         return {
            ...state,
            budget: [...state.budget, action.payload.selectedIngredient],
            totalGrOfCarbs:Math.round(action.payload.carbs * 100) / 100,
            totalGrOfFats: Math.round(action.payload.fats * 100) / 100,
            totalGrOfProtein: Math.round(action.payload.prots * 100) / 100,
            totalCalories: Math.round(action.payload.cals * 100) / 100
         }
      default:
         return state;
   }

}