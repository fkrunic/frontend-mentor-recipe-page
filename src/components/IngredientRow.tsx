import {Bullet} from "./Bullet.tsx";
import React from "react";

export interface IngredientRowProps {
    content: string
}

export const IngredientRow: React.FC<IngredientRowProps> = ({ content }) => {
    return (
        <div className="flex flex-row gap-[28px]">
            <Bullet/>
            <div className="font-outfit text-[16px]">{content}</div>
        </div>
    )
}