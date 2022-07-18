import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
export const CreatePlaylistButton = () => {
  return (
    <ListGroup
      variant="flush"
      as="ol"
      className="d-flex justify-content-center align-items-center"
    >
      <ListGroup.Item as="li">
        <Button size="sm" variant="outline-secondary">
          Create playlist
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};
