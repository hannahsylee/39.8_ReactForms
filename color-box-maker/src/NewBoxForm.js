import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: '',
    width: '',
    height: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="backgroundColor">Color:</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="Background Color"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>

      <button>Add Box</button>
    </form>
  )

}

export default NewBoxForm;


