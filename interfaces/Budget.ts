import { Ingredient } from './Ingredient';
export interface Budget {
    days?: number; //default: 7
    dateStart?: string; //default: today
    ingredients: Ingredient[];
}