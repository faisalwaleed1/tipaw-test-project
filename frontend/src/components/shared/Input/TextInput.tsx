import InputDefault from "./defaultInput";

const TextInput = (props: {
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

  return (
    <InputDefault
      isReadOnly={props.isReadOnly}
      touch={props.touch || false}
      type="text"
      placeholder={props.placeholder || ""}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      isRequired={props.isRequired}
    />
  );
};

export default TextInput;
