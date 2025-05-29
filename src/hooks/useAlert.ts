// store/useAlert.ts
import { useSetAtom } from "jotai";
import { showAlertAtom, AlertType } from "../store/alertStore";

export const useAlert = () => {
  const showAlert = useSetAtom(showAlertAtom);
  return (message: string, type: AlertType) => showAlert({ type, message });
};
