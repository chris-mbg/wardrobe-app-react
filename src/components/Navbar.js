import { NavLink } from 'react-router-dom'
import styles from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Wardrobe</NavLink>
      <NavLink to="/add">Add item</NavLink>
    </nav>
  );
}

export default Navbar;