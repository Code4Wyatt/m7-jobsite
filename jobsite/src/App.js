import NavBar from "./components/NavBar"
import SearchPage from "./components/SearchPage"
import SearchResults from "./components/SearchResults"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <BrowserRouter>
     
        {/* <NavBar /> */}
       
          <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:companyName" element={<SearchResults/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
