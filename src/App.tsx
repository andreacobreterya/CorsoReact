import React from 'react';
import './App.css';
import FirstClassComponent from './components/FirstClassComponent';
import FirstFuncComponent from './components/FirstFuncComponent';
import UserDetailsC from './components/UserDetailsC';
import UserDetailsF from './components/UserDetailsF';
import User from './models/User';

function App() {
  const welcomeMessage: string = "Benvenuti";

  const handleButton = () => alert("Hello!");
  const handleMessage = (message: string) => alert("Hello " + message);

  const user = new User(
    1,
    "mrossi",
    "EMP-001",
    "ICT"
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <FirstClassComponent 
            title = {"Welcome"} 
            onComplete = {handleButton} />
        </div>
        <div className="col-6">
          <FirstFuncComponent 
            title = {welcomeMessage} 
            onComplete = {handleMessage}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <UserDetailsC user = {user} />
        </div>
        <div className='col-6'>
          <UserDetailsF  user = {user} />
        </div>
      </div>
    </div>
  );
}

export default App;
