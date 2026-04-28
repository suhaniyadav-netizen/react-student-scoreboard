// Reusable StudentRow component
function StudentRow({ student, onUpdateScore }) {
  // Determine pass/fail status (Score >= 40 is Pass)
  const isPass = student.score >= 40;
  const statusText = isPass ? 'Pass' : 'Fail';
  const statusClass = isPass ? 'status-pass' : 'status-fail';

  return (
    <tr>
      <td className="student-name">{student.name}</td>
      <td>
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          className="score-input"
          min="0"
          max="100"
        />
      </td>
      <td>
        <span className={`status-badge ${statusClass}`}>
          {statusText}
        </span>
      </td>
    </tr>
  );
}

// Main Table Component
function StudentTable({ students, onUpdateScore }) {
  if (students.length === 0) {
    return <p className="empty-state">No students added yet. Add one above!</p>;
  }

  return (
    <div className="table-container">
      <h2>Current Roster</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdateScore={onUpdateScore} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;