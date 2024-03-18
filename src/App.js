import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/nav';

function App() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login with:', state.email, state.password);
    
    setState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav className="navbar">
            <ul>
              <li><a href='#'>HOME</a></li>
              <li><a href='#'>SETTINGS</a></li>
              <li><a href='#'>HELP</a></li>
            </ul>
          </nav>
        </div>
        <h3 className= "App-border">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className= "container">
            <div className="form-control">
              <label>Username</label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <button type="submit">Login</button>
            </div>
           </div> 
        </form>
      </header>
    </div>
  );
}

export default App;