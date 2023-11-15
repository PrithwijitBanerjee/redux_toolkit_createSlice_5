//it is a function and it access state and action 
import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "pritam",
    age: "26",
    status: "Programmer",
    city: "kolkata",
    email:"pritam@gmail.com"
}
const userSlice = createSlice({
    name: "user", 
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
        updateAge(state, action) {
            state.age = action.payload
        },
        updateStatus(state, action) {
            state.status = action.payload
        },
        updateEmail(state, action) {
            state.email = action.payload
        },
    } 
})

export const { updateStatus, updateAge, updateName,updateEmail } = userSlice.actions
export default userSlice.reducer

