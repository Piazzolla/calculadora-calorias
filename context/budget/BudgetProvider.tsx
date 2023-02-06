import { FC, useReducer } from 'react';
import { BudgetContext, budgetReducer } from '.';
import { Ingredient } from '../../interfaces/Ingredient';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';

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

export const BudgetProvider:FC<Props> = ({ children }) => {
   
   const addUpCallback = (a: number, b: number) => {
      return (a + b);
   }

   const getTotalAttribute = (attribute: ISumarizable, selectedIngredient: SelectedIngredient) => {
      return state.budget.length? 
         state.budget.map(selectedIngredient => selectedIngredient.ingredient[attribute.name]).reduce(addUpCallback) + selectedIngredient.ingredient[attribute.name] : selectedIngredient.ingredient[attribute.name]
   }

   const [state, dispatch] = useReducer(budgetReducer, BUDGET_INITIAL_STATE);

   const addIngredientToBudget = ( selectedIngredient: SelectedIngredient ) => {
  
      const carbs = getTotalAttribute({name:'carbs'}, selectedIngredient);  
      const fats = getTotalAttribute({name:'fat'}, selectedIngredient);  
      const prots = getTotalAttribute({name:'protein'}, selectedIngredient);  
      const cals = getTotalAttribute({name:'cals'}, selectedIngredient);  

      dispatch({type: '[Budget] - addIngredient', payload: {selectedIngredient, carbs, fats, prots, cals}});
   }



   return (
       <BudgetContext.Provider value={{
           ...state,
           addIngredientToBudget
       }}>
           { children }
       </BudgetContext.Provider>
   )
}