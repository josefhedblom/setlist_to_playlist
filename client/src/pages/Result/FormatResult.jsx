import Accordion from "react-bootstrap/Accordion";
import { CreatePlaylistButton } from "./CreatPlaylistButton";
import { SetListItem } from "./SetListItem";

export const FormatResult = ({ data }) => {
  if (data.set.length > 0) {
    return (
      <Accordion className="mt-3 mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {data.artist} || {data.venue} {data.eventDate}
          </Accordion.Header>
          <Accordion.Body>
            <CreatePlaylistButton data={data} />
            <SetListItem data={data} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
};
