import React from "react";

export interface InstructionRowProps {
    count: number,
    title: string,
    description: string
}

function toBullet(count: number): string {
    return `${count}.`
}


export const InstructionRow: React.FC<InstructionRowProps> = ({ count, title, description }) => {
    return (
        <div className="w-full flex flex-row gap-[21px]">
            <div className="font-outfit font-bold text-[16px] text-brown-800">{toBullet(count)}</div>
            <div className="font-outfit text-[16px]">
                <span className="font-bold">{title}: </span>
                <span>{description}</span>
            </div>
        </div>
    )
}