// import { useState } from 'react'
import { useState } from "react"
import ColorInputField from "./components/ColorInputField"
import SquarColor from "./components/SquarColor"
import ToggleButton from "./components/ToggleButton"
function App() {
  const [color, setColor] = useState("")
  const [theme, setTheme] = useState("black");
  function toggle() {
    setTheme(theme === "black" ? "white" : "black")
  }

  return (
    <div className="grid justify-center items-center h-[100vh]">
      <main>
        <SquarColor
          color={color}
          theam={theme}
        />
        <ColorInputField
          color={color}
          setColor={setColor}
        />
        <ToggleButton
          toggle={toggle}
        />
      </main>
    </div>
  )
}

export default App
