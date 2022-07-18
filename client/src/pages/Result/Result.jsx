import Container from "react-bootstrap/Container";
import { FormatResult } from "./FormatResult";

export const Result = ({ data }) => {
  return (
    <Container>
      {data.map((title, index) => {
        return <FormatResult title={title} key={index} />;
      })}
    </Container>
  );
};
