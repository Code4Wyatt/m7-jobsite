import './App.css';
import NavBar from "../components/NavBar"
import { Link, Switch, Router } from 'react-router'

function App() {
  return (
   <div className="App">
     <Router>
     <div>
              <NavBar />
              <Switch>
                <Route exactly component={Landing} pattern="/" />
                <Route exactly component={AllJobs} pattern="/alljobs" />
                <Route exactly component={SearchedJobs} pattern="/jobs" />
                <Route component={Page404} />
              </Switch>
      </div>
     </Router>
   </div>

  );
}

export default App;
