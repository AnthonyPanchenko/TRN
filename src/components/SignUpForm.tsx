import { Input, Spacer } from '@nextui-org/react';

const SignUpForm = () => {
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
      <Spacer y={1} />
      <Input
        fullWidth
        isClearable
        color="primary"
        placeholder="Confirm Password"
        type="password"
      />
    </>
  );
};

export default SignUpForm;
