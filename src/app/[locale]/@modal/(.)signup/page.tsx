import SignUpForm from '../../../../components/SignUpForm';
import BaseModal from '../../../../ui/Modal';

export default function SignUpPage() {
  return (
    <BaseModal isOpen>
      <SignUpForm />
    </BaseModal>
  );
}
