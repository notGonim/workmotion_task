import { ALL_EMPLOYEES_FAIL, ALL_EMPLOYEES_REQUEST, ALL_EMPLOYEES_SUCCESS, CLEAR_ERRORS, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, POST_EMPLOYEE_REQUEST, POST_EMPLOYEE_SUCCESS } from "../constants"

const INITIAL_STATE = {
    employees: [],
}


const EmployeesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ALL_EMPLOYEES_REQUEST:
        case POST_EMPLOYEE_REQUEST:
            return {
                loading: true,
                employees: [],
            }
        case ALL_EMPLOYEES_SUCCESS:
            return {
                loading: false,
                employees: action.payload
            }
        case ALL_EMPLOYEES_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case POST_EMPLOYEE_SUCCESS:
            const employee = action.payload
            return {
                loading: false,
                ...state,
                employees: [...state.employees, employee]
            }
        case DELETE_EMPLOYEE_SUCCESS: 
            const empl = action.payload
            return {
                loading: false,
                ...state,
                employees: state.employees.filter(emp => emp.id !== empl.id)
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

export default EmployeesReducer