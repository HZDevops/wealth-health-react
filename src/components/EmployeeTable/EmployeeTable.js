import { useSelector } from "react-redux";
import { state_options, department_options } from "../../data/options";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "./EmployeeTable.css";

function EmployeeTable() {
  const { employeeArray } = useSelector((state) => state.employeeCreation);

  let columns = [
    {
      name: "firstname",
      header: "First Name",
      defaultFlex: 2,
    },
    {
      name: "lastname",
      header: "Last Name",
    },
    {
      name: "startDate",
      header: "Start Date",
    },
    {
      name: "department",
      header: "Department",
    },
    {
      name: "dateOfBirth",
      header: "Date of Birth",
    },
    {
      name: "street",
      header: "Street",
    },
    {
      name: "city",
      header: "City",
    },
    {
      name: "state",
      header: "State",
    },
    {
      name: "zipCode",
      header: "Zip Code",
    },
  ];

  const gridStyle = { minHeight: 550 };

  return (
    <div className="dataTable">
      <h1 className="employeeTitle">Current Employees</h1>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={employeeArray}
        style={gridStyle}
      />
    </div>
  );
}

export default EmployeeTable;
