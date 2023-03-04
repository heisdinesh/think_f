import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import { Participant, Profile, Wrong , Correct} from './components';
=======
import { Participant, Profile , Firsypage } from './components';
>>>>>>> fe5ceb8a0ee102a612495db6d0ab2e48b5acd310
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
        <Route path="/Firstpage" element={<Firstpage/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
