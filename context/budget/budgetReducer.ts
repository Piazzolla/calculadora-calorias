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
            totalGrOfCarbs: action.payload.carbs,
            totalGrOfFats: action.payload.fats,
            totalGrOfProtein: action.payload.prots,
            totalCalories: action.payload.cals
         }
      default:
         return state;
   }

}