import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Singin'
import SignUp from './pages/SignUp'
import  Dashboard  from "./pages/Dashboard";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
