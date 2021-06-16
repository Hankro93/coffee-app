import './Header.scss';

import Nav from '../Vectors/header.png'
import Icon from '../Vectors/navicon.png'


function Header() {
  return (
    <section>
<div className="Header">
   <img src={Icon} alt="" className="Icon"/>
   <img src={Nav} alt="" className="Leaves"/>
</div>
    </section>
  );
}

export default Header;

