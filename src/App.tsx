import {BrowserRouter} from 'react-router-dom';
import Routing from './routing/Routing';
import Header from './components/molecule/Header';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App