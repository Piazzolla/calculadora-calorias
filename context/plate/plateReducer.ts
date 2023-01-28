import { PlateState } from '.';
import { Ingredient } from '../../interfaces/Ingredient';

type PlateActionType =
   | { type: '[Plate] - addIngredient', payload:Ingredient }


export const plateReducer = (state: PlateState, action: PlateActionType): PlateState => {

   switch (action.type) {
       case '[Plate] - addIngredient':
          return {
               ...state,
               plate: [...state.plate, action.payload ]
           }

        default:
           return state;
   }

}