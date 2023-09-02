import React, { FC, useEffect, useState } from "react";

export const Filter: FC<{ onChange: (i: string) => void }> = ({
  onChange,
}) => {
  const [filterUserInput, setFilterUserInput] = useState("");

  useEffect(() => {
    onChange(filterUserInput);
  }, [filterUserInput]);
  return (
    <div>
        <label htmlFor="filter">Filter:</label>
        <input
          value={filterUserInput}
          id="filter"
          onChange={(e) => {
            setFilterUserInput(e.target.value);
          }}
        />
    </div>
  );
};