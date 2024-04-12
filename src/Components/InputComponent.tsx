import React, { Fragment } from "react";

function InputComponent({
  labelName,
  labelForInputId,
  labelClassName,
  inputClassName,
  inputId,
  inputType,
  inputValue,
  onChange,
}: {
  labelName: string;
  labelForInputId: string;
  labelClassName?: string;
  inputClassName?: string;
  inputId: string;
  inputType: "text" | "number" | "email" | "password";
  inputValue?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <Fragment>
      <label htmlFor={labelForInputId} className={`${labelClassName}`}>
        {labelName}
      </label>
      <input
        required
        id={inputId}
        type={inputType}
        value={inputValue}
        onChange={onChange}
        className={`${inputClassName} ${
          inputType === "number"
            ? " [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-black"
            : ""
        } text-black p-0.5`}
      />
    </Fragment>
  );
}

export default InputComponent;
