import {HashRouter as Router} from 'react-router-dom';
import { Header } from "./components/Header";
import {HomePage} from "./features/Home.tsx";

function App() {

      return (
          <Router>
              <Header/>
              <HomePage/>
          </Router>
      )
}

export default App
