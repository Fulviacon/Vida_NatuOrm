import { Link } from 'react-router-dom'
import logo from './img/logoPropio.png'
import './Header.css'
function Header () {
  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/Home"><img src={logo} alt="Logo" className='logo header_a' /></Link>
      </div>

      <div className="navegacion">
        <ul>
          <li><Link className='header_a' to="/home">Home</Link></li>
          <li><Link className='header_a' to="/contaminacion">Contaminacion</Link></li>
          <li><Link className='header_a' to="/donaciones">Donaciones</Link></li>
          <li><Link className='header_a' to="/">Login</Link></li>
        </ul>
      </div>
    </header>

  )
}
export default Header
