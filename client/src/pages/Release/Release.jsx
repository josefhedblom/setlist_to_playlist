import { useState, useEffect } from "react";
import ReactMarkdown from "markdown-to-jsx";

export const Release = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    import("../../CHANGELOG.txt").then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((text) => setNotes(text));
    });
  }, []);

  return (
    <div className="release__notes">
      <h1>Release notes</h1>
      <ReactMarkdown className="release">{notes}</ReactMarkdown>
    </div>
  );
};
