import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("Role");

  const validEmail = validateEmail(email) !== null ? validateEmail(email).at(0) : "";

  const getIsFormValid = () => {
    // Implement this function
    return (firstName.length !== 0 && validEmail.length !== 0 && password.value.length === 8 && role === "individual" || role === "business") ? false : true;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({value: "", isTouched: false});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input type="text" placeholder="First name" value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input type="text" placeholder="Last name" value={lastName} 
            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input type="text" placeholder="Email address" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value} 
            onChange={(e) => setPassword((prevState) => ({
                  ...prevState,
                  value: e.target.value,
                  isTouched: e.target.value.length > 8 ? true : false 
              })
            )}/>
           {/* password validation */}
            {
              password.isTouched ? (<PasswordErrorMessage/>) : (<p className="FieldError"></p>)
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
