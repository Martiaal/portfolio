import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./features/Home";
import {CupoGame} from "./projects/cupo_game/CupoGame.tsx";
import {QixGame} from "./projects/qix/QixGame.tsx";
import {CodexNaturalis} from "./projects/codex_naturalis/CodexNaturalis.tsx";
import {Algiers} from "./projects/algiers/Algiers.tsx";
import {Travia} from "./projects/travia/Travia.tsx";
import {EiffelTime} from "./projects/eiffel_time/EiffelTime.tsx";

function App() {

      return (
          <Router>
              <Routes>
                  <Route path={"/"} element={<HomePage/>}/>
                  <Route path={"/shooter"} element={<CupoGame/>}/>
                  <Route path={"/qix"} element={<QixGame/>}/>
                  <Route path={"/codex_naturalis"} element={<CodexNaturalis/>}/>
                  <Route path={"/algiers"} element={<Algiers/>}/>
                  <Route path={"/travia"} element={<Travia/>}/>
                  <Route path={"/eiffel_time"} element={<EiffelTime/>}/>
              </Routes>
          </Router>
      )
}

export default App
