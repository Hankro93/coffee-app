
import './App.scss';
import { useState, createContext } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './views/login/Login'
import Profile from './views/profil/Profile'
import About from './views/about/About'
import Menu from './views/meny/Menu'
import Nav from './views/nav/Nav'
import Status from './views/status/Status'

const UserContext = createContext(undefined)
const UpdateContext = createContext(undefined)

function App() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
       <UserContext.Provider value={ username }>
       <UpdateContext.Provider value={ email }>
      <Switch>
        <Route path="/" component={ () => <Login update={ setUsername } updateEmail={ setEmail } /> } exact />
        <Route path="/Profile" component={ Profile } />
        <Route path="/About" component={ About } />
         <Route path="/Menu" component={ Menu } />
         <Route path="/Nav" component={ Nav } />
         <Route path="/Status" component={ Status } />
      </Switch>
      </UpdateContext.Provider>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export { App,  UserContext, UpdateContext}