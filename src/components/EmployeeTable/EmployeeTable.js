import { useSelector } from "react-redux";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

import "./EmployeeTable.css";

function EmployeeTable() {
  const { employeeArray } = useSelector((state) => state.employeeCreation);

  let columns = [
    {
      name: "firstName",
      header: "First Name",
      defaultFlex: 1,
    },
    {
      name: "lastName",
      header: "Last Name",
      defaultFlex: 1,
    },
    {
      name: "startDate",
      header: "Start Date",
      defaultFlex: 1,
    },
    {
      name: "department",
      header: "Department",
      defaultFlex: 1,
    },
    {
      name: "birthDate",
      header: "Date of Birth",
      defaultFlex: 1,
    },
    {
      name: "street",
      header: "Street",
      defaultFlex: 1,
    },
    {
      name: "city",
      header: "City",
      defaultFlex: 1,
    },
    {
      name: "state",
      header: "State",
      defaultFlex: 1,
    },
    {
      name: "zipCode",
      header: "Zip Code",
      defaultFlex: 1,
    },
  ];

  const gridStyle = { minHeight: 250 };

  return (
    <>
      <h2 className="employeeTitle">Current Employees</h2>
      <div className="dataTable">
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          dataSource={employeeArray}
          style={gridStyle}
        />
      </div>
    </>
  );
}

export default EmployeeTable;
