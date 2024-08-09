import {IngredientRow} from "./IngredientRow.tsx";

export interface IngredientSectionProps {
    ingredients: string[]
}

export const IngredientSection = ({ingredients}: IngredientSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-[17px] pb-[40px] border-b-2 border-stone-150">
            <div className="font-young-serif text-[30px] text-brown-800">Ingredients</div>
            <div className="flex flex-col pl-[8px]">
                <div className="flex flex-col gap-[10px]">{ingredients.map((content, index) => (
                    <IngredientRow key={index} content={content}/>
                ))}</div>
            </div>
        </div>
    )
}