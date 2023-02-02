import { useState } from "react";
import { useStore } from "react-redux";
import Select from "react-select";
import { states, departments } from "../../data/options";
import { employeeAdded } from "../../actions/employee";
import { Modal } from "@hzdevops/modal-react-library/dist";
import "./EmployeeForm.css";

function EmployeeForm() {
  const store = useStore();

  //Modal state initialisation
  const [isOpen, setModal] = useState(false);

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
          <Select
            defaultValue={states[0]}
            options={states}
            onChange={handleAddFormChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Zip code</label>
          <input
            className="form-input"
            type="text"
            name="zipCode"
            minLength="5"
            maxLength="5"
            pattern="[0-9.]+"
            title="Zip code must be 5 digits"
            onChange={handleAddFormChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <Select
            defaultValue={departments[0]}
            options={departments}
            onChange={handleAddFormChange}
          />
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
