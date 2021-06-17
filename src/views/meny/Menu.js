import Header from "../../components/Header"
import './Menu.scss';
import Foot from '../../Vectors/header.png'
import Bag from '../../Vectors/bag.png'
import { useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Modal from 'react-modal'
import {useSelector, useDispatch} from 'react-redux'
import MenuThing from '../../components/MenuThing'
import AddOrder from '../../components/AddOrder'
import OrdAction from '../../Action/OrdAction'
import { UserContext } from '../../App.js'

Modal.setAppElement("#root")


function Menu() {

  const username = useContext(UserContext)
  const menu = useSelector((state) => { return state.menu })
  const orders = useSelector((state) => { return state.orders })
  const dispatch = useDispatch()

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee')
      const data = await response.json()
      dispatch(OrdAction.getMenu(data.menu))
    }

    getMenu()
  }, [dispatch])

  const [SoOpen, IsSoOpen] = useState(false)
  const history = useHistory()

  function toggleModal() {
    IsSoOpen(!SoOpen)
  }

  function handlePay() {

    fetch('http://localhost:8000/api/order', {
      body: JSON.stringify({ username: username,orders }),
      headers: {
          'Content-Type': 'application/json'
       },
      method: 'POST'
    })
      .then((response) => response.json())
      .then(result => {
     
      const status = {
        id: result.id,
        eta: result.eta
      }
      dispatch(OrdAction.postOrder(status))
      history.push("/Status")
   })
  }

  return (
    <div id="Menu">
      <Header />
    <div>
      <div id="big-circle">
      <img id="bag" src={ Bag } alt="" role= "button" onClick={toggleModal}/>

      <Modal
        appElement={document.getElementById('Menu')}
        isOpen={SoOpen}
        onRequestClose={toggleModal}
        className="the-modal"
        overlayClassName="the-overlay"
        
      >
      
        <h2 id="title-overlay">Din beställning</h2>

        <ul className="order-list-overlay">
            { orders && orders.map((menu1) => {
                return <AddOrder task={ menu1 } key={`index-${ menu1.id }`} />  
            }) }
        </ul>

        <p id="total">Total.......................................</p> 
        <p id="moms">Inkl moms + drönarleverans</p>

        <button id="pay" onClick={ handlePay }>Take my money!</button>
      </Modal>

      <div id="small-circle">
        <p id="number">0</p>
      </div>
      </div>
     
      <h1 className="menu-title">Meny</h1>
       
        <ul className="meny-lista">
            { menu.map((menu1) => {
                return <MenuThing className="list-item" task={ menu1 } key={ menu1.id } /> 
            }) }
        </ul>
    </div>

  <img src={Foot} alt="" className="Footer"/>
    </div>
  )
}


export default Menu

