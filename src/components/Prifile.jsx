import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStatus, updateAge, updateName,updateEmail } from '../reducers/useReducer'
const Prifile = () => {
  const { name, age, city, status,email } = useSelector((state) => {
    console.log(state);
    return state
  })
  //initialze the dispatch
  const dispatch = useDispatch()
  
  const changeAge = (age) => {
    dispatch(updateAge(age))
  }
  const changeName = (name) => {

    dispatch(updateName(name))
  }
  const changestatus = (status) => {
    dispatch(updateStatus(status))
  }

  const changeemail=(email)=>{
    dispatch(updateEmail(email))
  }
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My city is {city}</h1>
      <h1>my fev language is : {status}</h1>
      <h1>my email id is : {email}</h1>

      <button onClick={() => changeAge(40)}>AgeUpdate</button>
      <button onClick={() => changeName('Indra')}>NameUpdate</button>
      <button onClick={() => changestatus('Laravel')}>UpdateStatus</button>
      <button onClick={() => changeemail('Raju@gmail.com')}>UpdateEmail</button>
    </div>
  )
}

export default Prifile
