import './App.css'
import Card from './components/Card'

import Pic1 from "./assets/images/pic1.jpg"
import Pic2 from "./assets/images/pic2.jpg"

function App() {

  return (
    
    <div className='container'>
      
      <Card  picture={Pic1} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, perferendis."}/>

      <Card picture={Pic2}  info={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum doloribus nulla aliquid at consequuntur quaerat."}/>

    </div>

  )
}

export default App
