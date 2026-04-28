import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', score: 85 },
    { id: 2, name: 'Bob Smith', score: 35 }
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score)
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: Number(newScore) } : student
    ));
  };

  return (
    <div className="app-container">
      <Header title="Academy Scoreboard" />
      <div className="main-content">
        <AddStudentForm onAdd={addStudent} />
        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;