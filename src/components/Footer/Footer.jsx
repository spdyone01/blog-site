import Logo from '../../images/logo.png';

import './_Footer.scss';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made <b>React.js</b> and <b>Sass</b></span>
    </footer>
  )
}
export default Footer