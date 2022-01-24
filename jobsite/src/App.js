import NavBar from "./components/NavBar"
import JobList from "./components/JobList"
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"

const App = () => {

  const [jobs, setJobs] = useState([])

  const fetchAllJobs = async () => {

    try {
      let allJobs = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?limit=50`)
      if (allJobs.ok) {
        let jobs = await allJobs.json()
        setJobs(jobs)
        console.log(jobs)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllJobs()
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
          <Route path="/" element={<JobList />} />

          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
