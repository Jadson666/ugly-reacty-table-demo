import './App.css'
import ReactCard from './ReactCard'
import { terms } from './terms'

function App() {
  return (
    <div className='App center'>
      <ReactCard data={terms}></ReactCard>
    </div>
  )
}

export default App
