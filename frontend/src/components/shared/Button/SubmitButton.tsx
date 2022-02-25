import styled from "@emotion/styled";

const getBackground = (background: string | undefined) =>
  background ? background : "#523178";

interface IButton {
  onClick?: () => void;
  label: string;
  color?: string;
  background?: string;
  disabled?: boolean;
}

const CustomButton = styled.button<{
  disabled: boolean;
  color?: string;
  background?: string;
}>`
  min-width: 120px;
  font-weight: 400;
  height: 45px;
  font-size: 13.5px;
  cursor: pointer;
  padding: 13px 0px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#ffffff;")};
  border-radius: 5px;
  box-shadow: 1px 2px 3px 0 rgba(76, 76, 76, 0.5);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  background-color: ${({ background }) => getBackground(background)};
`;

const Button = (props: IButton) => {
  const { disabled = false } = props;
  return (
    <CustomButton {...props} disabled={disabled} type="submit">
      {props.label}
    </CustomButton>
  );
};

export default Button;
