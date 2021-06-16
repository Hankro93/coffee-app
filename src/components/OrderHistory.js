import {useState, useEffect} from 'react'
import './OrderHistory.scss';
import { useContext } from 'react'
import { UserContext } from '../App.js'

function OrderHistory() {
  const [posts, setPosts] = useState([])
  const username = useContext(UserContext)

  useEffect(() => {
    async function getState() {
      const response = await fetch('http://localhost:8000/api/order/' + username)
      const data = await response.json()
    setPosts(data)
     
      }
  getState()
}, [username])
  
  return (
      <ul className="order-wrap">
        {
          
posts.map(post => <div>
  <li className="order-list" key={post.id}>
  #{post.id}</li>
  <li className="order-list">{post.orderTime}</li>
  <li className="order-list">total ordersumma {post.price} kr</li>
  <hr></hr>
  
  
  </div>

  )
        }
        
      </ul>
  )
}

export default OrderHistory;