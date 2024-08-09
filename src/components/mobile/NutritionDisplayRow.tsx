import React from "react";

export interface NutritionDisplayRowProps {
    property: string
    value: string
}

export const NutritionDisplayRow: React.FC<NutritionDisplayRowProps> = ({ property, value}) => {
    return (
        <div className="w-full flex flex-col pl-[32px] pb-[13px] border-b">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full flex flex-row items-center font-outfit text-[16px]">{property}</div>
                <div className="w-full flex flex-row items-center font-outfit font-bold text-[16px] text-brown-800">{value}</div>
            </div>
        </div>
    )
}