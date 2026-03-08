import { useAtom } from "jotai";
import ErrorIcon from "../assets/svg/ErrorIcon.svg?react";
import SuccessIcon from "../assets/svg/SuccessIcon.svg?react";
import { alertAtom } from "../store/alertStore";

function ErrorMessage({ message }: { message: string }) {
	return (
		<div className="flex items-center gap-2">
			<ErrorIcon className="text-red-500 w-8.75 h-auto" />
			<span className="text-[#171717] text-lg font-normal max-[1440px]:text-[16px]">
				{message}
			</span>
		</div>
	);
}

function SuccessMessage({ message }: { message: string }) {
	return (
		<div className="flex items-center gap-2">
			<SuccessIcon className="text-green-500 w-8.75 h-auto" />
			<span className="text-[#171717] text-lg font-normal max-[1440px]:text-[16px]">
				{message}
			</span>
		</div>
	);
}

function Alert() {
	const [alert] = useAtom(alertAtom);

	if (!alert.show) return;

	return (
		<div className="bg-white z-50 sticky bottom-0 animate-float-up shadow-up pb-[env(safe-area-inset-bottom)]">
			<div className="py-6 mx-auto max-w-380.25 flex flex-row justify-between items-center max-[1553px]:mx-4">
				<div className="flex flex-row items-center justify-center gap-2.5 py-[2.5px]">
					{alert.type === "error" ? (
						<ErrorMessage message={alert.message} />
					) : (
						<SuccessMessage message={alert.message} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Alert;
