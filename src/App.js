import styled from "styled-components"
import './App.css';
import { signInWithGoogle, auth } from "./firebase"
import { useState } from "react";
function App() {

  // Here we are using the useState hook to store the userName, If we dont use state to save the userName then the dom is not gonna re render even if we change the userName 
  const [userName, setUsername] = useState(null);

  // Then we have handleAuth to manage the login and logout 
  const handleAuth = () => {

    // Here if username is null we are calling the signInWithGoogle method 
    if (!userName) {
      signInWithGoogle().then( result => setUser(result.user)).catch(err => prompt(err.message))
    }
    // If userName is present then we are calling the signOut method 
    else {
      auth.signOut().then(() => setUsername(null)).catch(err => prompt(err.message))
    }
  }

  // Set User is used to change the userName state by passing the value comming from the UserObj comming through firebase auth 
  const setUser = (userObj) => {
    setUsername(userObj.displayName)
  }

  // Here I have created two styled components NavBar and LoginBtn 
  return (
    <div className="App">
      <NavBar>
        {!userName ? <h2>firebase Auth</h2> : <h2>{userName}</h2>}
        <LoginBtn onClick={handleAuth}>
          {!userName ? "Login" : "Logout"}
        </LoginBtn>
      </NavBar>
    </div>
  );
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LoginBtn = styled.a`
    text-decoration: none;
    border: 1px solid black;
    padding: .5rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s ease-out;
    margin:10px;
    &:hover {
      background: black;
      color: white;

    }
`;

export default App;
