import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homeview from './views/Homeview';
import ProductInfoview from './views/ProductInfoview';
import Cartview from './views/Cartview';
import Loginview from './views/Loginview'
import Registrationview from './views/Registrationview'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Route path='/' component={Homeview} exact/>
        <Route path='/product/:id' component={ProductInfoview}/>
        <Route path='/cart' component={Cartview} exact/>
        <Route path='/login' component={Loginview} exact/>
        <Route path='/register' component={Registrationview} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;