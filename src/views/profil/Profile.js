import './Profile.scss';
import Header from "../../components/Header"
import OrderHistory from '../../components/OrderHistory';
import User from '../../Vectors/Profile.png';
import { useContext, /* useState */} from 'react';
import { UserContext, UpdateContext } from '../../App.js'

function Profile() {

   
/* const [orders, getOrders] = useState([]) */
const username = useContext(UserContext);
const email = useContext(UpdateContext); //

  return (
    <section id="Profile">
      <Header />

<div className="profile-wrap">
      <img src={ User } alt="" className="User" />
    <h3 className="profile-text">{username}</h3>
    <p className="profile-text">{email}</p>
</div>

<div className="order-wrap">
    <h3 className="profile-text-order">Orderhistorik</h3>

       
        <OrderHistory />
        
    </div>

    </section>
  )
}

export default Profile