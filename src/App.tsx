import React, { useState } from 'react';
import './App.css';
import ClassFormComponent from './components/ClassFormComponent';
import FirstClassComponent from './components/FirstClassComponent';
import FirstFuncComponent from './components/FirstFuncComponent';
import FormComponent from './components/FormComponent';
import LifecycleFuncComponent from './components/LifecycleFuncComponent';
import UserDetailsC from './components/UserDetailsC';
import UserDetailsF from './components/UserDetailsF';
import UsersList from './components/UsersList';
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

  const users: User[] = [
    user,
    new User(2, "pbianchi", "EMP-002", "Finance"),
    new User(3, "lverdi", "EMP-003", "R&D")
  ];

  const [ visibility, setVisibility ] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          {/* <ClassFormComponent /> */}
          <FormComponent />
        </div>
      </div>
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
      <div className='row'>
        <div className='col-8'>
          <UsersList users = {users}>
            <h1>iCubed Black List</h1>
          </UsersList>
        </div>
        <div className='col-4'>
          <button onClick={_ => setVisibility(!visibility)}>Toggle Lifecycle Component</button>
          { 
            visibility &&
              <LifecycleFuncComponent />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
