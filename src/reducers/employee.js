import { employeeState, employeeAdded } from "../actions/employee";

// Reducer
export function employeeReducer(state = employeeState, action) {
  if (action.type === employeeAdded.toString()) {
    return {
      ...state,
      employeeArray: state.employeeArray.concat(action.payload),
    };
  }
  return state;
}
