import IButton from './types';
import DefaultButton from './DefaultButton';

const SubmitButton = (props: IButton) => {
  const { disabled = false } = props;
  return (
    <DefaultButton {...props} disabled={disabled} type="submit" background="#ffcc01" />
  );
};

export default SubmitButton;
