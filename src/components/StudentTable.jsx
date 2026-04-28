import { useState, useEffect } from 'react';

function StudentRow({ student, onUpdateScore }) {
  const [localScore, setLocalScore] = useState(student.score);
  const isPass = student.score >= 40;

  useEffect(() => {
    setLocalScore(student.score);
  }, [student.score]);

  return (
    <div className="table-row">
      <div className="col-name">{student.name}</div>
      <div className="col-score">{student.score}</div>
      <div className="col-status">
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          <span className="dot"></span> {isPass ? 'PASS' : 'FAIL'}
        </span>
      </div>
      <div className="col-update">
        <input 
          type="number" 
          value={localScore} 
          onChange={(e) => setLocalScore(e.target.value)} 
          className="update-input" 
          min="0" 
          max="100" 
        />
        <button onClick={() => onUpdateScore(student.id, localScore)} className="btn-save">
          SAVE
        </button>
      </div>
    </div>
  );
}

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="col-name">NAME</div>
        <div className="col-score">SCORE</div>
        <div className="col-status">STATUS</div>
        <div className="col-update">UPDATE</div>
      </div>
      <div className="table-body">
        {students.map(student => (
          <StudentRow 
            key={student.id} 
            student={student} 
            onUpdateScore={onUpdateScore} 
          />
        ))}
      </div>
    </div>
  );
}
export default StudentTable;