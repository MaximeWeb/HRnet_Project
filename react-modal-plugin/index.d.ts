import type { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export declare function Modal(props: ModalProps): ReactNode;