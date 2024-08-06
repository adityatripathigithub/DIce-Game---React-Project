import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame"
import { useState } from "react";


const App = () => {

const [isGameStarted, setisGameStarted] = useState(false)

const toggleGamePlay = () => {

  setisGameStarted((prev) => !prev)

}
  return (
    <> {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} />} </>
  );
}

export default App



// import StartGame from "./components/StartGame";
// import { useState } from "react";

// function App() {

//   const [isGameStarted, setisGameStarted] = useState(false);

//   const toggleGamePlay = () => {

//     setisGameStarted((prev) => !prev);
    
//     return (
//       <>
//         <StartGame />

//       </>
//     )
//   }
// }
// export default App

