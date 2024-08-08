import {InstructionSection} from "./components/InstructionSection.tsx";
import {NutritionSectionProps} from "./components/NutritionSection.tsx";

export const appData: NutritionSectionProps = {
    title: "Nutrition",
    description: "The table below shows nutritional value per serving without the additional fillings.",
    entries: [
        {
            property: 'Calories',
            value: '277kcal'
        },
        {
            property: 'Carbs',
            value: '0g'
        },
        {
            property: 'Protein',
            value: '20g'
        },
        {
            property: 'Fat',
            value: '22g'
        }
    ]
}
export const instructionSection: InstructionSection = {
    title: "Instructions",
    instructions: [
        {
            count: 1,
            title: "Beat the eggs",
            description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
        },
        {
            count: 2,
            title: "Heat the pan",
            description: "Place a non-stick frying pan over medium heat and add butter or oil."
        },
        {
            count: 3,
            title: "Cook the omelette",
            description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
        },
        {
            count: 4,
            title: "Add fillings (optional)",
            description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
        },
        {
            count: 5,
            title: "Fold and serve",
            description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
        },
        {
            count: 6,
            title: "Enjoy",
            description: "Serve hot, with additional salt and pepper if needed."
        }
    ]
}