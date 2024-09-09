import { SelectedIngredient } from './selected-ingredients';
export interface Budget {
    days?: number; //default: 7
    dateStart?: string; //default: today
    ingredients: SelectedIngredient[];
}