import { FormatResult } from "./FormatResult";

export const Result = ({ data }) => {
  return (
    <section className="accordion">
      {data.map((show, index) => {
        return <FormatResult key={index} data={show} />;
      })}
    </section>
  );
};
