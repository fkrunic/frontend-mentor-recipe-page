import React from "react";
import {NutritionDisplayRowProps} from "../common/schema.ts";

export const NutritionDisplayRow: React.FC<NutritionDisplayRowProps> = ({ property, value }) => {
    return (
        <div className="w-full flex flex-col gap-[10px] pl-[32px] pb-[13px] border-b last:border-b-0">
            <div className="w-full flex flex-row">
                <div className="w-[305px] font-outfit text-[16px]">{property}</div>
                <div className="font-outfit font-bold text-[16px] text-brown-800">{value}</div>
            </div>
        </div>
    )
}
