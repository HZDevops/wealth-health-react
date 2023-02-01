import { useState } from "react";
import { useStore } from "react-redux";
import { states, departments } from "../../data/options";
import { employeeAdded } from "../../actions/employee";
import { Modal } from "@hzdevops/modal-react-library/dist";
import "./EmployeeForm.css";

function EmployeeForm() {
  const store = useStore();

  //Modal state initialisation
  const [isOpen, setModal] = useState(false);

  //Form state initialisation
  /*const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [birthDateValue, setBirthDateValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");*/

  const [formData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  /**
   * Close modal
   * * @param {event} event
   */
  const closeModal = () => {
    setModal(false);
  };

  /**
   * Get the data from the form stored in the state locale,
   * check if the form is valid -> formValidation(),
   * if the form is valid add a new employee to the global state of the application -> add_employee()
   * @param {object} e - 'onSubmit' event type
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      startDate: formData.startDate,
      department: formData.department,
      birthDate: formData.birthDate,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };
    store.dispatch(employeeAdded(newEmployee));
    setModal(true);

    const form = document.getElementById("form-employee");
    form.reset();
  };

  return (
    <div className="create-employee-form">
      <h2>Create Employee</h2>
      <form id="form-employee">
        <div className="form-element">
          <label htmlFor="">FirstName</label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">LastName</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Date of Birth</label>
          <input
            className="formInput"
            type="date"
            name="birthDate"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Start Date</label>
          <input
            className="formInput"
            type="date"
            name="startDate"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <h3>Address</h3>
        <div className="form-element">
          <label htmlFor="">Street</label>
          <input
            className="form-input"
            type="text"
            name="street"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">City</label>
          <input
            className="form-input"
            type="text"
            name="city"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">State</label>
          <select
            className="formSelect"
            name="state"
            onChange={handleAddFormChange}
            required
          >
            <option value=""></option>
            {states.map((state, index) => {
              return (
                <option key={index} value={state.label}>
                  {state.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="">Zip code</label>
          <input
            className="form-input"
            type="number"
            name="zipCode"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <select
            className="formSelect"
            name="department"
            onChange={handleAddFormChange}
            required
          >
            <option value=""></option>
            {departments.map((department, index) => {
              return (
                <option key={index} value={department.label}>
                  {department.label}
                </option>
              );
            })}
          </select>
        </div>
        <button className="save-button" onClick={handleSubmit}>
          Sign In
        </button>
        {isOpen ? (
          <Modal content="Employee Created !" handleResponse={closeModal} />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;
