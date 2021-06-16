
import './Nav.scss';
import Close from '../../Vectors/close.png'




function Nav() {
  return (
<section id="Nav">
  <img src={Close} alt="" className="Close" />

  <div className="wrap">

    <h1 className="White-menu">Meny</h1>
    <hr className="nav-line"></hr>
    <h1 className="White-menu">Vårt kaffe</h1>
    <hr className="nav-line"></hr>
    <h1 className="White-menu">Min profil</h1>
    <hr className="nav-line"></hr>
    <h1 className="White-menu">Orderstatus</h1>
    </div>
  
    </section>
  )
}



export default Nav