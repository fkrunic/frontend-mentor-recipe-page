import './App.css'
import {NutritionSection} from "./components/NutritionSection.tsx";
import {InstructionSection} from "./components/InstructionSection.tsx";
import {appData, instructionSection} from "./data.ts";
import {Bullet} from "./components/Bullet.tsx";

function App() {
  return (
      <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-3xl font-young-serif font-bold underline">Hello World!</h1>
          <div className="flex flex-col gap-[10px] items-center px-[10px] py-[40px]">
              <Bullet/>
              <InstructionSection {...instructionSection} />
              <NutritionSection title={appData.title} description={appData.description} entries={appData.entries} />
          </div>
      </div>
  )
}

export default App
