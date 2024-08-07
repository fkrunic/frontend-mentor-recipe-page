import {NutritionDisplayRow, NutritionDisplayRowProps} from "./NutritionDisplayRow.tsx";

export interface NutritionSectionProps {
    title: string
    description: string
    entries: NutritionDisplayRowProps[]
}

export const NutritionSection = ({ title, description, entries }: NutritionSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-[26px]">
            <div className="w-full flex flex-col gap-[16px]">
                <div className="font-young-serif text-[30px]">{title}</div>
                <div className="font-outfit text-[16px]">{description}</div>
            </div>
            <div className="w-full flex flex-col gap-[13px]">
                {entries.map(NutritionDisplayRow)}
            </div>
        </div>
    )
}