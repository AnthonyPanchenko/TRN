import SignInForm from '../../../../components/SignInForm';
import BaseModal from '../../../../ui/Modal';

export default function SignInPage() {
  return (
    <BaseModal isOpen>
      <SignInForm />
    </BaseModal>
  );
}
