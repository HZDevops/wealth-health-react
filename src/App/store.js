import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "../reducers/employee";

export const store = configureStore({
  reducer: {
    employeeCreation: employeeReducer,
  },
});
