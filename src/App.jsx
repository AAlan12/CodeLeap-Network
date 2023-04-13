import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
