import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./features/Home";
import {CupoGame} from "./projects/cupo_game/CupoGame.tsx";
import {QixGame} from "./projects/qix/QixGame.tsx";
import {CodexNaturalis} from "./projects/codex_naturalis/CodexNaturalis.tsx";
import {Algiers} from "./projects/algiers/Algiers.tsx";

function App() {

      return (
          <Router>
              <Routes>
                  <Route path={"/"} element={<HomePage/>}/>
                  <Route path={"/shooter"} element={<CupoGame/>}/>
                  <Route path={"/qix"} element={<QixGame/>}/>
                  <Route path={"/codex_naturalis"} element={<CodexNaturalis/>}/>
                  <Route path={"/algiers"} element={<Algiers/>}/>
              </Routes>
          </Router>
      )
}

export default App
