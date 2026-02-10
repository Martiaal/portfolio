import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { NavBox } from "./components/NavBox.tsx";
import {HomePage} from "./features/Home";

function App() {

      return (
          <Router>
              <NavBox/>
              <Routes>
                  <Route path={"/"} element={<HomePage/>}/>
              </Routes>
          </Router>
      )
}

export default App
