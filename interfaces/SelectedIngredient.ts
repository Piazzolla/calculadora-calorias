import { Ingredient } from "./Ingredient";

export interface SelectedIngredient {
    ingredient:Ingredient, 
    qty: number, 
    unit: string
}