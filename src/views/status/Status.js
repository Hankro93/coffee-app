import './Status.scss';
import Drone from '../../Vectors/Group 5.png';

import { useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'

function Status() {

    const history = useHistory()
    const orderStatus = useSelector((state) => { return state.orderStatus})

function SendOk() {
  history.push("/Profile")
}


  return (
<section className="Status">
  

  <div className="wrap-status">

    <p className="status-p">{orderStatus.id}</p>

    <img src={ Drone } alt="" className="Drone" />
<h1 className="status-heading">Din beställning är på väg!</h1>
<p className="status-p">{orderStatus.eta} minuter</p>

<button className="status-button" onClick={ SendOk }>Ok, cool!</button>
  
    </div>
  
    </section>
  )
}



export default Status