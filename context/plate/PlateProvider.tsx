import { FC, useReducer } from 'react';
import { PlateContext, plateReducer } from './';
import { Ingredient } from '../../interfaces/Ingredient';

export interface PlateState {
   plate: Ingredient[];
}

const PLATE_INITIAL_STATE: PlateState = {
   plate: [],
}


type Props = {
   children?: React.ReactNode
  };

export const PlateProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(plateReducer, PLATE_INITIAL_STATE);

   const addIngredientToPlate = ( ing: Ingredient ) => {
      dispatch({type: '[Plate] - addIngredient', payload: ing});
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