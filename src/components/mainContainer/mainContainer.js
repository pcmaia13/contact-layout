import './mainContainer.css'

import React, { useState } from 'react';



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário válido, enviando dados:', formData);
      
      alert('redirecting to github')
      window.location.replace('https://github.com/pcmaia13')
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = alert("name is required");
    }
    if (!data.email.trim()) {
      alert("email is required")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errors.email = alert("email is required");
    }
    return errors;
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "rgb(221, 215, 215)"
  }

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "rgb(165, 141, 89)"
  }

  const handleeMouseOver = (e) => {
    e.target.style.backgroundColor = "rgb(221, 215, 400)"
  }

  const handleeMouseOut = (e) => {
    e.target.style.backgroundColor = "rgb(221, 215, 215)"
  }

  return (
    <div className="container">
    
    <div className='ajustify-container'>

        <div>
            <img className="image" src='./ilustration.png' alt=""></img>
        </div>

      <form className='form' onSubmit={handleSubmit}>

        <div className='title-edit'>
          <h1>CONTACT US</h1>
        </div>

        <div>
          <input 
          className='name' 
          type="text" 
          id="name" 
          name="name" 
          placeholder='Name' 
          value={formData.name} 
          onChange={handleChange} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
          {errors.name && <div>{errors.name}</div>}
        </div>
        <div>
          <input 
          className='email' 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Email' 
          value={formData.email} 
          onChange={handleChange} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <input 
          className='text' 
          id="message" 
          name="message" 
          placeholder='menssage' 
          value={formData.message} 
          onChange={handleChange} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
        </div>
        <button 
        type="submit" onMouseOver={handleeMouseOver} onMouseOut={handleeMouseOut}>Submit</button>
      </form>
    </div>
    <div>
      <p className='text-edit'>
        welcome to "Nature" your prefer spa, we have different options of treatments to you,
        so contact us, if you want do a visit
      </p>
    </div>
    </div>
  );
};

export default Form;
