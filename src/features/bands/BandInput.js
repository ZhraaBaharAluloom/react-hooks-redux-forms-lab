import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">add band</button>
      </form>
    </div>
  );
}

export default BandInput;
