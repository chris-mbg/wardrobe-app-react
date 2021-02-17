import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ShirtsContextProvider from './contexts/ShirtsContext';
import ShoesContextProvider from './contexts/ShoesContext';
import TrousersContextProvider from './contexts/TrousersContext';
import TShirtsContextProvider from './contexts/TShirtsContext';
import AddItem from './pages/AddItem'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ShoesContextProvider>
          <ShirtsContextProvider>
            <TrousersContextProvider>
              <TShirtsContextProvider>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/add">
                  <AddItem />
                </Route>
              </TShirtsContextProvider>
            </TrousersContextProvider>
          </ShirtsContextProvider>
        </ShoesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
