import {useState, useEffect} from 'react'
import './OrderHistory.scss';

function OrderHistory() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getState() {
      const response = await fetch('http://localhost:8000/api/order/johanna')
      const data = await response.json()
console.log('getState:', data)
setPosts(data)
     

      }
  getState()
}, [])
  

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