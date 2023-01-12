import { createAction } from "@reduxjs/toolkit";

//State employees Initialisation
export const employeeState = {
  employeeArray: [],
};

export const employeeAdded = createAction("EMPLOYEE_ADDED", (newEmployee) => ({
  payload: newEmployee,
}));
