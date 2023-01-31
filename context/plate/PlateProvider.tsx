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


interface ISumarizable { 
   name: "carbs" | "fat" | "protein" | "cals"
   
}   

export const PlateProvider:FC<Props> = ({ children }) => {
   
   const addUpCallback = (a: number, b: number) => {
      return (a + b);
   }

   const getTotalAttribute = (attribute: ISumarizable, selectedIngredient: SelectedIngredient) => {
      return state.plate.length? 
         state.plate.map(selectedIngredient => selectedIngredient.ingredient[attribute.name]).reduce(addUpCallback) + selectedIngredient.ingredient[attribute.name] : selectedIngredient.ingredient[attribute.name]
   }

   const [state, dispatch] = useReducer(plateReducer, PLATE_INITIAL_STATE);

   const addIngredientToPlate = ( selectedIngredient: SelectedIngredient ) => {
  
      const carbs = getTotalAttribute({name:'carbs'}, selectedIngredient);  
      const fats = getTotalAttribute({name:'fat'}, selectedIngredient);  
      const prots = getTotalAttribute({name:'protein'}, selectedIngredient);  
      const cals = getTotalAttribute({name:'cals'}, selectedIngredient);  

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