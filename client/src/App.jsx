import './App.css'
import Banner from './components/banner'
import Hotelrow from './components/hotelrow'
import Navbar from './components/navbar'
import Offer from './components/offer'

function App() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Banner></Banner>
      <Offer></Offer>
      <Hotelrow title="good deals on hotels"></Hotelrow>
    </div>
  )
}

export default App
