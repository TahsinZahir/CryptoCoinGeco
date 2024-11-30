import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CoinTable from './components/CoinTable/CoinTable'
import { useState } from 'react'
function App(){
const [currency,setcurrency]=useState('usd')
return (
  <>
  <Navbar/>
  <Banner/>
  <CoinTable currency={currency}/>
  </>
)
}
export default App