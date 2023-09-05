import React, { FC, useEffect, useState } from "react";

export const Filter: FC<{ onChange: (i: string) => void }> = ({
  onChange,
}) => {
  const [filterUserInput, setFilterUserInput] = useState("");

  useEffect(() => {
    onChange(filterUserInput);
  }, [filterUserInput]);
  return (
    <div className="mb-3 row">
        <label htmlFor="filter" className="col-sm-2 col-form-label">Filter:</label>
        <div className="col-sm-8">
          <input className="form-control"
            value={filterUserInput}
            id="filter"
            onChange={(e) => {
              setFilterUserInput(e.target.value);
            }}
            />
        </div>
    </div>
  );
};