import { FC } from "react";
import React from "react";

interface RadioOption {
    id: number;
    label: string;
    value: string;
}

interface GenericRadioInput {
    id: number;
    name: string;
    overallLabel: string;
    options: RadioOption[];
    selectedOption: string;
    onChange: (value: string) => void;
}

export const GenericRadioInput: FC<{
    GRI: GenericRadioInput;
}> = ({ GRI }) => {
        const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            GRI.onChange(newValue);
        };

        return (
            <div>
                <label>{GRI.overallLabel}</label>
                {GRI.options.map((option) => (
                    <div key={option.id}>
                        <input
                            type="radio"
                            name={GRI.name}
                            value={option.value}
                            checked={GRI.selectedOption === option.value}
                            onChange={handleRadioChange}
                        />
                        <label>{option.label}</label>
                    </div>
                ))}
            </div>
        );
    };
