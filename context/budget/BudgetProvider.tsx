import { FC, useReducer } from 'react';
import { BudgetContext, budgetReducer } from '.';
import { Ingredient } from '../../interfaces/Ingredient';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';
import axios from 'axios';
import calsCalcApi from '../../lib/axiosInstance';
import { Budget } from 'interfaces/Budget';

export interface BudgetState {
   budget: SelectedIngredient[];
   totalGrOfCarbs: number;
   totalGrOfFats: number;
   totalGrOfProtein: number;
   totalCalories: number;
}

const BUDGET_INITIAL_STATE: BudgetState = {
   budget: [],
   totalGrOfCarbs: 0,
   totalGrOfFats: 0,
   totalGrOfProtein: 0,
   totalCalories: 0
}


type Props = {
   children?: React.ReactNode
};


interface ISumarizable {
   name: "carbs" | "fat" | "protein" | "cals"

}

export const BudgetProvider: FC<Props> = ({ children }) => {

   const [state, dispatch] = useReducer(budgetReducer, BUDGET_INITIAL_STATE);

   // const addUpCallback = (a: number, b: number) => {
   //    return (a + b);
   // }

   const getTotalAttribute = (attribute: ISumarizable, selectedIngredient: SelectedIngredient) => {
      if (!state.budget.length) {
         return (selectedIngredient.ingredient[attribute.name] / selectedIngredient.ingredient.baseQuantity.quantity) * selectedIngredient.qty
      }

      //TODO: take into account units
      return state.budget.map(selectedIngredient => (selectedIngredient.ingredient[attribute.name] / selectedIngredient.ingredient.baseQuantity.quantity) * selectedIngredient.qty).reduce((a: number, b: number) => { return a + b }) + (selectedIngredient.ingredient[attribute.name] / selectedIngredient.ingredient.baseQuantity.quantity) * selectedIngredient.qty
   }


   const addIngredientToBudget = (selectedIngredient: SelectedIngredient) => {

      const carbs = getTotalAttribute({ name: 'carbs' }, selectedIngredient);
      const fats = getTotalAttribute({ name: 'fat' }, selectedIngredient);
      const prots = getTotalAttribute({ name: 'protein' }, selectedIngredient);
      const cals = getTotalAttribute({ name: 'cals' }, selectedIngredient);

      if (state.budget.map(i => i.ingredient.name).includes(selectedIngredient.ingredient.name)) {
         console.log('duplicated ingredient');
         dispatch({ type: '[Budget] - increaseIngredient', payload: { selectedIngredient, carbs, fats, prots, cals } });
         return;
      }


      dispatch({ type: '[Budget] - addIngredient', payload: { selectedIngredient, carbs, fats, prots, cals } });
   }

   const saveBudgetToDB = async (): Promise<{ hasError: boolean; message: string; }> => {
      //  console.log('saveBudgetToDB');
      if (!state.budget.length) {
         return {
            hasError: true,
            message: 'add ingredients first'
         } /* TODO: handle error*/
      }

      try {

         const body: Budget = {
            ingredients: state.budget,
            days: 7,
            dateStart: new Date().toISOString()
         }

         console.log(JSON.stringify(body));

         const { data } = await calsCalcApi.post<Budget>('/budget', body)

         //TODO: reducer part of this, update state

         return {
            hasError: false,
            message: 'success'
         }
      } catch (error) {
         if (axios.isAxiosError(error)) {
            return {
               hasError: true,
               message: error.response?.data.message
            }
         }
      }

      return {
         hasError: true,
         message: 'Unhandlerd error - contact the administrator'
      }
   }



   return (
      <BudgetContext.Provider value={{
         ...state,
         addIngredientToBudget,
         saveBudgetToDB
      }}>
         {children}
      </BudgetContext.Provider>
   )
}