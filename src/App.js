import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Participant, Profile, Wrong , Correct} from './components';
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
          {/* <Route path="/profile" element={<Profile/>}/> */}
        <Route path="/wrong" element={<Wrong/>} />
        <Route path="/correct" element = {<Correct/>}/>
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/creator" element={<Creator />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
