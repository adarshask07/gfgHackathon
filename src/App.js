import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BreakEvenCalculator from "./Components/Calculators/BreakEvenCalculator";
import CagrCalculator from "./Components/Calculators/CagrCalculator";
import EmiCalculator from "./Components/Calculators/EmiCalculator";
import GoalCalculator from "./Components/Calculators/GoalCalculator";
import LumpsumCalculator from "./Components/Calculators/LumpSumCalculator";
import PositionSizeCalculator from "./Components/Calculators/PositionSizeCalculator";
import RoiCalculator from "./Components/Calculators/RoiCalculator";
import SipCalculator from "./Components/Calculators/SipCalculator";
import FinNav from "./Components/FinNav";
import Calculators from "./Pages/Calculators";
import Home from "./Pages/Home";
import RecommendationPageUserInfo from "./Pages/RecommendationPageUserInfo";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserInput from "./Pages/UserInput";
import "./style.js";

import ResultPage from "./Pages/ResultPage.js";
import ScoreWithCard from "./Pages/ScoreWithCard.js";


function App() {
  const [model, setModel] = useState(null) ;

  

  return (
  <div className="w-full bg-black h-full" >
    <div className=" mb-5 top-2 sticky z-10">
    <FinNav/>
    
    </div>
    
   

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Calculators" element={<Calculators/>}></Route>
      <Route path="/EmiCalculator" element={<EmiCalculator/>}></Route>
      <Route path="/BreakEvenCalculator" element={<BreakEvenCalculator/>} ></Route>
      <Route path="/CagrCalculator" element={<CagrCalculator/>}></Route>
      <Route path="/GoalCalculator" element={<GoalCalculator/>}></Route>
      <Route path="/LumpSumCalculator" element={<LumpsumCalculator/>}></Route>
      <Route path="/RoiCalculator" element={<RoiCalculator/>}></Route>
      <Route path="/SipCalculator" element={<SipCalculator/>}></Route>
      <Route path="/PositionSizeCalculator" element={<PositionSizeCalculator/>}></Route>
      <Route path= "RecommendationPageUserInfo" element= {<RecommendationPageUserInfo/>}></Route>
      <Route path= "/UserInput" element= {<UserInput/>}></Route>
      <Route path= "/ScoreWithCard" element= {<ScoreWithCard/>}></Route>
      <Route path="/ResultPage" element={<ResultPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
     

    </Routes>
    
  </div>
  );
}

export default App;
