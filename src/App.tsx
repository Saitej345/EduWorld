
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
// import HelloWorld from './components/HelloWorld';
import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Cources from './components/pages/Cources';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import CreateContact from './components/pages/CreateContact';
// import HomeBody from './components/HomeBody';
function App() { 
  return (
     <div>
      
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/cources" Component={Cources}/>
      <Route path="/about" Component={About}/> 
      <Route path="/contact" Component={Contact}/> 
      <Route path="/add-contacts" Component={CreateContact}/> 

     </Routes>
 
    {/* <CreateContact/> */}
     </div>

  );
}

export default App;
