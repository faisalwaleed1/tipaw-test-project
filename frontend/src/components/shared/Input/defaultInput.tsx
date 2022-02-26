import styled from "@emotion/styled";
import { mq, theme } from 'styles/theme';
import { spacing } from 'styles/theme/units';

const getBorderColor = (props: {
  error: boolean;
  default?: string;
}) => {
  return props.error ? theme.palette.error.main : theme.color.borderColor;
};

const InputContainer = styled.section({
  marginBottom: '15px',
  verticalAlign: 'top',
  width: 'calc( 100% - 0px )',
  display: 'block',
})

const Required = styled.section({
  color: theme.palette.error.main,
  marginLeft: "6px",
  display: "inline-block",
})

const Label = styled.label({
  marginBottom: "6px",
  textAlign: 'left',
  fontWeight: 600,
  color: theme.color.borderColor,
  fontSize: '14px',
});

const Input = styled.input<{ error: boolean; }>`
  width: -webkit-fill-available;
  padding: 7px 42px 7px 12px;
  font-size: 16px;
  background: white;
  color: rgb(112, 112, 112) !important;
  border: ${({ error }) =>
  `2px solid ${getBorderColor({ error })}`};
  border-color: rgb(255, 69, 62)
  :focus {
    & + div {
      border-color: "#523178";
    }
  }
  &::selection {
    background-color: transparent;
  }
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-Image: initial;
`;

const InputError = styled.section<{ color: string }>`
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  color: ${({ color }) => (color === "danger" ? theme.palette.error.main : "")};
`;

const DefaultInput = (props: {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  onChange: Function;
  onFocus?: Function;
  error: string;
  touch: boolean;
  disabled?: boolean;
  isReadOnly?: boolean;
  value: any;
}) => {
  const { isRequired = false, disabled = false, isReadOnly = false } = props;
  const isError = Boolean(props.error);

  return (
    <InputContainer>
      <Label>
        {props.label}
        {isRequired && <Required>*</Required>}
      </Label>
        <Input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={(e) => (!isReadOnly ? props.onChange(e) : null)}
          onFocus={(e) => props.onFocus && props.onFocus(e)}
          placeholder={props.placeholder}
          error={isError}
          disabled={disabled}
          readOnly={isReadOnly}
        />
      <InputError color={isError ? "danger" : "info"}>
        {isError ? props.error : ""}
      </InputError>
    </InputContainer>
  );
};

export default DefaultInput;
