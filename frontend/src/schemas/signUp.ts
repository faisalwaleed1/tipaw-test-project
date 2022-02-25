import * as Yup from 'yup';

const signUpSchema = Yup.object({
  email: Yup.string().required('Required'),
  firstName: Yup.string().max(50).required('Required'),
  lastName: Yup.string().max(50),
  phoneNumber: Yup.string(),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
  .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export { signUpSchema };
