import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
export const SetListItem = ({ data }) => {
  return (
    <ListGroup variant="flush" as="ol" numbered>
      {data.set.map(({ song }) => {
        return song.map((songs, index) => {
          return (
            <ListGroup.Item key={index} as="li">
              {songs.name}{" "}
              <Button size="sm" variant="outline-secondary">
                Add to playlist
              </Button>
            </ListGroup.Item>
          );
        });
      })}
    </ListGroup>
  );
};
