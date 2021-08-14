import axios from 'axios'
import { ALL_EMPLOYEES_REQUEST, ALL_EMPLOYEES_SUCCESS, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, POST_EMPLOYEE_REQUEST, POST_EMPLOYEE_SUCCESS } from '../constants'

//getting all employees from https://jsonplaceholder.typicode.com/users
export const getEmployees = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_EMPLOYEES_REQUEST,
        })
        const url = 'https://jsonplaceholder.typicode.com/users'
        let data = await axios.get(url)
        dispatch({
            type: ALL_EMPLOYEES_SUCCESS,
            payload: data.data,
        })

    } catch (err) {
        console.log(err)
    }
}



//Post employee to https://jsonplaceholder.typicode.com/users
export const addEmployee = ({ name, username, email, address, phone, company }) => async (dispatch) => {
    try {
        dispatch({
            type: POST_EMPLOYEE_REQUEST,
        })
        const url = `https://jsonplaceholder.typicode.com/users`
        const data = {
            "name": name,
            "username": username,
            "email": email,
            "address": {
                "street": address
            },
            "phone": phone,
            "company": {
                "name": company
            }
        }
        const postData = await axios.post(url, data)

        dispatch({
            type: POST_EMPLOYEE_SUCCESS,
            payload: postData.data
        })

    } catch (err) {
        console.log(err)
    }
}

//Delete employee to https://jsonplaceholder.typicode.com/users
export const DeleteEmployee = (id) => async (dispatch) => {
    try {
      
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        //  await axios.delete(url)
        const data = await axios.get(url)
        console.log(data)
        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS,
            payload: data.data
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