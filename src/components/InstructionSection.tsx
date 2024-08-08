import {InstructionRow, InstructionRowProps} from "./InstructionRow.tsx";
import React from "react";

export interface InstructionSection {
    title: string,
    instructions: InstructionRowProps[]
}

export const InstructionSection: React.FC<InstructionSection> = ({title, instructions}) => {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="font-young-serif text-[30px]">{title}</div>
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

