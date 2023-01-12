import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function EmployeeList() {
  const { employeeArray } = useSelector((state) => state.employeeCreation);

  useEffect(() => {
    if (employeeArray) {
      console.log(employeeArray);
    }
  });
  return (
    <>
      <NavigationBar page="employeelist" />
      <EmployeeTable />
    </>
  );
}
export default EmployeeList;
