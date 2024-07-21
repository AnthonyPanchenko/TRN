import SignUpForm from '../../../../components/SignUpForm';
import ModalContainer from '../../../../ui/ModalContainer';

export default function SignUpPage() {
  return (
    <ModalContainer isOpen>
      <SignUpForm />
    </ModalContainer>
  );
}
