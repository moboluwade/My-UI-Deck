import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='pt-4 pl-12'>
      <h3>This is UI Deck</h3>
      <div>
        <h3>Table of Contents</h3>
        <div>
          <Link to='/ui/notch'><p>Notch-Header </p></Link>
          <Link to='/app/scroll-marquee'><p>Scroll-trigerred marquee </p></Link>
        </div>
      </div>
    </div>
  )
}

export default App
