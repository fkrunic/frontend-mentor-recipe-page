import {Header, HeaderProps} from "./Header.tsx";
import {PreparationSection, PreparationSectionProps} from "./PreparationSection.tsx";
import {IngredientSection, IngredientSectionProps} from "./IngredientSection.tsx";
import {InstructionSection, InstructionSectionProps} from "./InstructionSection.tsx";
import {NutritionSection, NutritionSectionProps} from "./NutritionSection.tsx";
import React from "react";

export interface RecipeCardProps {
    header: HeaderProps,
    preparation: PreparationSectionProps,
    ingredients: IngredientSectionProps,
    instruction: InstructionSectionProps,
    nutrition: NutritionSectionProps
}

export const RecipeCard: React.FC<RecipeCardProps> = ({header, preparation, ingredients, instruction, nutrition}) => {
    return (
        <div className="flex flex-col pt-[42px]">
            <div className="w-[732px] flex flex-col items-center gap-[10px] px-[10px] py-[40px] rounded-[20px]">
                <img className="rounded-[10px]" src={"/image-omelette.jpeg"} alt={"omelette"}/>
                <div className="w-full flex flex-col gap-[34px] px-[28px] pt-[20px]">
                    <Header {...header} />
                    <PreparationSection {...preparation} />
                    <IngredientSection {...ingredients} />
                    <InstructionSection {...instruction} />
                    <NutritionSection {...nutrition} />
                </div>
            </div>
        </div>
    )
}