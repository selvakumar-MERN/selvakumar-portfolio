import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route exact path='/'
     element={<Home/>}>

     </Route>
     <Route exact path='/About'
     element={<About/>}>

     </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
