import {RecipeCard} from "./components/RecipeCard.tsx";
import {recipieCard} from "./data.ts";

function App() {
  return (
      <div className="
        flex flex-col
        justify-center
        items-center
        min-h-screen
        ">
        <RecipeCard {...recipieCard} />
      </div>
  )
}

export default App
