import { SelectedIngredient } from 'interfaces/SelectedIngredient';
import { BudgetState } from '.';

type BudgetActionType =
   | { type: '[Budget] - addIngredient', payload: {selectedIngredient:SelectedIngredient, carbs: number, fats: number, prots: number, cals: number} }
   | { type: '[Budget] - increaseIngredient', payload: {selectedIngredient:SelectedIngredient, carbs: number, fats: number, prots: number, cals: number} }


export const budgetReducer = (state: BudgetState, action: BudgetActionType): BudgetState => {


   const selectedIngredientParam = action.payload.selectedIngredient;


   switch (action.type) {
      case '[Budget] - addIngredient':
         return {
            ...state,
            budget: [...state.budget, action.payload.selectedIngredient],
            totalGrOfCarbs:Math.round( action.payload.carbs * 100) / 100,
            totalGrOfFats: Math.round( action.payload.fats * 100) / 100,
            totalGrOfProtein: Math.round( action.payload.prots * 100) / 100,
            totalCalories: Math.round( action.payload.cals * 100) / 100
         }
      case '[Budget] - increaseIngredient':
         const existingIngredient = state.budget.filter( i => i.ingredient.name === action.payload.selectedIngredient.ingredient.name);
         const factor = (selectedIngredientParam.qty / existingIngredient[0].qty) + 1;
         const addedValuesIngredient:SelectedIngredient = {
            ingredient: existingIngredient[0].ingredient,
            qty: existingIngredient[0].qty * factor,
            unit: existingIngredient[0].unit
         }


         console.log(existingIngredient);
         return {
            ...state,
            budget: [...state.budget.filter( i => i.ingredient.name !== selectedIngredientParam.ingredient.name), addedValuesIngredient],
            totalGrOfCarbs: Math.round((action.payload.carbs) * 100) / 100,
            totalGrOfFats: Math.round((action.payload.fats) * 100) / 100,
            totalGrOfProtein: Math.round((action.payload.prots) * 100) / 100,
            totalCalories: Math.round((action.payload.cals) * 100) / 100
         }
      default:
         return state;
   }

}