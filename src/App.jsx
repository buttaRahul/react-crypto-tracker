import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import './App.css'

function App() {

  return (
    <BrowserRouter >
      
      <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/coins/:id" element = {<CoinPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
