import { FC } from "react";

export interface GenericSelectInput {
    id: number;
    name: string;
    value: string;
    label: string;
    option: string[];
    onChange: (value: string) => void;
}

export const GenericSelectInput: FC<{
    GSI: GenericSelectInput;
  }> = ({ GSI }) => {
      const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const newValue = e.target.value;
          GSI.onChange(newValue);
        };
  
    return (
      <div>
        <label htmlFor={GSI.name} className="form-label">
          {GSI.label}
        </label>
        <select
          name={GSI.name}
          className={"form-control"}
          value={GSI.value}
          onChange={handleInputChange}
        >
          {GSI.option.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}  
        </select>
      </div>
    );
  };
  