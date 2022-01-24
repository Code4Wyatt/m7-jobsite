import './App.css';
import NavBar from "./components/NavBar"
import JobList from "./components/JobList"
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <div className="App">
     <Router>
              <NavBar />
              <Routes>
                <Route path="/home" exact component={JobList} />
              
                
              </Routes>
     </Router>
   </div>

  );
}

export default App;
