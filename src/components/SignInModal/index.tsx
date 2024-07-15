'use client';

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import type { ModalWindowBaseProps } from '../../types/common';

const SignInModal = ({ isOpen }: ModalWindowBaseProps) => {
  const router = useRouter();
  // const previousUrl = useRef<string>('/');

  const onClose = () => router.back();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>Welcome to Your App</ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onClose}>Sign in</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;
