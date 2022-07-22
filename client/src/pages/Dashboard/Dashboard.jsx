import { useState } from "react";
import { Result } from "../Result/Result";
export function Dashboard() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (search) => {
    const data = await fetch("/api/setlist/artists/" + search);
    const response = await data.json();
    setResult(response);
  };
  return (
    <div>
      <div className="input-group mt-3 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search SetlistFm"
          aria-label="Search SetlistFm"
          aria-describedby="button-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => fetchData(search)}
        >
          Search
        </button>
      </div>
      <div>{result.length > 0 ? <Result data={result} /> : ""}</div>
    </div>
  );
}
