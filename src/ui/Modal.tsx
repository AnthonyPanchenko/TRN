'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import type { ModalWindowBaseProps } from '../types/common';

const BaseModal = ({ children, isOpen }: React.PropsWithChildren & ModalWindowBaseProps) => {
  const router = useRouter();
  // const previousUrl = useRef<string>('/');

  const onClose = () => router.back();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>Welcome to</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onClose}>Go</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
