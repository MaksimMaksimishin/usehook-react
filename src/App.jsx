import React from 'react';
import useLocalStorage from './useLocalStorage';
import useToggle from './useToggle';
import './style.css';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [isToggled, toggle] = useToggle(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = () => {
    setName('');
    setAge('');
    setEmail('');
    toggle(false);
    localStorage.clear(); // Очистка localStorage
  };

  return (
    <div className="container">
      <h1>Hello, {name || 'Stranger'}!</h1>
      <div className="input-field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="input-field">
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="input-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button className="toggle-button" onClick={toggle}>
        {isToggled ? 'Hide Details' : 'Show Details'}
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset Data
      </button>
      {isToggled && (
        <div className="details">
          <p>Additional details:</p>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default App;