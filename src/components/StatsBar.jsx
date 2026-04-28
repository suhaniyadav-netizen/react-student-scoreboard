function StatsBar({ total, passed, avg }) {
  return (
    <div className="stats-panel">
      <div className="stat-box">
        <div className="stat-label">TOTAL</div>
        <div className="stat-value">{total}</div>
      </div>
      <div className="stat-box">
        <div className="stat-label">PASSED</div>
        <div className="stat-value">{passed}</div>
      </div>
      <div className="stat-box no-border">
        <div className="stat-label">AVG SCORE</div>
        <div className="stat-value">{avg}</div>
      </div>
    </div>
  );
}
export default StatsBar;