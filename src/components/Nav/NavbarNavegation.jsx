import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function NavbarNavegation({ closeMenu }) {
  return (
    <ul className="nav__ul">
      <li onClick={closeMenu} className="nav__li">
        <Link to="/" onClick={closeMenu}>
          home
        </Link>
      </li>
      <li onClick={closeMenu} className="nav__li">
        <HashLink to={'/#about-me'}>about me</HashLink>
      </li>
      <li onClick={closeMenu} className="nav__li">
        <HashLink to={'/#gallery'}>gallery</HashLink>
      </li>
      <li onClick={closeMenu} className="nav__li">
        <HashLink to={'/#contact'}>contact</HashLink>
      </li>
    </ul>
  )
}
