export default interface IButton {
  onClick?: () => void;
  label: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
