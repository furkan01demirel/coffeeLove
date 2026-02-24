import { NavLink } from 'react-router-dom'

function Header() {
  return (
   <header className='header'>
    <div className='container header__row'>
        <div className="brand">
          <div className="brand__title">Coffee Lover</div>
        </div>

        <nav className='nav' aria-label='Sayfa menüsü'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}>Ana Sayfa</NavLink>
            <NavLink to="/benefits" className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}>
                Faydaları
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}>Tarihçesi</NavLink>
        </nav>
    </div>
   </header>
  )
}

export default Header