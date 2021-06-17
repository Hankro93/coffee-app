import './Header.scss';
import Nav from '../Vectors/header.png'
import Icon from '../Vectors/navicon.png'
import { useHistory } from 'react-router-dom'

function Header() {
const history = useHistory()

  function Show() {
    history.push("/nav")
  }
  
  return (
    <section>
<div className="Header">
   <img src={Icon} alt="" className="Icon" role="button" onClick={Show}/>
   <img src={Nav} alt="" className="Leaves"/>
</div>
    </section>
  )
}

export default Header;

