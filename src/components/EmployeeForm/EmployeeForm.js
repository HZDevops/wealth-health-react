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
    state: states[0].label,
    zipCode: "",
    department: departments[0].label,
  });

  //Modal state initialisation
  const [isOpen, setModal] = useState(false);

  //Validation form state initialisation
  const [isValid, setValidation] = useState(false);

  /**
   * Handle user input and store in local state
   * @param {object} e - 'onClick' event type
   */
  const handleChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,

      [e.target.name]: value,
    });
    validateForm();
  };

  /**
   * Handle form validation
   */
  const validateForm = () => {
    const input = document.getElementsByClassName("form-input");
    const select = document.getElementsByClassName("form-select");

    if (
      input[0].validationMessage === "" &&
      input[1].validationMessage === "" &&
      input[2].validationMessage === "" &&
      input[3].validationMessage === "" &&
      input[4].validationMessage === "" &&
      select[0].value &&
      select[1].value
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  /**
   * Close modal
   */
  const closeModal = () => {
    setModal(false);
  };

  /**
   * Get the data from local state and add to the global state of the application
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

    store.dispatch(employeeAdded(formData));
    setModal(true);
    setState({
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      street: "",
      city: "",
      state: states[0].label,
      zipCode: "",
      department: departments[0].label,
    });
    setValidation(false);
  };

  return (
    <div className="create-employee-form">
      <h2>Create Employee</h2>
      <form id="form-employee">
        <div className="form-element">
          <label htmlFor="">First Name</label>
          <input
            aria-label="The first name"
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
            aria-label="The last name"
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
            aria-label="The date of birth"
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
            aria-label="The job starting date"
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
            aria-label="The address"
            className="form-input"
            type="text"
            placeholder="Ex: 455 Larkspur Dr."
            name="street"
            value={state.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">City</label>
          <input
            aria-label="The city"
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
            aria-label="The state"
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
            aria-label="The zip code"
            className="form-input"
            type="text"
            placeholder="Ex: 93207"
            value={state.zipCode}
            name="zipCode"
            pattern="^[0-9]{5}(?:-[0-9]{4})?$"
            title="Zip code must be 5 digits"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <select
            aria-label="The department"
            className="form-select"
            name="department"
            value={state.department}
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
          aria-label="Save employee"
          className="save-button"
          disabled={!isValid}
          onClick={handleSubmit}
        >
          Save
        </button>
        {isOpen ? (
          <Modal
            content={"Employee Created !"}
            buttonStyle={{ backgroundColor: "#708622", color: "white" }}
            handleResponse={closeModal}
          />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;
