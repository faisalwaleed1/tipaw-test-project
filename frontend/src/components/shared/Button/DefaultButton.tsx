import styled from "@emotion/styled";
import IButton from './types';

const getBackground = (background: string | undefined) =>
  background ? background : "#1b2f8f";

const StyledButton = styled.button<{
  disabled: boolean;
  color?: string;
  background?: string;
}>`
  min-width: 120px;
  height: 45px;
  cursor: pointer;
  padding: 13px 0px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#ffffff;")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  background-color: ${({ background }) => getBackground(background)};
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 15px;
  height: 40px;
  line-height: unset;
  padding: 0px 24px;
  box-shadow: none;
  width: 100%;
  border: none;
  border-color: white;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
  position: relative;
`;

const Button = (props: IButton) => {
  const { disabled = false } = props;
  return (
    <StyledButton {...props} disabled={disabled} type={props.type || "button"}>
      {props.label}
    </StyledButton>
  );
};

export default Button;
