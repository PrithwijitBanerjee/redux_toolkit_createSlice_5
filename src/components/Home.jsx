import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from '../reducers/useReducer'

const Home = () => {

    const { name } = useSelector((state) => {
        console.log(state);
        return state
    })
    const dispatch = useDispatch()

    const UpdateName = (name) => {

        dispatch(updateName(name))
    }

    return (
        <div>
            <h1>This is Home Componenet</h1>
            <h1>my name is {name}</h1>
            <button onClick={() => UpdateName('Tapas')}>update name</button>
        </div>
    )
}

export default Home
