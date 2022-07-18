import Accordion from "react-bootstrap/Accordion";
import { CreatePlaylistButton } from "./CreatPlaylistButton";
import { SetListItem } from "./SetListItem";

const titles = ["Låt 1", "Låt 2", "Låt 3", "Låt 4", "Låt 5"];
export const FormatResult = ({ title }) => {
  return (
    <Accordion className="mt-3 mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <CreatePlaylistButton />
          <SetListItem data={titles} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
