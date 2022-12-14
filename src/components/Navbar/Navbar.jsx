import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import './_Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=webdev'>
            <h6>WEB DEVELOPMENT</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=3dprinter'>
            <h6>3D PRINTER</h6>
          </Link>
          <Link className='link' to='/?cat=photography'>
            <h6>PHOTOGRAPHY</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <Link className='link' to='/write'>
            <span className='write'>Write</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
