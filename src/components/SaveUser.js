import { useContext } from 'react';
/* import { UserContext } from '../views/login/Login.js'; */
import { UserContext } from '../views/login/Login.js'; // app



function SaveUser() {
  const username = useContext(UserContext); //
  /* const email = useContext(UserContext);  */
  
  console.log(username);
  return (
    <article>
      <h2>Användarnamn: { username }</h2>
     {/*  <h2>Användarnamn: { email }</h2> */}
    </article>
  )
}

export default SaveUser