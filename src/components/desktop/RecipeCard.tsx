import {PreparationSection, PreparationSectionProps} from "../common/PreparationSection.tsx";
import {IngredientSection, IngredientSectionProps} from "../common/IngredientSection.tsx";
import {InstructionSection, InstructionSectionProps} from "../common/InstructionSection.tsx";
import {NutritionSection} from "./NutritionSection.tsx";
import React from "react";
import {HeaderProps, NutritionSectionProps} from "../common/schema.ts";
import {Header} from "./Header.tsx";
import headerImg from "/image-omelette.jpeg"

export interface RecipeCardProps {
    header: HeaderProps,
    preparation: PreparationSectionProps,
    ingredients: IngredientSectionProps,
    instruction: InstructionSectionProps,
    nutrition: NutritionSectionProps
}

export const RecipeCard: React.FC<RecipeCardProps> = ({header, preparation, ingredients, instruction, nutrition}) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col py-[100px]">
                <div
                    className="w-[732px] flex flex-col items-center gap-[10px] px-[10px] py-[40px] rounded-[20px] bg-stone-50">
                    <img className="w-[656px] h-[299px] rounded-[10px]" src={headerImg} alt={"omelette on plate"}/>
                    <div className="w-full flex flex-col gap-[34px] px-[28px] pt-[20px]">
                        <Header {...header} />
                        <PreparationSection {...preparation} />
                        <IngredientSection {...ingredients} />
                        <InstructionSection {...instruction} />
                        <NutritionSection {...nutrition} />
                    </div>
                </div>
            </div>
        </div>
    )
}