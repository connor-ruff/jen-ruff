import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Books from './Components/Books';
import Media from './Components/Media';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/books' exact component={Books}/>
        <Route path='/media' exact component={Media}/>
        <Route path='/contact' exact component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
