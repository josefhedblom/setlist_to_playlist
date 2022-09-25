import { useId } from "react";
import { SetListItem } from "./SetListItem";

export const FormatResult = ({ data }) => {
  const sectionId = useId();
  if (data.set.length > 0) {
    return (
      <div className="accordion__box">
        <input
          type="checkbox"
          name="example_accordion"
          id={sectionId}
          className="accordion__input"
        />
        <label for={sectionId} className="accordion__label">
          {data.artist} - {data.venue} - {data.eventDate}
        </label>
        <SetListItem data={data} />
      </div>
    );
  }
};
