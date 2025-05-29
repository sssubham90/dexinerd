import { useAtom } from "jotai";
import { alertAtom } from "../store/alertStore";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2">
      <CrossCircledIcon className="text-red-500 w-[35px] h-auto" />
      <span className="text-[#171717] text-lg font-normal max-[1440px]:text-[16px]">
        {message}
      </span>
    </div>
  );
}

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircledIcon className="text-green-500 w-[35px] h-auto" />
      <span className="text-[#171717] text-lg font-normal max-[1440px]:text-[16px]">
        {message}
      </span>
    </div>
  );
}

function Alert() {
  const [alert] = useAtom(alertAtom);

  if (!alert.show) return <></>;

  return (
    <div className="bg-white z-50 sticky bottom-0 animate-float-up shadow-up pb-[env(safe-area-inset-bottom)]">
      <div className="py-6 mx-auto max-w-[1521px] flex flex-row justify-between items-center max-[1553px]:mx-4">
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
