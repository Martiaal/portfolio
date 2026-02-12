import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./features/Home";
import {CupoGame} from "./projects/cupo_game/CupoGame.tsx";
import {QixGame} from "./projects/qix/QixGame.tsx";

function App() {

      return (
          <Router>
              <Routes>
                  <Route path={"/"} element={<HomePage/>}/>
                  <Route path={"/shooter"} element={<CupoGame/>}/>
                  <Route path={"/qix"} element={<QixGame/>}/>
              </Routes>
          </Router>
      )
}

export default App
