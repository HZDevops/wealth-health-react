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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");

  /**
   * Close modal
   * * @param {event} event
   */
  const closeModal = () => {
    setModal(false);
  };
  /** 
   * Parse the date into a string with a specific format
   * @param {Object} date - date selected on the Create Employee form
   * @param {String} option - option related the date field form :birthDate or startDate
   *
  const parseDateValue = (date, option) => {
    const regexDate = new RegExp(/(^..........)/);
    const dateParsed = date.toISOString().match(regexDate)[0];
    if (option === "birthDate") {
      setBirthDateValue(dateParsed);
      setBirthDate(date);
    } else if (option === "startDate") {
      setStartDateValue(dateParsed);
      setStartDate(date);
    }
  };*/
  /**
   * Get the data from the form stored in the state locale,
   * check if the form is valid -> formValidation(),
   * if the form is valid add a new employee to the global state of the application -> add_employee()
   * @param {object} e - 'onSubmit' event type
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };
    store.dispatch(employeeAdded(formData));
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">LastName</label>
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Date of Birth</label>
          <input
            className="formInput"
            type="date"
            name="birthDate"
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Start Date</label>
          <input
            className="formInput"
            type="date"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <h3>Address</h3>
        <div className="form-element">
          <label htmlFor="">Street</label>
          <input
            className="form-input"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">City</label>
          <input
            className="form-input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">State</label>
          <select
            className="form-select"
            name="state"
            onChange={(e) => setState(e.target.value)}
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
            value={zipCode}
            minLength="5"
            maxLength="5"
            pattern="[0-9.]+"
            title="Zip code must be 5 digits"
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <select
            className="form-select"
            name="department"
            onChange={(e) => setDepartment(e.target.value)}
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
