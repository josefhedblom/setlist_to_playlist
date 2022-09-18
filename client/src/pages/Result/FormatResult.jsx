import { CreatePlaylistButton } from "./CreatPlaylistButton";
import { SetListItem } from "./SetListItem";

export const FormatResult = ({ data }) => {
  if (data.set.length > 0) {
    return (
      <div className="accordion__box">
        <input
          type="checkbox"
          name="example_accordion"
          id="section1"
          className="accordion__input"
        />
        <label for="section1" className="accordion__label">
          {data.artist} - {data.venue} - {data.eventDate}
        </label>
        <SetListItem data={data} />
      </div>
    );
  }
};
