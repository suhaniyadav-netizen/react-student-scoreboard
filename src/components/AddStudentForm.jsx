import { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!name.trim() || score === '') return;
    
    onAdd(name, score);
    
    // Clear form after submission
    setName('');
    setScore('');
  };

  return (
    <div className="form-card">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="input-group">
          <label htmlFor="name">Student Name</label>
          <input 
            type="text" 
            id="name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g., John Doe"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="score">Initial Score</label>
          <input 
            type="number" 
            id="score"
            value={score} 
            onChange={(e) => setScore(e.target.value)} 
            placeholder="0 - 100"
            min="0"
            max="100"
            required 
          />
        </div>
        <button type="submit" className="btn-add">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;