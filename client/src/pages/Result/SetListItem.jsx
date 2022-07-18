import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
export const SetListItem = ({ data }) => {
  return (
    <ListGroup variant="flush" as="ol" numbered>
      {data.map((title, index) => {
        return (
          <ListGroup.Item key={index} as="li">
            {title}{" "}
            <Button size="sm" variant="outline-secondary">
              Add to playlist
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
