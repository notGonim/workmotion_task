import axios from 'axios'
import { ALL_EMPLOYEES_REQUEST, ALL_EMPLOYEES_SUCCESS } from '../constants'

//getting all employees from https://jsonplaceholder.typicode.com/users
export const getEmployees = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_EMPLOYEES_REQUEST,
        })
        const url = 'https://jsonplaceholder.typicode.com/users'
        let data =await axios.get(url)
        console.log(data)
        dispatch({
            type: ALL_EMPLOYEES_SUCCESS,
            payload: data.data,
        })

    } catch (err) {
        console.log(err)
    }
}




//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_ERRORS',
    })
}