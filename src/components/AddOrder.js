import './AddOrder.scss'

function AddOrder({ task }) {

    return (
      <div>
        <li className="title-cart">{ task.task.title }......... 
        </li>
        <li className="price-cart">{ task.task.price } kr
        </li>
       
        </div>
       
    )
  }
  
  export default AddOrder