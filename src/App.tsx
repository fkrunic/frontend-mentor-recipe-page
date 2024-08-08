import './App.css'
import {NutritionSection} from "./components/NutritionSection.tsx";
import {InstructionSection} from "./components/InstructionSection.tsx";
import {appData, header, ingredientSection, instructionSection, preparationSection} from "./data.ts";
import {IngredientSection} from "./components/IngredientSection.tsx";
import {PreparationSection} from "./components/PreparationSection.tsx";
import {Header} from "./components/Header.tsx";

function App() {
  return (
      <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-3xl font-young-serif font-bold underline">Hello World!</h1>
          <div className="flex flex-col gap-[10px] items-center px-[10px] py-[40px]">
              <Header {...header} />
              <PreparationSection {...preparationSection} />
              <IngredientSection {...ingredientSection} />
              <InstructionSection {...instructionSection} />
              <NutritionSection title={appData.title} description={appData.description} entries={appData.entries} />
          </div>
      </div>
  )
}

export default App
