import React from "react";
import InputDefault from "./defaultInput";

const PasswordInput = (props: {
  value: any;
  error: any;
  touch?: boolean;
  label?: string;
  name?: string;
  onChange: Function;
  isRequired?: boolean;
}) => {
  const name = props.name || "password";

  return (
    <InputDefault
    touch={props.touch || false}
      type="password"
      label={props.label || "Password"}
      name={name}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      isRequired={props.isRequired}
    />
  );
};

export default PasswordInput;
