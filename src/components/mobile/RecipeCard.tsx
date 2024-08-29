import {PreparationSection, PreparationSectionProps} from "../common/PreparationSection.tsx";
import {IngredientSection, IngredientSectionProps} from "../common/IngredientSection.tsx";
import {InstructionSection, InstructionSectionProps} from "../common/InstructionSection.tsx";
import {NutritionSection} from "./NutritionSection.tsx";
import React from "react";
import {HeaderProps, NutritionSectionProps} from "../common/schema.ts";
import headerImg from "/image-omelette.jpeg";

export interface RecipeCardProps {
    header: HeaderProps,
    preparation: PreparationSectionProps,
    ingredients: IngredientSectionProps,
    instruction: InstructionSectionProps,
    nutrition: NutritionSectionProps
}

export const RecipeCard: React.FC<RecipeCardProps> = ({header, preparation, ingredients, instruction, nutrition}) => {
    return (
        <div className="flex flex-col bg-stone-50">
            <img className="w-full" src={headerImg} alt={"omelette"}/>
            <div className="flex flex-col items-center gap-[30px] px-[30px] py-[40px]">
                <div className="w-full font-young-serif text-[35px] leading-normal">{header.title}</div>
                <div className="font-outfit text-[16px]">{header.description}</div>
                <PreparationSection {...preparation} />
                <IngredientSection {...ingredients} />
                <InstructionSection {...instruction} />
                <NutritionSection {...nutrition} />
            </div>
        </div>
    )
}