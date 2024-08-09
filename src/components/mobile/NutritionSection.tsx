import {NutritionDisplayRow} from "./NutritionDisplayRow.tsx";
import {NutritionSectionProps} from "../common/schema.ts";
import React from "react";

export const NutritionSection: React.FC<NutritionSectionProps> = ({ title, description, entries }: NutritionSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-[26px]">
            <div className="w-full flex flex-col gap-[16px]">
                <div className="font-young-serif text-[30px] text-brown-800">{title}</div>
                <div className="font-outfit text-[16px]">{description}</div>
            </div>
            <div className="w-full flex flex-col gap-[13px]">
                {entries.map((props, index) =>
                    <NutritionDisplayRow key={index} {...props}/>
                )}
            </div>
        </div>
    )
}