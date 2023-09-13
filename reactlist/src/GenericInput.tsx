import React, { FC, useState } from "react";

export interface GenericInput {
  id: number;
  name: string;
  value: string;
  label: string;
  isValid: boolean;
  validationText: string;
  onChange: (value: string) => void;
}

export const GenericTextInput: FC<{
  GI: GenericInput;
}> = ({ GI }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        GI.onChange(newValue);
      };

  return (
    <div>
      <label htmlFor={GI.name} className="form-label">
        {GI.label}
      </label>
      <input
        name={GI.name}
        className={GI.isValid ? "form-control is-valid" : "form-control is-invalid"}
        value={GI.value}
        type="text"
        onChange={handleInputChange}
        required
      />
      <div id={`${GI.name}input`} className={GI.isValid ? "valid-feedback" : "invalid-feedback"}>
        {GI.isValid ? GI.validationText : "Invalid input"}
      </div>
    </div>
  );
};
