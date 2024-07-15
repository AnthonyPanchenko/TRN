import { Input, Spacer } from '@nextui-org/react';

const SignInForm = () => {
  return (
    <>
      <Input
        fullWidth
        isClearable
        color="primary"
        placeholder="Email"
      />
      <Spacer y={1} />
      <Input
        fullWidth
        isClearable
        color="primary"
        placeholder="Password"
        type="password"
      />
    </>
  );
};

export default SignInForm;
