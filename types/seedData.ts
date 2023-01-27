export interface SeedIngredient {
    name: string;
    baseQuantity: { unit: string, quantity: number} 
    cals: number;
    /* Las macros están especificadas en gramos, fat: 5 significa 5 gramos de grasa */
    fat: number;
    carbs: number;
    protein: number
}