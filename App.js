import logo from './logo.svg';
import './App.css';
//import Sidebar from './components/Sidebar';
//import VesselSearch from './components/VesselSearch';
//import Searchbox from './components/Searchbox/Searchbox';
import Searchbox from './components/Searchbox/Searchbox1';
import { Component } from 'react';
import Searchlist from './components/Searchbox/Searchlist';
import Searchbox1 from './components/Searchbox/Searchbox1';
import Navbar from './components/Searchbox/Navbar'
class App extends Component {
  render(){
  return (
    
    <div className="App">
   
     
     <Searchbox1 />
     <Navbar />
    </div>

    
  );
}
}
export default App;
