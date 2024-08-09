export interface NutritionDisplayRowProps {
    property: string
    value: string
}

export interface NutritionSectionProps {
    title: string
    description: string
    entries: NutritionDisplayRowProps[]
}

export interface HeaderProps {
    title: string,
    description: string,
}