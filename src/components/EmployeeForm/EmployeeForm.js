import { useState } from "react";
import { useStore } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { state_options, department_options } from "../../data/options";
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
  const [birthDateValue, setBirthDateValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");

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
   */
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
  };

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
      birthDate: birthDateValue,
      startDate: startDateValue,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };
    store.dispatch(employeeAdded(formData));
    setModal(true);

    const form = e.target;
    form.reset();
  };

  return (
    <div className="create-employee-form">
      <h2>Create Employee</h2>
      <form className="form-employee" onSubmit={handleSubmit}>
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
          <DatePicker
            className="form-input"
            selected={birthDate}
            placeholderText=" jj / mm / aaaa"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => parseDateValue(date, "birthDate")}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Start Date</label>
          <DatePicker
            className="form-input"
            selected={startDate}
            placeholderText=" jj / mm / aaaa"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => parseDateValue(date, "startDate")}
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
          <Select
            defaultValue={state_options[0]}
            options={state_options}
            onChange={(e) => setState(e.value)}
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Zip code</label>
          <input
            className="form-input"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Department</label>
          <Select
            defaultValue={department_options[0]}
            options={department_options}
            onChange={(e) => setDepartment(e.value)}
          />
        </div>
        <button className="save-button" type="submit">
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
