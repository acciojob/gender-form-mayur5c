
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? null : value);
  };
  console.log(selectedOption);

  return (
    <div>
    <h2>Select your gender:</h2>
      <form>
      <label>
        <input
          type="radio"
          name="option"
          value="Male"
          checked={selectedOption === "Male"}
          onChange={handleCheckboxChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="Female"
          checked={selectedOption === "Female"}
          onChange={handleCheckboxChange}
        />
        Female
      </label>
    

    
      {selectedOption=="Male" ? <div><h2>Select your shirt size:</h2> <select name="size" id="select">
        <option>Select size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select></div> : selectedOption=="Female" ?
      <div><h2>Select your dress size:</h2> <select name="dress">
        <option>Select size</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select></div>:""}
      </form>

    
    </div>
  )
}

export default App
