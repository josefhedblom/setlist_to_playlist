import Container from "react-bootstrap/Container";
import { FormatResult } from "./FormatResult";

export const Result = ({ data }) => {
  return (
    <Container>
      {data.map((show, index) => {
        return <FormatResult key={index} data={show} />;
      })}
    </Container>
  );
};
