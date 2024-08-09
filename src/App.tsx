import {RecipeCard as DesktopRecipeCard} from "./components/desktop/RecipeCard.tsx";
import {RecipeCard as MobileRecipeCard} from "./components/mobile/RecipeCard";
import {recipeCard} from "./data.ts";

function App() {
    return (
        <>
            <div className="hidden md:block">
                <DesktopRecipeCard {...recipeCard} />
            </div>

            <div className="md:hidden">
                <MobileRecipeCard {...recipeCard} />
            </div>
        </>
    )
}

export default App
