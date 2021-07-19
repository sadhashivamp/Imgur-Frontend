import React, { useState } from 'react'
import Movies from './Movies/Movies.js'
import './App.css';

const App = () => {
    const [data, setData] = useState({
      username : '',
      password : '',
    })
    const {username, password} = data;
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
      e.preventDefault()
      console.log(data)
    }
  return (
    <div class = "container">
      <center>
      <h1>Welcome To Movies Section</h1>
        <form onSubmit={submitHandler}> 
            <input type ="text" name = "username" placeholder="Enter Username" value = {username} onChange = {changeHandler}  /> <br />
            <input type ="text" name = "password" placeholder="Enter Password" value = {password} onChange = {changeHandler} /> <br />
            <button type="submit">Login</button>
        </form>
      </center>
      <Movies />
      </div>
  );
}
export default App;
