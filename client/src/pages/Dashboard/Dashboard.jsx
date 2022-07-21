export function Dashboard() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search SetlistFm"
        aria-label="Search SetlistFm"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
}
