import {InstructionRow, InstructionRowProps} from "./InstructionRow.tsx";
import React from "react";

export interface InstructionSectionProps {
    title: string,
    instructions: InstructionRowProps[]
}

export const InstructionSection: React.FC<InstructionSectionProps> = ({title, instructions}) => {
    return (
        <div className="flex flex-col gap-[16px] border-b-2 border-stone-150 pb-[10px]">
            <div className="font-young-serif text-[30px] text-brown-800">{title}</div>
            <div className="flex flex-col pl-[7px] pb-[32px]">
                <div className="flex flex-col gap-[8px]">{instructions.map((prop, index) => (
                    <InstructionRow
                        key={index}
                        count={index + 1}
                        title={prop.title}
                        description={prop.description}
                    />
                ))}</div>
            </div>
        </div>
    )
}

