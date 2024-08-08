import {Bullet} from "./Bullet.tsx";
import React from "react";

export interface PreparationRowProps {
    title: string,
    description: string,
}

export const PreparationRow: React.FC<PreparationRowProps> = ({ title, description }) => {
    return (
        <div className="flex flex-row gap-[27px] items-center">
            <Bullet/>
            <div className="font-outfit text-[16px]">
                <span className="font-bold">{title}: </span>
                <span>{description}</span>
            </div>
        </div>
    )
}