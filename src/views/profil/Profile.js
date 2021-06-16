import './Profile.scss';
import Header from "../../components/Header"
import OrderHistory from '../../components/OrderHistory';
import User from '../../Vectors/Profile.png';
import { useContext, /* useState */} from 'react';


import { UserContext } from '../../App.js'


  

function Profile() {

/* const [orders, getOrders] = useState([]) */
const username = useContext(UserContext);
/* const email = useContext(UserContext); */


/* useState(() => {

  async function getState() {
 */

    /* fetch('http://localhost:8000/api/order/johanna') */
     /*  .then(response => response.json())
      .then(data => console.log(data)) */


     /*  const response = await fetch('http://localhost:8000/api/order/johanna')
      const data = await response.json()
console.log('getState:', data)
 */

      /* getOrders(data) */

/*       }
  getState()
}, []) */

  return (
    <section id="Profile">
      <Header />

<div className="profile-wrap">
      <img src={ User } alt="" className="User" />
    <h3 className="profile-text">{username}</h3>
    {/* <p className="profile-text">{email}</p> */}
</div>

<div className="order-wrap">
    <h3 className="profile-text-order">Orderhistorik</h3>
 {/*    <ul className="Order-list">
            { orders.map((order) => {
                return <OrderHistory Item={ order.Item } key={ order.desc } />
            }) }
        </ul> */}
       
        <OrderHistory />
        
    </div>

    </section>
  )
}

export default Profile