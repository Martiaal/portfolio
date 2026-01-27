import {HashRouter as Router} from 'react-router-dom';
import { NavBox } from "./components/NavBox.tsx";
import {HomePage} from "./features/Home.tsx";

function App() {

      return (
          <Router>
              <NavBox/>
              <HomePage/>
          </Router>
      )
}

export default App
