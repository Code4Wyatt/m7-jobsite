import NavBar from "./components/NavBar"
import SearchPage from "./components/SearchPage"
import SearchResults from "./components/SearchResults"
import Favourites from "./components/Favourites"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <BrowserRouter>
     
       <NavBar /> 
       
          <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:companyName" element={<SearchResults/>}/>
          <Route path="/favourites" element={<Favourites />}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
