import type { ReactNode } from "react";

export interface CalendarProps {
  value?: string;
  onChange?: (date: string) => void;
}

export declare function Calendar(
  props: CalendarProps
): ReactNode;