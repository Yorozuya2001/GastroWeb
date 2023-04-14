import React from "react";

const DietsCheckbox = ({ name }) => {
  let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <label>
      <input type="checkbox" name="preferencias" value={name} />
      {capitalizeName}
    </label>
  );
};

export default DietsCheckbox;
