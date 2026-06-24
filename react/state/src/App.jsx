import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  });



  const changePage = () => {
    setData({
      ...data,
      currentPage: data.currentPage === 'Home' ? 'Landing' : 'Home'
    });
  };



  return (
    <div className="App" style={{ padding: '20px' }}>

      <button onClick={changePage}>Change Page</button>

      <div>{data.currentPage === 'Home' ? <Home store={data.store} shouldDiscount={data.shouldDiscount} /> : <Landing user={data.user} store={data.store} />}</div>

    </div>
  );
}

export default App
