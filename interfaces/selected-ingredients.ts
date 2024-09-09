import { Ingredient } from "./ingredient";

export interface SelectedIngredient {
    ingredient:Ingredient, 
    qty: number, 
    unit: string
}