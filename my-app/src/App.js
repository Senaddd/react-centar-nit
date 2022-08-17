import React, { useState } from "react";
import "./App.css";

export default function App() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [hobi, setHobi] = React.useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    hobi: "",
    password: "",
  })  

  return (
    <div className="card-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formValues);
          console.log(`NAME: ${formValues.name}, EMAIL: ${formValues.email}, HOBI: ${formValues.hobi}, PASSWORD: ${formValues.password}`);
        }}
      >
        <label htmlFor="html">Name</label>
        <input
          type="text"
          id="html"
          name="fav_language"
          
          value={formValues.name}
          onChange={(e) => setFormValues(prev => ({
            ...prev,
            name: e.target.value,
          }))}
        />
        <br />
        <label htmlFor="css">Email</label>
        <input
          type="text"
          id="css"
          name="fav_language"
          value={formValues.email}
          onChange={(e) => setFormValues(prev => ({
            ...prev,
            email: e.target.value,
          }))}
        />
        <br />
        <label htmlFor="javascript">Hobi</label>
        <input
          type="text"
          id="javascript"
          name="fav_language"
          value={formValues.hobi}
          onChange={(e) => setFormValues(prev => ({
            ...prev,
            hobi: e.target.value,
          }))}
        />
        <label htmlFor="javascript">passwordd</label>
        <input className="pass"
          type="password"
          id="html"
          name="fav_language"
          value={formValues.password}
          onChange={(e) => setFormValues(prev => ({
            ...prev,
            password: e.target.value,
          }))}
        />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
}

