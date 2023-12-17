import React, {useEffect, useState} from "react";






const CreateAccount  = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    return (
        <div className="App">
        <label>Username:</label>
        <input 
          type="text" 
          name="usernameInput" 
          id="usernameInput" 
          value={username} 
          onChange={(event) => setUsername(event.target.value)} 
        />
  
        <label>Email:</label>
        <input 
          type="email" 
          name="emailInput" 
          id="emailInput" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="passwordInput" 
          id="passwordInput" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} 
        />

        
        
        <button onClick={() => {CreateAccount(username, password)}}>
          Log In
        </button>
  
      </div>
    )
}

export default CreateAccount;
