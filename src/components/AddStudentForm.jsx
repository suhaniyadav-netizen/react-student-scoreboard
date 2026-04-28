import { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;
    onAdd(name, score);
    setName('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Student name" 
        required 
      />
      <input 
        type="number" 
        value={score} 
        onChange={(e) => setScore(e.target.value)} 
        placeholder="Score (0-100)" 
        min="0" 
        max="100" 
        required 
      />
      <button type="submit" className="btn-add">+ ADD</button>
    </form>
  );
}
export default AddStudentForm;