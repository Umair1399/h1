import '../App.css'
import { Route, Routes } from 'react-router-dom';
// import Header from './component/Header'
import Impact from '../D & I Impact_Component/Impact'
import ImpactSection from '../D & I Impact_Component/ImpactSection'
import TrustedBy from '../Component/TrustedBy';
import Dimpact from '../addonpage/Dimpact';
// import Footer from './Component/Footer';
// import Footers from '../Component/Footers';
function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <Impact/> */}
    <Dimpact></Dimpact>
      <Routes>
        <Route path="/" element={<ImpactSection />} />
        <Route path="/bbbp-program" element={<div>BBBP Program Page</div>} />
      </Routes>
    <TrustedBy/>
    {/* <Footers/> */}
    </>
  )
}

export default App