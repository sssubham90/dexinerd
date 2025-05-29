// store/alertStore.ts
import { atom } from "jotai";

export type AlertType = "success" | "error";

export interface AlertState {
  show: boolean;
  type: AlertType;
  message: string;
}

export const alertAtom = atom<AlertState>({
  show: false,
  type: "success",
  message: "",
});

export const showAlertAtom = atom(
  null,
  (get, set, { type, message }: { type: AlertType; message: string }) => {
    set(alertAtom, { show: true, type, message });
    setTimeout(() => {
      set(alertAtom, { ...get(alertAtom), show: false });
    }, 7000);
  }
);
