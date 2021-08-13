import { combineReducers } from 'redux'
import EmployeesReducer from './employees/empolyees-reducer'

const rootReducer = combineReducers({
    employees: EmployeesReducer,
})

export default rootReducer
