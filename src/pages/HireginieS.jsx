import '../App.css'
import { Route, Routes } from 'react-router-dom';
import HireginieServices from "../Hireginie Services/HireginieServices";
// import Header from './component/Header'
import TrustedBy from '../Component/TrustedBy';
// import Footers from '../Component/Footers';
import Impact from '../D & I Impact_Component/Impact';
import Simpact from '../addonpage/Simpact';

function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <Impact/> */}
    <Simpact></Simpact>
      <Routes>
        <Route path="/" element={<HireginieServices />} />
        <Route path="/talent-sourcing" element={<div>Talent Sourcing Page</div>} />
        <Route path="/interviewer-on-demand" element={<div>Interviewer On Demand Page</div>} />
        <Route path="/recruitment-process-outsourcing" element={<div>Recruitment Process Outsourcing Page</div>} />
        <Route path="/outplacement-services" element={<div>Outplacement Services Page</div>} />
      </Routes>
    <TrustedBy/>
    {/* <Footers/> */}

    </>
  )
}

export default App
