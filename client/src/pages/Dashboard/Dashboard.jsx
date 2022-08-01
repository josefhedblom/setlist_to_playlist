import { useState } from "react";
import { Result } from "../Result/Result";
export function Dashboard() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (search) => {
    try {
      const data = await fetch("/api/setlist/artists/" + search);
      if (data.status === 429) {
        setError(data.statusText);
      }
      const response = await data.json();
      setResult(response);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(search);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search SetlistFm"
            aria-label="Search SetlistFm"
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-md btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      <div>
        {result.length > 0 && error.length < 1 ? (
          <Result data={result} />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
