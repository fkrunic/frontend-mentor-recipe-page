import React from "react";
import {HeaderProps} from "../common/schema.ts";

export const Header: React.FC<HeaderProps> = ({title, description}) => {
    return (
        <div className="w-full flex flex-col gap-[19px]">
            <div className="font-young-serif text-[40px]">{title}</div>
            <div className="font-outfit text-[16px]">{description}</div>
        </div>
    )
}