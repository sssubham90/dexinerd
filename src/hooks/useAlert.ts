// store/useAlert.ts
import { useSetAtom } from "jotai";
import { type AlertType, showAlertAtom } from "../store/alertStore";

export const useAlert = () => {
	const showAlert = useSetAtom(showAlertAtom);
	return (message: string, type: AlertType) => showAlert({ type, message });
};
