
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import WatchList from './components/WatchList'
import Error from './components/Error'
import CoinDetails from './components/CoinDetails'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/coin/:coinId' element={<CoinDetails />} />
        <Route path='/about'  element={<About />}/>
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
