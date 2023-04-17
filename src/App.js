import { BrowserRouter } from 'react-router-dom';
import './App.css';


import Filters from './components/Filters';
function App() {
  return (
    <BrowserRouter>
      <Filters />
      </BrowserRouter>
  );
}

export default App;
