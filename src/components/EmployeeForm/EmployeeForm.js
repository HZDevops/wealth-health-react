import { useState } from "react";
import { useStore } from "react-redux";
import { states, departments } from "../../data/options";
import { employeeAdded } from "../../actions/employee";
import { Modal } from "@hzdevops/modal-react-library/dist";
import "./EmployeeForm.css";

function EmployeeForm() {
  const store = useStore();

  //Form state initialisation
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  //Input validation state initialisation
  const [error, setError] = useState(true);

  //Form validation state initialisation
  const [isValid, setValidation] = useState(false);

  //Modal state initialisation
  const [isOpen, setModal] = useState(false);

  /**
   * Handle and validate user inputs
   * @param {object} e - 'onClick' event type
   */
  const handleChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,

      [e.target.name]: value,
    });
    validateInput(e);
    if (
      !error &&
      state.firstName &&
      state.lastName &&
      state.birthDate &&
      state.startDate &&
      state.street &&
      state.city &&
      state.state &&
      state.zipCode &&
      state.department
    ) {
      setValidation(true);
    }
  };

  /**
   * Check if user inputs match with pattern
   * @param {object} e - 'onClick' event type
   */
  const validateInput = (e) => {
    if (e.target.validity.patternMismatch) {
      setError(false);
    }
  };

  /**
   * Close modal
   */
  const closeModal = () => {
    setModal(false);
  };

  /**
   * Get the data from local state,
   * check if the form is valid
   * before adding the new employee to the global state of the application
   * @param {object} e - 'onClick' event type
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      birthDate: state.birthDate,
      startDate: state.startDate,
      street: state.street,
      city: state.city,
      state: state.state,
      zipCode: state.zipCode,
      department: state.department,
    };
    if (isValid) {
      store.dispatch(employeeAdded(formData));
      setModal(true);

      const form = document.getElementById("form-employee");
      form.reset();
    }
  };

  return (
    <div className="create-employee-form">
      <h2>Create Employee</h2>
      <form id="form-employee">
        <div className="form-element">
          <label htmlFor="">First Name</label>
          <input
            className="form-input"
            type="text"
            minLength="2"
            pattern="^[a-zA-ZÀ-ú\-\s]*"
            placeholder="Ex: Julien"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Last Name</label>
          <input
            className="form-input"
            type="text"
            minLength="2"
            pattern="^[a-zA-ZÀ-ú\-\s]*"
            placeholder="Ex: Martin"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Date of Birth</label>
          <input
            className="formInput"
            type="date"
            name="birthDate"
            value={state.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Start Date</label>
          <input
            className="formInput"
            type="date"
            name="startDate"
            value={state.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <h3>Address</h3>
        <div className="form-element">
          <label htmlFor="">Street</label>
          <input
            className="form-input"
            type="text"
            placeholder="Ex: 455 Larkspur Dr."
            pattern="^[a-zA-Z0-9À-ú\-\s]{5,30}"
            name="street"
            value={state.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">City</label>
          <input
            className="form-input"
            type="text"
            pattern="^[a-zA-ZÀ-ú\-\s]*"
            placeholder="Ex: California Springs"
            name="city"
            value={state.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">State</label>
          <select
            className="form-select"
            name="state"
            value={state.state}
            onChange={handleChange}
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
            type="text"
            placeholder="Ex: 93207"
            value={state.zipCode}
            name="zipCode"
            pattern="[0-9]{5}"
            title="Zip code must be 5 digits"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <select
            className="form-select"
            name="department"
            onChange={handleChange}
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
        <button
          className="save-button"
          disabled={!isValid}
          onClick={handleSubmit}
        >
          Save
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
