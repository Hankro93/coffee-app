
import './App.scss';
import { useState, createContext } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import {Login} from './views/login/Login'
import Profile from './views/profil/Profile'
import About from './views/about/About'
import Menu from './views/meny/Menu'
import Nav from './views/nav/Nav'
import Status from './views/status/Status'
/* import SaveUser from './components/SaveUser'; */


const UserContext = createContext(undefined)

function App() {
    const [username, setUsername] = useState('');

   /*  const [email, setEmail] = useState('');  */

  return (
    <div className="App">
      <BrowserRouter>
       <UserContext.Provider value={ username }>

       {/* <UserContext.Provider value={ email }> */}

        {/* <SaveUser /> */}
      <Switch>
        {/* <Route path="/" component={ Login } exact /> */}
        <Route path="/" component={ () => <Login update={ setUsername } /> } exact />
        {/* <Route path="/" component={ () => <Login update={ setEmail } /> } exact /> */}
        <Route path="/Profile" component={ Profile } />
        <Route path="/About" component={ About } />
         <Route path="/Menu" component={ Menu } />
         <Route path="/Nav" component={ Nav } />
         <Route path="/Status" component={ Status } />
      </Switch>
      </UserContext.Provider>

     {/*  </UserContext.Provider> */}
        
      </BrowserRouter>
    </div>
  );
}

/* export default App;  */

export { App,  UserContext}