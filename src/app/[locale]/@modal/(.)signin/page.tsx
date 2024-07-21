import SignInForm from '../../../../components/SignInForm';
import ModalContainer from '../../../../ui/ModalContainer';

export default function SignInPage() {
  return (
    <ModalContainer isOpen>
      <SignInForm />
    </ModalContainer>
  );
}
