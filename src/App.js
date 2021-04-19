import './App.css'
import ReactCard from 'ugly-reacty-table'
import { terms } from './terms'

function App() {
  return (
    <div className='App center'>
      <ReactCard data={terms}></ReactCard>
    </div>
  )
}

export default App
