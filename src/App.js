import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Participant, Profile , Firsypage } from './components';
import {Home,Creator,Game,Join,Instructions, GetReady, Login} from "./pages"
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          
          <Route path="/game" element={<Game />} />
          <Route path="/join" element={<Join />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path= "/getReady" element={<GetReady />} />
<Route path='/participant' element={<Participant/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/creator" element={<Creator />} />
        <Route path="/Firstpage" element={<Firstpage/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
