 /** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import SignupForm from 'components/Signup/SignUpForm';

const Signup = () => {
  return (
    <div css={css({
        background: '#5acee8',
        padding: '50px 0px'
      })}
    >
      <div css={css({
          margin: '30px auto',
          paddingLeft: '50px',
          paddingRight: '50px',
          width: 'min-content',
          maxWidth: '100%',
          position: 'relative'
        })}
      >
        <SignupForm />
      </div>
    </div>
  )
};

export default Signup;
