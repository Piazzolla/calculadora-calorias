import { FC, useReducer } from 'react';
import { PlateContext, plateReducer } from './';
import { Ingredient } from '../../interfaces/Ingredient';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';

export interface PlateState {
   plate: SelectedIngredient[];
   totalGrOfCarbs: number;
   totalGrOfFats: number;
   totalGrOfProtein: number;
   totalCalories: number;
}

const PLATE_INITIAL_STATE: PlateState = {
   plate: [],
   totalGrOfCarbs: 0,
   totalGrOfFats: 0,
   totalGrOfProtein: 0,
   totalCalories: 0
}


type Props = {
   children?: React.ReactNode
  };

export const PlateProvider:FC<Props> = ({ children }) => {
   
   const addUpCallback = (a: number, b: number) => {
      return (a + b);
   }

   const [state, dispatch] = useReducer(plateReducer, PLATE_INITIAL_STATE);

   const addIngredientToPlate = ( selectedIngredient: SelectedIngredient ) => {
  
      const carbs = state.plate.length? 
         state.plate.map(selectedIngredient => selectedIngredient.ingredient.carbs).reduce(addUpCallback) + selectedIngredient.ingredient.carbs : selectedIngredient.ingredient.carbs;  
      const fats= state.plate.length? 
         state.plate.map(selectedIngredient => selectedIngredient.ingredient.fat).reduce(addUpCallback) + selectedIngredient.ingredient.fat : selectedIngredient.ingredient.fat; 
      const prots= state.plate.length? 
         state.plate.map(selectedIngredient => selectedIngredient.ingredient.protein).reduce(addUpCallback) + selectedIngredient.ingredient.protein: selectedIngredient.ingredient.protein; 
      const cals = state.plate.length? 
         state.plate.map(selectedIngredient => selectedIngredient.ingredient.cals).reduce(addUpCallback) + selectedIngredient.ingredient.cals: selectedIngredient.ingredient.cals; 
      dispatch({type: '[Plate] - addIngredient', payload: {selectedIngredient, carbs, fats, prots, cals}});
   }



   return (
       <PlateContext.Provider value={{
           ...state,
           addIngredientToPlate
       }}>
           { children }
       </PlateContext.Provider>
   )
}