import { useState, createContext } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import Logga from '../../Vectors/Group 6.png'

const UserContext = createContext(undefined)
const UpdateContext = createContext(undefined)//

function Login({update, updateEmail}) {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')

  function handleName(event) {
    setNewName(event.target.value)
  }
  function handleEmail(event) {
    setNewEmail(event.target.value)
  }

const history = useHistory()

  function handleLogin() {
    fetch('http://localhost:8000/api/account', {
      body: JSON.stringify({ username: newName, email: newEmail }),
      headers: {
          'Content-Type': 'application/json'
       },
      method: 'POST'
    })
      .then((response) => response.json())
      .then(result => {
      console.log('Success:', result)
      update(newName,)
      updateEmail(newEmail) //
      history.push('/Profile')
   })
      .catch(error => {
      console.error('Error:', error)
   })

  }

  return(
    <section id="Login">
      <Header className="Nav"/>
      <div className="wrapper">
        <div className="content">
<img src={Logga} alt="" className="Logga"/>
          <div className="textarea">
      <h1>Välkommen till Airbean-familjen!</h1>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      </div>
<div className="inputarea">
      <form>
          <label>Namn</label>
            <input type="text" onChange={ handleName }  />
          <label>E-post</label>
            <input type="text" onChange={ handleEmail } />
          <input type="radio"></input><label className="radio">GDPR Ok!</label>
          </form>
      </div>
        <button type="button" onClick={ handleLogin }>Logga in</button>
      </div>
      </div>
    </section>
  )
}
export { Login, UserContext, UpdateContext }
