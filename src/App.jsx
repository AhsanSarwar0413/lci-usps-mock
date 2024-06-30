import './App.css'
import AsideNavigation from './components/AsideNavigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adhoc from './pages/Adhoc';
import Routine from './pages/Routine';
import Periodic from './pages/Periodic';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <Router>
        <div className="page-width">
          <AsideNavigation />
          <div className="panel-navigation">
            <Navigation />
            <Routes>
                <Route path="/" element={<Adhoc />} />
                <Route path="/routine" element={<Routine />} />
              <Route path="/periodic" element={<Periodic />} />
            </Routes>
          </div>
        </div>
        </Router>
    </>
  )
}

export default App
