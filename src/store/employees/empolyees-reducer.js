import { ALL_EMPLOYEES_FAIL, ALL_EMPLOYEES_REQUEST, ALL_EMPLOYEES_SUCCESS, CLEAR_ERRORS } from "../constants"

const INITIAL_STATE = {
    employees: [],
}


const EmployeesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ALL_EMPLOYEES_REQUEST:
        return {
          loading: true,
          employees: [],
        }
      case ALL_EMPLOYEES_SUCCESS:
        return {
          loading: false,
          employees:action.payload
        }
      case ALL_EMPLOYEES_FAIL:
        return {
          loading: false,
          error: action.payload,
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