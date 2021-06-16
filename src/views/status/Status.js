import './Status.scss';
import Drone from '../../Vectors/Group 5.png';





function Status() {
  return (
<section className="Status">
  

  <div className="wrap-status">

    <p className="status-p">Ordernummer</p>

    <img src={ Drone } alt="" className="Drone" />
<h1 className="status-heading">Din beställning är på väg!</h1>
<p className="status-p">minuter</p>

<button className="status-button">Ok, cool!</button>
  
    </div>
  
    </section>
  )
}



export default Status