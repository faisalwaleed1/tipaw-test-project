import styled from "@emotion/styled";

const getBorderColor = (props: {
  error: boolean;
  success: boolean;
  default?: string;
}) => {
  let color = props.default ? props.default : "transparent";
  if (props.success) color = "#479959";
  if (props.error) color = "#ee2737";
  return `${color}`;
};

const InputContainer = styled.section`
  margin-bottom: '15px',
  vertical-align: 'top',
  width: 'calc( 100% - 0px )',
  display: 'block',
`;

const RequiredSteric = styled.section`
  color: #ff453e;
  margin-left: 6px;
  display: inline-block;
`

const Label = styled.label<{ error: boolean }>`
  margin-bottom: 6px;
  text-align: left;
  font-weight: 600;
  color: #8c96a3;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.error ? "#4a4a4a" : "##8c96a3")};
`;

const Input = styled.input<{ error: boolean; success: boolean }>`
  width: -webkit-fill-available;
  padding: 7px 42px 7px 12px;
  font-size: 16px;
  background: white;
  color: rgb(112, 112, 112) !important;
  -webkit-text-fill-color: rgb(112, 112, 112) !important;
  border-color: rgb(255, 69, 62) !important
  border: ${({ error, success }) =>
    `2px solid ${getBorderColor({ error, success })}`};
  :focus {
    & + div {
      border-color: ${({ success }) => (success ? "#479959" : "#523178")};
    }
  }
  &::selection {
    background-color: transparent;
  }
  ::-webkit-input-placeholder {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 200;
    font-stretch: normal;
    font-style: italic;
    line-height: normal;
    letter-spacing: normal;
    color: #4a4a4a;
  }
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-Image: initial;
`;

const InputMessage = styled.section<{ color: string }>`
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  text-align: left;

  color: ${({ color }) => (color === "danger" ? "red" : "")};
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
  const isSuccess = Boolean(!props.error && props.touch);

  return (
    <InputContainer>
      <Label error={Boolean(props.error)}>
        {props.label}
        {isRequired && <RequiredSteric />}
      </Label>
        <Input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={(e) => (!isReadOnly ? props.onChange(e) : null)}
          onFocus={(e) => props.onFocus && props.onFocus(e)}
          placeholder={props.placeholder}
          error={isError}
          success={isSuccess}
          disabled={disabled}
          readOnly={isReadOnly}
        />
      <InputMessage color={isError ? "danger" : "info"}>
        {isError ? props.error : ""}
      </InputMessage>
    </InputContainer>
  );
};

export default DefaultInput;
