import {PreparationRow, PreparationRowProps} from "./PreparationRow.tsx";
import React from "react";

export interface PreparationSectionProps {
    rows: PreparationRowProps[]
}

export const PreparationSection: React.FC<PreparationSectionProps> = ({rows}) => {
    return (
        <div className="w-full flex flex-col px-[28px] py-[22px] rounded-[10px] border border-red-700">
            <div className="flex flex-col gap-[13px]">
                <div className="font-outfit font-bold text-[20px]">Preparation time</div>
                <div className="w-full flex flex-col pl-[8px]">
                    <div className="flex flex-col gap-[10px]">{rows.map((row, index) =>
                        <PreparationRow key={index} {...row}/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}