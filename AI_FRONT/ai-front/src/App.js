import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topview from './component/Topview';
import Home from './component/Home';
import Menu from './component/Menu';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Topview/>
     
      <Home/>

      <br></br><br></br><br></br><br></br>
      <Menu/>
      <br></br><br></br><br></br><br></br>
      <Footer/>
    </div>
  );
}

export default App;
