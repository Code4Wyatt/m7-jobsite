import NavBar from "./components/NavBar"
import SearchPage from "./components/SearchPage"
import SearchResults from "./components/SearchResults"
import Favourites from "./components/Favourites"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux"
import { configureStore } from "../src/redux/store/index.js";

function App () {
  return (
    <Provider store={configureStore}>
    <BrowserRouter>
     
       <NavBar /> 
       
          <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:companyName" element={<SearchResults/>}/>
          <Route path="/favourites" element={<Favourites />}/>
          </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
