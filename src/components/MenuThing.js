import PLUS from '../Vectors/add.png'
import './MenuThing.scss'
import OrdAction from '../Action/OrdAction'
import {  useDispatch } from 'react-redux'

function MenuThing({ task }) {
  const dispatch = useDispatch()
  var number = 0

  function countClick() {
   number++
   document.getElementById("number").innerHTML = number
   dispatch(OrdAction.addOrder(task))
  }

  return (
    <div>
      <div id="one-row">
      <img role="button" onClick={ () => { countClick(task) }} id="add" src={PLUS} alt=""/>
      <li className="title">{ task.title } </li>
      <li className="price">{ task.price } kr</li>
      </div>
      <li id="desc">{ task.desc }</li>
      </div>
  )
}

export default MenuThing