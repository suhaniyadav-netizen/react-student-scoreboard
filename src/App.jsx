import { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Suhani Yadav', score: 99 },
    { id: 2, name: 'Prabhat Bhatia', score: 85 }
  ]);

  const [theme, setTheme] = useState('dark');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score: Number(score) }]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => s.id === id ? { ...s, score: Number(newScore) } : s));
  };

  const toggleSelection = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedIds.length === students.length && students.length > 0) {
      setSelectedIds([]); 
    } else {
      setSelectedIds(students.map(s => s.id)); 
    }
  };

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 ? Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / total) : 0;

  return (
    <div className="app-wrapper">
      <div className="theme-toggle-container">
        <button className="minimal-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <Header />
      
      <div className="panel">
        <div className="panel-title">
          <span className="dot"></span> REGISTER STUDENT
          <span className="right-text">NEW ENTRY</span>
        </div>
        <AddStudentForm onAdd={addStudent} />
      </div>

      <StatsBar total={total} passed={passed} avg={avg} />

      <div className="panel">
        <div className="panel-title">
          <span className="dot" style={{opacity: 0}}></span> STUDENT RECORDS
          <span className="right-text">
            {selectedIds.length > 0 ? `${selectedIds.length} SELECTED` : `${total} ENTRIES`}
          </span>
        </div>
        <StudentTable 
          students={students} 
          onUpdateScore={updateScore} 
          selectedIds={selectedIds}
          onToggleSelection={toggleSelection}
          onToggleAll={toggleAll}
        />
      </div>
    </div>
  );
}

export default App;