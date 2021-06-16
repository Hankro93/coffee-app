import Header from "../../components/Header"
import './Menu.scss';
import Foot from '../../Vectors/header.png'



function Menu() {
  return (
<section id="Menu">
  <Header />
    <h1>Meny</h1>
   
    <img src={Foot} alt="" className="Footer"/>
    </section>
  )
}

fetch('http://localhost:8000/api/coffee')
  .then(response => response.json())
  .then(data => console.log(data));

export default Menu