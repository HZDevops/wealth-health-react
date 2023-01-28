import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function EmployeeList() {
  return (
    <>
      <NavigationBar page="employeelist" />
      <EmployeeTable />
    </>
  );
}
export default EmployeeList;
