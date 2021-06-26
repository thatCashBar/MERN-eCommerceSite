import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homeview from './views/Homeview';
import ProductInfoview from './views/ProductInfoview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Route path='/' component={Homeview} exact/>
        <Route path='/product/:id' component={ProductInfoview}/>
      </BrowserRouter>
    </div>
  );
}

export default App;