
import './Nav.scss';
import Close from '../../Vectors/close.png'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Nav() {

const history = useHistory();
function Current(){
  history.go(-1); return false
}

  return (
<section id="Nav">
  <img src={Close} alt="" role="button" onClick={Current} className="Close" />
  <div className="wrap">
    <Link className="White-menu" to="/Menu">Meny</Link>
    <hr className="nav-line"></hr>
    <Link className="White-menu" to="/About">Vårt kaffe</Link>
    <hr className="nav-line"></hr>
    <Link className="White-menu" to="/Profile">Min profil</Link>
    <hr className="nav-line"></hr>
    <Link className="White-menu" to="/Status">Orderstatus</Link>
    </div>
    </section>
  )
}

export default Nav