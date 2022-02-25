import InputDefault from "./defaultInput";

const PhoneInput = (props: {
  value?: any;
  error?: any;
  name: string;
  touch?: boolean;
  label: string;
  maxLength?: number;
  placeholder?: string;
  isReadOnly?: boolean;
  onChange: Function;
  isRequired?: boolean;
}) => {
  const name = props.name || "phone";

  return (
    <InputDefault
      touch={props.touch || false}
      type="text"
      label={props.label || "Phone Number"}
      name={name}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      isReadOnly={props.isReadOnly}
      isRequired={props.isRequired}
    />
  );
};

export default PhoneInput;
