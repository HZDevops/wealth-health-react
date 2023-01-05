import { createAction } from "@reduxjs/toolkit";
//State employees Initialisation
export const employeeState = {
  employeeArray: [],
};
// Action creator
/*export const employeeInitialised = createAction(
  "EMPLOYEE_INIT",
  (employee) => ({
    payload: employee,
  })
);*/
export const employeeAdded = createAction("EMPLOYEE_ADDED", (newEmployee) => ({
  payload: newEmployee,
}));
