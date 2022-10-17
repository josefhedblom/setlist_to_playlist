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
    setSearch("");
  };
  return (
    <>
      <section id="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            placeholder="Artist or band"
            autocomplete="off"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </section>
      <>{result.length > 0 && error.length < 1 ? <Result data={result} /> : <p>{error}</p>}</>
    </>
  );
}
