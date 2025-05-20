import './App.css'

function App() {

  const purpose = "Full-Stack Web3"

  const year = 2025
  
  const readytoStart = true

  return (
    <>

      <div>Main target is "{purpose}" in {year}!</div>

      <div>{readytoStart ? "Let's learn Web3" : "Wake up!"}</div>

      <div>{readytoStart && "A rolling stone gathers no moss!"}</div>
      
    </>
  )
}

export default App
