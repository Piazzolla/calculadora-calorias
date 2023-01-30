import { SelectedIngredient } from 'interfaces/SelectedIngredient';
import { PlateState } from '.';

type PlateActionType =
   | { type: '[Plate] - addIngredient', payload: {selectedIngredient:SelectedIngredient, carbs: number, fats: number, prots: number, cals: number} }


export const plateReducer = (state: PlateState, action: PlateActionType): PlateState => {




   switch (action.type) {
      case '[Plate] - addIngredient':
         return {
            ...state,
            plate: [...state.plate, action.payload.selectedIngredient],
            totalGrOfCarbs: action.payload.carbs,
            totalGrOfFats: action.payload.fats,
            totalGrOfProtein: action.payload.prots,
            totalCalories: action.payload.cals
         }
      default:
         return state;
   }

}